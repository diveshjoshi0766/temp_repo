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
    Easing 
} from "react-native";
import * as Animatable from 'react-native-animatable';
import Logo from "../components/Logo";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../config";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

var {width: SCREEN_WIDTH, height: SCREEN_HEIGHT,} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;
console.log(SCREEN_HEIGHT)
console.log(SCREEN_WIDTH)
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
    
    const [ques_obj, setQues_obj] = useState(null)
    const [ques, setQues] = useState(0);
    const [option, setOption] = useState(0)

    const [score, setScore]= useState(0)
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const [options, setOptions] = useState([])
    // const isMonuted = useRef(true)
    const [data, setData] = useState()

    const [ques_arr, setQues_arr] = useState({})
    const [ans_arr, setAns_arr] = useState({})
    const {isLoading, register, userInfo, survey_question_func, surveyQuestion} = useContext(AuthContext);

    const getQuiz = () => {
        
    };

    // useEffect(() => {
    //     // getQuiz(232, parseInt(userInfo.results.panelistID));
    //     let isMounted = true
    //     setLoading(true)
    //     console.log(userInfo)
    //     axios
    //     .get(`http://staging.paneloptimus.com/api/getCountryQuestion/232/${parseInt(userInfo.results.panelistID)}`)
    //     .then(res => {
    //         let responce_data = res.data;
    //         console.log(res.data)
    //         if(responce_data.status == 'success'){
    //             // setQues_obj(res.data.Results)
    //             let len = Object.keys(res.data.Results).length
    //             let val = Object.values(res.data.Results)
    //             console.log(len)
    //             console.log(val)
    //             console.log(val[0].Question.question_code)
    //             for(let i=0;i<len;i++){
    //                 // ques_arr()
    //                 if(isMounted){
    //                 // setQues_arr((ques_arr) => [...ques_arr, val[i].Question])
    //                 setQues_arr((ques_arr) => [...ques_arr, val[i].Question])  
    //                 setAns_arr((ans_arr) => [...ans_arr, val[i].AnswerList])
    //                 }
    //             }
                
    //                 // setQuestions(res.data.Results)
                
    //         }
    //         setLoading(false);
    //     })
    //     .catch(e => {
    //     console.log(`register error ${e}`);
    //     setLoading(false);
    //     });
    //     return () => {
    //         // setQuestions({}); // This worked for me
    //         isMounted = false
    //     };
      
    // }, []);

    // I have to return ans object in that object key will be "question_code" and value will be "answer_code" -> answer_code can be a strign containing multiple answers


    useEffect(() => {
        survey_question_func()
    }, [])

    console.log(userInfo.results.panelistID)

    console.log(surveyQuestion)

    const handleNextPress=()=>{
        setQues(ques+1)
        // setOptions(setQuestions.get(ques+1))
    }

    const handlSelectedOption=(_option)=>{
        if(_option===questions[ques].correct_answer){
            setAnswers()
        }
        if(ques!==9){
            setQues(ques+1)
            setOptions(questions[ques+1])
        }
        if(ques===9){
            handleShowResult()
        }
    }
    
    const handleShowResult=()=>{
        navigation.navigate('Result', {
            score: score
        })
    }

    // console.log(typeof(Object.entries(Object.values(questions))[0]))
    // let temp = Object.entries(Object.values(questions))[0]
    // if(temp !== undefined){
    //     console.log(temp)
    //     // temp.map((val) => {
    //     //     console.log(val)
    //     // })
    // }
    // console.log(questions)

    console.log(ques_arr[0])
    console.log(ans_arr[0])

    return (        
    <View style={styles.container}>
    <Animatable.View 
        animation="fadeInUpBig"
        style={[styles.footer, {
            backgroundColor: "rgb(235 235 235)"
        }]}
    >

        {/* heading */}
        <Text style={{color: '#000000', marginTop:normalize(5), fontWeight: 'Bold', fontSize: normalize(23), fontFamily: 'Poppins Regular 400', textAlign: "center"}}>Profile Survey</Text>
       
        {/* Question */}
        {
            isLoading ? <View style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
                <Text style={{fontSize:32, fontWeight:'700'}}>LOADING...</Text>
            </View> : <Text style={{color: '#000000', marginTop:10,  fontSize:normalize(17), fontWeight: 'bold', fontFamily: 'Poppins Regular 400',}}>{ques}. {questions[ques]}</Text>
        }
      
        
        <Text style={{color: '#000000', marginTop:10,  fontSize:normalize(17), color: 'red', fontFamily: 'Poppins Regular 400',}}>please select any one of them  </Text>
        <TouchableOpacity style={{minHeight: 'justifyContent'}}>
            <View style={[styles.action]}>
                <Text style={{ fontSize: normalize(19), fontFamily: 'Poppins Regular 500'}}>1. Single Never married</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{minHeight: 'justifyContent'}}>
            <View style={[styles.action]}>
                <Text style={{ fontSize: normalize(19), fontFamily: 'Poppins Regular 400'}}>1. Single Never married</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{minHeight: 'justifyContent'}}>
            <View style={[styles.action]}>
                <Text style={{ fontSize: normalize(19), fontFamily: 'Poppins Regular 400'}}>1. Single Never married</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{minHeight: 'justifyContent'}}>
            <View style={[styles.action]}>
                <Text style={{ fontSize: normalize(19), fontFamily: 'Poppins Regular 400'}}>1. Single Never married</Text>
            </View>
        </TouchableOpacity>

        <View style={styles.button}>

            <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}
                style={[styles.signIn, {
                    backgroundColor: '#378C3C',
                }]}
            >
                <Text style={[styles.textSign, {
                    color: '#fff'
                }]}>Next</Text>
            </TouchableOpacity>
        </View>
        
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
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: '#ffffff', 
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
