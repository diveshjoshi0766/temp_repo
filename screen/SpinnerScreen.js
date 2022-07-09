import React, { useContext, useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Platform, 
    PixelRatio,
    ScrollView,
    ImageBackground
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import WebViewScreen from "./WebViewScreen";
import { BASE_URL } from "../config";
import { TouchableOpacity } from "react-native-web";

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


export default function SpinnerScreen({navigation}) {
    const {userInfo, panelist_basic_details} = useContext(AuthContext);
    console.log(userInfo.Result.countryID)
    console.log(userInfo.Result.panelistID)
    const [comments,setComments]=useState(null)
    const [link, setLink] = useState(null)
    useEffect(() => {
      fetchComments();
    }, [])
    useEffect(() => {
      console.log(comments)
    }, [comments])
    const fetchComments=async()=>{
    const response=await axios(`${BASE_URL}/surveySpinner/${parseInt(userInfo.Result.countryID)}/${parseInt(userInfo.Result.panelistID)}`);
    setComments(response.data.result)    
    }
    console.log(link)
    if(link === null){
        return (
        <ScrollView showsVerticalScrollIndicator ={false}>
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Good Morning, {userInfo.Result.firstname}</Text>
            </View>
            {/* heading */}
            <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', marginBottom: 6}}>
                <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(22), fontFamily: 'Poppins Regular 400'}}>Spinner</Text>
                <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(22), fontFamily: 'Poppins Regular 400' }}><Icon name="user" size={20} color="black"/> Profile</Text>
            </View>
            <View style={styles.points}>
                <View style={styles.center}>
                    <Text style={styles.text_box_black_header}>My Points</Text>
                    <Text style={styles.text_box_black_points}>{userInfo.Result.current_point}</Text>
                </View>
                <View style={styles.center}>
                    <Text style={styles.text_box_black_header}>My Profile</Text>
                    <Text style={styles.text_box_black_points}>{userInfo.Result.profilePercentage}%</Text>
                </View>
            </View>
            

            {
                comments && comments.map((ele, val) => {  
                    if(val % 2 == 0){
                        return (
                            <TouchableOpacity style={styles.products} key={val} onPress={() => {setLink(ele.Link)}}>
                                <View style={[styles.center, {flex: 1.2}]}>
                                    <Text style={{textAlign: 'center', fontSize: 15, fontFamily: 'Poppins Regular 400', fontWeight: '500'}}>{ele.Description}</Text>
                                </View>
                                <View style={[styles.center, {flex: 0.8}]}>
                                    <View style={{alignItems: 'center', marginTop: '0'}}>
                                        <ImageBackground style={[styles.stretch]}
                                            source={require("../assets/spinner_edited.gif")} resizeMode="cover">
                                            <Image
                                                style={{width: 70, height: 70}}
                                                source={require(`../assets/${ele.Incentive}.png`)}
                                            />
                                        </ImageBackground>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    else{
                        return (
                            <TouchableOpacity style={styles.products} key={val} onPress={() => {setLink(ele.Link)}}>
                                <View style={[styles.center, {flex: 0.8}]}>
                                    <View style={{alignItems: 'center', marginTop: '0'}}>
                                        <ImageBackground style={[styles.stretch]}
                                            source={require("../assets/spinner_edited.gif")} resizeMode="cover">
                                            <Image
                                                style={{width: 70, height: 70}}
                                                source={require(`../assets/${ele.Incentive}.png`)}
                                            />
                                        </ImageBackground>
                                    </View>
                                </View>
                                <View style={[styles.center, {flex: 1.2}]}>
                                    <Text style={{textAlign: 'center', fontSize: 15, fontFamily: 'Poppins Regular 400', fontWeight: '500'}}>{ele.Description}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                })
            }
        </View>
        </ScrollView>
        )   
    }
    else{
        console.log(link)
        return (
            <WebViewScreen link={link}></WebViewScreen>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        padding: 10,
        flexDirection:'col',
        minHeight: SCREEN_HEIGHT,
        minWidth: SCREEN_WIDTH,
    },
    stretch: {
        width: 100,
        height: 100,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        color: '#000000', 
        marginTop:10, 
        fontSize:normalize(25),
        fontWeight: 'bold',
        fontFamily: 'Poppins Regular 400'
        // fontFamily: 'Poppins_Black900' 
    },
    footer: {
        flex: 1,
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
        marginTop: normalize(5),
        maxHeight: 50,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center',
        borderRadius: normalize(10),
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 3,
        paddingRight: 3,
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
        alignItems: 'center',
        marginTop: normalize(30),
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
    center :{
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
    },
    points: {
        display:'flex', 
        flexDirection:'row', 
        justifyContent: 'space-evenly', 
        backgroundColor: '#1a1a1a', 
        alignContent: "center",
        height: 'justifyContent',
        paddingLeft: normalize(5),
        paddingRight: normalize(5),
        borderRadius: 20,
        padding: 10,
    },
    text_box_black_header: {
        color: '#fff', 
        marginTop:10, 
        fontWeight: '300',
        textAlign: "center", 
        fontSize:normalize(18),
        fontFamily: 'Poppins Regular 400'
    },
    text_box_black_points: {
        color: '#fff', 
        marginTop:5, 
        // fontWeight: '500',
        textAlign: "center", 
        fontSize: normalize(30),
        fontFamily: 'Poppins Regular 400'
    },
    items:{
        display:'flex', 
        flexDirection:'row', 
        justifyContent: 'space-evenly', 
        backgroundColor: '#fff', 
        alignContent: "center",
        height: 'justifyContent',
        paddingLeft: normalize(5),
        paddingRight: normalize(5),
        borderRadius: 10,
        marginTop: normalize(10),
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 1
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    products: {
        maxHeight: 120,
        flex: 1,
        backgroundColor: '#fff',
        display:'flex',
        flexDirection:'row', 
        borderRadius: 10,
        marginTop: normalize(10),
        borderColor: 'black',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 1
        },
        shadowRadius: 5,
        shadowOpacity: 0.1
    }
  })
