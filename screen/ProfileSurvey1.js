import React, { useEffect, useState, useContext } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Platform, 
    PixelRatio,
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

export default function ProfileSurvey1({navigation}) {
    
    const {userInfo, panelist_profiling_ans, panelist_basic_details} = useContext(AuthContext);

    console.log(userInfo && userInfo)
    console.log(panelist_basic_details && panelist_basic_details)
    if(panelist_basic_details && panelist_basic_details){
        console.log(panelist_basic_details.Results.profilePercentage)
        if(parseInt(panelist_basic_details.Results.profilePercentage) == 100){
            navigation.navigate('Home')
        }
    }
    if(userInfo && userInfo){
        console.log(userInfo.Result.profilePercentage)
        if(parseInt(userInfo.Result.profilePercentage) == 100){
            navigation.navigate('Home')
        }
    }
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const [data, setData] = useState(null)
    const [ques, setQues] = useState(0);
    const [ans, setAns] = useState([])
    const [ques_idx, setQues_idx] = useState(null)
    useEffect(async () => {

        let isMounted = true
        setLoading(true)
        axios
        .get(`${BASE_URL}/getCountryQuestion/100/396`)
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
  
    }, []);
    console.log(ques)

    let data_arr = null
    if(data && data) {
        data_arr = data
        if(userInfo.Result.answerList.length > 0){
            for(let i=0;i<userInfo.Result.answerList.length;i++){
                let obj = userInfo.Result.answerList[i]
                let ques_id_ = obj.ques_id
                let ans_id_ = obj.ans_id
                let ans_id_arr = ans_id_.split(',')
                for(let j=0;j<data_arr.length;j++){
                    if(data_arr[j].AnswerList[0].profile_question_id == ques_id_){
                        for(let k=0;k<data_arr[j].AnswerList.length;k++){
                            for(let x=0;x<ans_id_arr.length;x++){
                                if(data_arr[j].AnswerList[k].answer_code == ans_id_arr[x]){
                                    data_arr[j].AnswerList[k].is_answered = true
                                    console.log("hittttttttttttttttttt")
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    const move_to_next = () => {
        let flag = false
        for(let i=0;i<data_arr[ques].AnswerList.length;i++){
            if(data_arr[ques].AnswerList[i].is_answered == true){
                flag == true
            }
        }
        if(!flag){
            setQues(ques+1)
        }
        return flag;
    }

    console.log(ques)
    //while going back he have two options whether to keep that answer or to change the current answer
    //if the user chooses the current answer ones again then it might happen in other case that we looses the responce of that question
    //so which one to take

    const handle_option_press=(ques_id, ans_id, ans_idx)=>{
        data_arr[ques].AnswerList[ans_idx].is_answered = true;
        
        //make every option false except answer one
        for(let i=0;i<data_arr[ques].AnswerList.length;i++){
            if(data_arr[ques].AnswerList[i].is_answered &&  i != ans_idx){
                data_arr[ques].AnswerList[i].is_answered = false
            }
        }
        // if user has not selected any options in current question state
        let flag = false;
        for(let i=0;i<data_arr[ques].AnswerList.length;i++){
            if(data_arr[ques].AnswerList[i].is_answered){
                flag = true;
            }
        }
        if(!flag){
            alert("Please select the updated option")
        }
        else{
            console.log("here ans state is updated")
            let len = data.length
            let temp_arr = ans;
            let temp = true;
            //checking whether the ans state already contains the present ques_id or not
            for(let i=0;i<temp_arr.length;i++){
                if(temp_arr[i].ques_id == ques_id){
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
            }
            if(temp){
                console.log("I am ifdsafasfsafdsafsaf")
                data_arr[ques].AnswerList[ans_idx].is_answered = true
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
        }
    }
    
    const [multi_ans, setMulti_ans] = useState("");
    const [isSelected, setIsSelected] = useState([])

    let ans_selected = []
    const handle_multiple_select = (ques_id, ans_id, ans_idx) => {
        // ans_selected.push(ans_id)
        console.log(data_arr[ques].AnswerList[ans_idx] && data_arr[ques].AnswerList[ans_idx])
        data_arr[ques].AnswerList[ans_idx].is_answered = !data_arr[ques].AnswerList[ans_idx].is_answered;
        console.log(ans_selected)
        let temp_arr = isSelected
        let flag = true;
        for(let i=0;i<temp_arr.length;i++){
            if(temp_arr[i] == ans_id){
                console.log("I am here")
                data_arr[ques].AnswerList[ans_idx].is_answered = false
                flag = false;
            }
        }
        if(flag){
            setIsSelected([...isSelected, ans_id])
            setMulti_ans(multi_ans+ans_id+",")
            console.log(multi_ans)
            console.log(isSelected)
        }
    }

    const next_question = (ques_id) => {
        let temp = ans
        let flag = true
        for(let i=0;i<temp.length;i++){
            if(temp[i].ques_id == ques_id){
                flag == false
            }
        }

        if(flag){
            let obj = {
                ques_id: ques_idx[ques_id],
                ans_id: multi_ans
            }
            ans_selected = []
            setIsSelected([])
            setMulti_ans("")
            setAns([...ans, obj]);
            setQues(ques+1)
        }
    }

    const back_question = () => {
        if(ques != 0){
            setQues(ques-1)
        }
    }

    console.log(ans)
    const handleShowResult=()=>{
        // let arr = ques_idx;
        // let ans_obj = []
        // for(let i=0;i<arr.length;i++){
        //     for(let j=0;j<data_arr[i].AnswerList.length;j++){
        //         let flag = false;
        //         let str = ""
        //         if(data_arr[i].AnswerList[j].is_answered == true && data[ques].Question.question_type_id == 2){
        //             flag = true
        //             let temp = {
        //                 key:`${arr[i]}`,
        //                 value: `${data_arr[i].AnswerList[j].answer_code}`
        //             };
        //             ans_obj.push(temp)
        //             continue
        //         }
        //         else if(data_arr[i].AnswerList[j].is_answered == true && data[ques].Question.question_type_id == 3){
        //             str += data_arr[i].AnswerList[j].answer_code+",";
        //         }
                
        //         if(flag == false){
        //             let temp = {
        //                 key:`${arr[i]}`,
        //                 value: `${str}`
        //             };
        //             ans_obj.push(temp)
        //         }
        //     }   
        // }
        
        let arr = ans;
        for(let i=0;i<arr.length;i++){
            console.log(arr[i].ques_id)
        }
        let final_ans = []
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i].ques_id == arr[j].ques_id){
                    console.log("HITTTTTTTTT")
                    arr[i] = null;
                }
            }
        }
        console.log(arr)
        let counter = 0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]!=null){
                final_ans[counter] = arr[i]
                counter++;
            }
        }
        arr = []
        console.log(final_ans)
        AsyncStorage.setItem('ans_obj', JSON.stringify(final_ans));
        // console.log(ans_obj)
        panelist_profiling_ans(final_ans)
        console.log("here")
        setAns([])
        navigation.navigate('End Of Profile Survey Screen')
    }
    if(data_arr == null){
        return (
            <Text></Text>
        )
    }
    else{
        return (        
        <View style={styles.container}>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: "rgb(235 235 235)"
            }]}
        >
            <Text style={{color: '#000000', marginTop:normalize(5), fontWeight: 'bold', fontSize: normalize(23), textAlign: "center"}}>Profile Survey</Text>
        
            {
                data_arr[ques] && data_arr[ques].Question ?
                <>
                    <Text style={{color: '#000000', marginTop:10,  fontSize:normalize(20), fontWeight: 'bold'}}>{data_arr[ques].Question.question_title}</Text> 
                </>  
                :
                <View style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
                        <Text style={{fontSize:32, fontWeight:'700'}}>LOADING...</Text>
                </View>
            }
        
            {
                data_arr && data_arr[ques] && data_arr[ques].Question.question_type_id == 3 ?
                <Text style={{ marginTop:10,  fontSize:normalize(20), color: '#00a4de', }}>Pick <Text style={{color: '#000000'}}>All Applicable</Text></Text>
                :
                <Text style={{ marginTop:10,  fontSize:normalize(20), color: '#00a4de'}}>Pick <Text style={{color: '#000000'}}>One Answer</Text></Text>
            }
            
            
            {
                data_arr && data_arr[ques] && data_arr[ques].AnswerList ? 
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                {data_arr[ques].AnswerList.map((ele,val) => {
                    if(data_arr[ques].Question.question_type_id == 2){
                        return (
                        <View key={val}>
                            <TouchableOpacity  key={ele.answer_code} onPress={() => handle_option_press(ele.profile_question_id, ele.answer_code, val)}>
                                <View style={[styles.action, {backgroundColor: ele.is_answered ? '#378C3C' : '#ffffff'}]}>
                                    <Text style={{ fontSize: normalize(19), }}>{ele.description}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        )
                    }
                    else{
                        return (
                            <View key={val}>
                                <TouchableOpacity key={ele.answer_code} onPress={() => {
                                    console.log(ele.answer_code)
                                    let flag = false;
                                    for(let i=0;i<ans_selected.length;i++){
                                        if(ans_selected[i] == ele.answer_code){
                                            ans_selected[i] = null;
                                            flag = true
                                        }
                                    }
                                    if(flag == false){
                                        ans_selected.push(ele.answer_code)
                                    }
                                    console.log(ans_selected)
                                    handle_multiple_select(ele.profile_question_id, ele.answer_code, val)}}>
                                    <View style={[styles.action, {backgroundColor: ele.is_answered ? '#378C3C' : '#ffffff'}]}>
                                        <Text style={{ fontSize: normalize(19), }}>{ele.description}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                })}</ScrollView> : <Text>Loading</Text>
            }



            {
                ques == 0 ? 
                <></>
                :
                data_arr && data_arr[ques] && data_arr[ques].Question.question_type_id == 2 ? 
                <View style={[styles.button, {display: 'flex', flexDirection: 'row', justifyContent: "center"}]}>
                    <TouchableOpacity style={[styles.signIn, {backgroundColor: '#378C3C', borderRadius: 40, marginRight: 10}]} onPress={() => back_question()}>
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.signIn, {backgroundColor: '#8C6E63', borderRadius:40, marginLeft: 10 }]} onPress={() => {let ret = move_to_next() 
                        // if(!ret){alert("Please select one of the above")}
                    }}>
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Next</Text>
                    </TouchableOpacity>
                </View> 
                :
                <View style={[styles.button, {display: 'flex', flexDirection: 'row', justifyContent: "center"}]}>
                    <TouchableOpacity style={[styles.signIn, {backgroundColor: '#378C3C',borderRadius: 40, marginRight: 10}]} onPress={() => back_question()}>
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.signIn, {backgroundColor: '#378C3C',borderRadius: 40, marginLeft: 10}]} onPress={() => next_question(ques)}>
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Next</Text>
                    </TouchableOpacity>
                </View>
            }
            </Animatable.View>
        </View>
        );
    }
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
        paddingVertical: 30,
        paddingBottom: 80,
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
        borderRadius: normalize(3),
        borderWidth: 1,
        borderColor: "#2955a9"

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
        position: 'absolute',
        alignItems: 'center',
        // bottom: 20,
        flex: 1,
        justifyContent: 'flex-end',
        bottom: SCREEN_WIDTH*0.03,
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