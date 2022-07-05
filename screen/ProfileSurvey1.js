import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Platform, 
    PixelRatio,
    CheckBox,
    Animated,
    Easing 
} from "react-native";
import * as Animatable from 'react-native-animatable';
import Logo from "../components/Logo";

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

    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions]= useState([])
    const [score, setScore]= useState(0)
    const [isLoading, setIsLoading]= useState(false)

    const getQuiz = async () => {
        setIsLoading(true)
        const url = 'BASE_URL';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
        setOptions(generateOptionsAndShuffle(data.results[0]))
        setIsLoading(false)
    };

    const handleNextPress=()=>{
        setQues(ques+1)
        setOptions(generateOptionsAndShuffle(questions[ques+1]))
      }
    
      const generateOptionsAndShuffle=(_question)=>{
        const options= [..._question.incorrect_answers]
        options.push(_question.correct_answer)
        return options
      }
    
      const handlSelectedOption=(_option)=>{
        if(_option===questions[ques].correct_answer){
          setScore(score+10)
        }
        if(ques!==9){
          setQues(ques+1)
          setOptions(generateOptionsAndShuffle(questions[ques+1]))
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

    useEffect(() => {
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
        }, []);

        const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
   
    return (
        
    <View style={styles.container}>
    <Animatable.View 
        animation="fadeInUpBig"
        style={[styles.footer, {
            backgroundColor: "rgb(235 235 235)"
        }]}
    >

        {/* logo */}
        <Logo></Logo>
        {/* heading */}
        <Text style={{color: '#000000', marginTop:normalize(5), fontWeight: 'Bold', fontSize: normalize(23), fontFamily: 'Poppins Regular 400', textAlign: "center"}}>Profile Survey</Text>
       
        {/* Question */}
        <Text style={{color: '#000000', marginTop:10,  fontSize:normalize(17), fontWeight: 'bold', fontFamily: 'Poppins Regular 400',}}>1. What is the relationship status?  </Text>
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

        <Animatable.View animation="fadeInLeft" duration={500}>
        {/* <Text style={styles.errorMsg}>Username must be 4 characters long.</Text> */}
        </Animatable.View>


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
