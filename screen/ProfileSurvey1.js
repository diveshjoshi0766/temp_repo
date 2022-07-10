import React, { useEffect, useState, useContext } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Platform, 
    PixelRatio,
    Animated,
    Checkbox,
    ScrollView,
} from "react-native";
import * as Animatable from 'react-native-animatable';
import Logo from "../components/Logo";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../config";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

var {width: SCREEN_WIDTH, height: SCREEN_HEIGHT,} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;
export function normalize(size) {
    const newSize = size * scale 
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}
const spinValue = new Animated.Value(0);

export default function ProfileSurvey1({navigation}) {
    
    const {isLoading, register, userInfo, panelist_profiling_ans} = useContext(AuthContext);

    console.log(userInfo)

    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const [data, setData] = useState(null)
    const [ques, setQues] = useState(0);
    const [ans, setAns] = useState([])
    const [ques_idx, setQues_idx] = useState(null)

    useEffect(async () => {
        // getQuiz()

        let ans_obj = await AsyncStorage.getItem('ans_obj');
        let ans_obj_arr = JSON.parse(ans_obj);
        if(ans_obj_arr == null){
            let isMounted = true
            setLoading(true)
            axios
            .get(`${BASE_URL}/getCountryQuestion/232/536`)
            .then(res => {
                let responce_data = res.data;
                console.log()
                
                setData(Object.values(responce_data.Results))
                setQues_idx(Object.keys(responce_data.Results))
        
                setLoading(false);
            })
            .catch(e => {
            console.log(`register error ${e}`);
            setLoading(false);
            });
            return () => {
                // setQuestions({}); // This worked for me
                isMounted = false
            };
        }else{
            navigation.navigate('Profile Survey')
        }


    }, []);
    console.log(ques_idx)

    

    const handle_option_press=(ques_id, ans_id)=>{
        const len = data.length
        const ans_len = ans.lenght
        console.log(len)
        console.log(ques)
        let obj = {
            ques_id: ques_id,
            ans_id: ans_id
        }
        setQues(ques+1)
        setAns([...ans, obj]);
        if(ques == (len-1)){
            // AsyncStorage.setItem('answers', JSON.stringify(ans));
            handleShowResult()
            console.log("size equal")
        }
    }

    const [multi_ans, setMulti_ans] = useState("");
    const [isSelected, setIsSelected] = useState([])

    const handle_multiple_select = (ques_id, ans_id) => {
        setIsSelected([...isSelected, ans_id])
        setMulti_ans(multi_ans+ans_id+",")
        console.log(multi_ans)
    }

    const next_question = (ques_id) => {
        let obj = {
            ques_id: ques_idx[ques_id],
            ans_id: multi_ans
        }
        setIsSelected([])
        setMulti_ans("")
        setAns([...ans, obj]);
        setQues(ques+1)
    }

    console.log(ans)
    const handleShowResult=()=>{
        let arr = ans;
        let ans_obj = []
        for(let i=0;i<arr.length;i++){
            let temp = {
                key:`${arr.ques_id}`,
                value: `${arr.ans_id}`

            }; 
            ans_obj.push(temp)
        }
        AsyncStorage.setItem('ans_obj', JSON.stringify(ans));
        console.log(ans_obj)
        panelist_profiling_ans(ans_obj)
        console.log("here")
        navigation.navigate('End Of Profile Survey Screen')
    }

    const isPresent = (val) => {
        let bol;
        let arr = isSelected
        console.log(arr)
        console.log(val)
        for(let i=0;i<arr.length;i++){
            if(val == arr[i]){
                console.log("True HIT")
                return true
            }
        }
        console.log(bol)
        return false
    }

    return (        
    <View style={styles.container}>
    <Animatable.View 
        animation="fadeInUpBig"
        style={[styles.footer, {
            backgroundColor: "rgb(235 235 235)"
        }]}
    >
        <Logo></Logo>

        <Text style={{color: '#000000', marginTop:normalize(5), fontWeight: 'Bold', fontSize: normalize(23), fontFamily: 'Poppins Regular 400', textAlign: "center"}}>Profile Survey</Text>
    
        {
            data && data[ques] && data[ques].Question ?
            <>
                <Text style={{color: '#000000', marginTop:10,  fontSize:normalize(20), fontFamily: 'Poppins Regular 400', fontWeight: 'bold'}}>{data[ques].Question.question_title}</Text> 
            </>  
            :
            <View style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
                    <Text style={{fontSize:32, fontWeight:'700'}}>LOADING...</Text>
            </View>
        }
      
        {
            data && data[ques] && data[ques].Question.question_type_id == 3 ?
            <Text style={{color: '#000000', marginTop:10,  fontSize:normalize(17), color: 'red', fontFamily: 'Poppins Regular 400',}}>You can select multiple options</Text>
            :
            <Text style={{color: '#000000', marginTop:10,  fontSize:normalize(17), color: 'red', fontFamily: 'Poppins Regular 400',}}>Please select any one of them</Text>
        }
        
        
        {
            data && data[ques] && data[ques].AnswerList ? <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            
            {data[ques].AnswerList.map((ele,val) => {
                if(data[ques].Question.question_type_id == 2){
                    return (
                    <View key={val}>
                    <TouchableOpacity style={{minHeight: 'justifyContent'}} key={ele.answer_code} onPress={() => handle_option_press(ele.profile_question_id, ele.answer_code)}>
                        <View style={[styles.action, {backgroundColor: '#ffffff'}]}>
                            <Text style={{ fontSize: normalize(19), fontFamily: 'Poppins Regular 500'}}>{ele.description}</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                    )
                }
                else{

                    return (
                        <View key={val}>
                        <TouchableOpacity style={{minHeight: 'justifyContent', }} key={ele.answer_code} onPress={() => {handle_multiple_select(ele.profile_question_id, ele.answer_code)}} disabled={isPresent(ele.answer_code)}>
                            <View style={[styles.action, {backgroundColor: isPresent(ele.answer_code) ? '#378C3C' : '#ffffff'}]}>
                                <Text style={{ fontSize: normalize(19), fontFamily: 'Poppins Regular 500'}}>{ele.description}</Text>
                            </View>
                        </TouchableOpacity>

                        
                        </View>
                    )

                }
            })}</ScrollView> : <Text>Loading</Text>
        }

        {
            data && data[ques] && data[ques].Question.question_type_id == 3 ?
            <View style={styles.button}>
                <TouchableOpacity style={[styles.signIn, {backgroundColor: '#378C3C',}]} onPress={() => next_question(ques)}>
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Next</Text>
                </TouchableOpacity>
            </View>
            :
            <></>
            
        }
        </Animatable.View>
    </View>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#FAFAFA',
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'center',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    stretch: {
        // width: SCREEN_WIDTH*0.5,
        // height: SCREEN_WIDTH*0.5,
        width: SCREEN_WIDTH > SCREEN_HEIGHT ? SCREEN_HEIGHT * 0.4 : SCREEN_WIDTH * 0.4,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 1,
        backgroundColor: 'rgb(235 235 235)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        padding: normalize(6),
        marginTop: normalize(10),
        minHeight: normalize(40),
        maxHeight: 80,
        flexDirection:'row',
        alignItems:'center',
        borderRadius: normalize(10),
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 3,


    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        height: normalize(20),
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        // position: 'absolute',
        alignItems: 'center',
        // bottom: 20,
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: SCREEN_WIDTH*0.03,
        width: SCREEN_WIDTH*0.3,
        marginLeft: SCREEN_WIDTH*0.35,
        marginRight: SCREEN_WIDTH*0.35,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
  });
