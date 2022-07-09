import React, { useState, useContext, useEffect } from "react";
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
    ScrollView
} from "react-native";
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { BASE_URL } from "../config";
import WebViewScreen from "./WebViewScreen";

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

export default function DashboardScreen({navigation}) {

    const {userInfo} = useContext(AuthContext);
    const [comments,setComments]=useState(null)
    const [link, setLink] = useState(null)
    useEffect(() => {
      fetchComments();
    }, [])
    useEffect(() => {
      console.log(comments)
    }, [comments])
    const fetchComments=async()=>{
    const response=await axios(`${BASE_URL}/surveyListing/${parseInt(userInfo.Result.panelistID)}`);
    setComments(response.data.Results)    
    }
    console.log(comments)
    if(link ==  null){
    return (
    <ScrollView showsVerticalScrollIndicator ={false}>
    <View style={styles.container}>
        <View>
            <Text style={styles.header}>Good Morning, {userInfo.Result.firstname}</Text>
        </View>
        {/* heading */}
        <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', marginBottom: 6}}>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(22), fontFamily: 'Poppins Regular 400'}}>Dashboard</Text>
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
            comments && comments.map((ele) => {
                return (
                    <View style={styles.products} key={ele.survey_id}>
                        <View style={[styles.center, {justifyContent: "space-between"}]}>
                            <Text style={{fontWeight: 'bold', fontSize: normalize(18), fontFamily: 'Poppins Regular 400'}}>{ele.survey_title}</Text>
                            <View style={{flex: 1,display:'flex', flexDirection:'row', justifyContent: "space-around"}}>
                                <View style={{padding: 10, alignItems: 'center', paddingBottom: 4}}>
                                    <Image source={require('../assets/LOI.png')} style={styles.product_sml_icon_1}></Image>
                                    <Text style={styles.points_}>{ele.survey_duration}m</Text>
                                </View>
                                <View style={{padding: 10, alignItems: 'center',paddingBottom: 4}}>
                                    <Image source={require('../assets/reward_Gr.png')} style={styles.product_sml_icon_2}></Image>
                                    <Text style={styles.points_}>{ele.survey_incentive}pts</Text>
                                </View>
                            </View>
                            <View style={{alignItems: 'center', borderRadius: '50', height: 'justifyContent'}}>
                                <TouchableOpacity
                                    onPress={() => setLink(ele.survey_link)}
                                    style={[styles.survey_button, {
                                        backgroundColor: '#378C3C',
                                    }]}
                                >
                                    <Text style={[styles.textSign, {
                                        color: '#fff'
                                    }]}>Take Survey</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.center, {width: "50%"}]}> 
                            <Image
                                style={{width: 100, height: 100, alignItems: 'center', marginTop: '0'}}
                                source={require('../assets/health.png')}
                            />
                        </View>
                    </View>

                )
            })
        }


    </View>
    </ScrollView>
    );
    }else{
        console.log(link)
        return (
            <WebViewScreen link={link}></WebViewScreen>
        )
    }
  }


const styles = StyleSheet.create({
    points_:{
        color: '#000000', 
        textAlign: "center", 
        fontSize:normalize(18), 
        fontFamily:'Poppins Regular 400', 
        fontWeight: '500'
    },
    header:{
        color: '#000000', 
        marginTop:10, 
        fontSize:normalize(25),
        fontWeight: 'bold',
        fontFamily: 'Poppins Regular 400'
        // fontFamily: 'Poppins_Black900' 
    },
    container: {
        backgroundColor: '#FAFAFA',
        padding: 10,
        flexDirection:'col',
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
    product_sml_icon_1:{
        height: 30,
        width: 25,
        maxHeight: 30,
        maxWidth: 30,
    },
    product_sml_icon_2:{
        height: 30,
        width: 30,
        maxHeight: 30,
        maxWidth: 30,
    },
    stretch: {
        width: SCREEN_WIDTH*0.5,
        height: SCREEN_WIDTH*0.5,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
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
    survey_button:{
        width: '100%',
        minHeight: 30,
        maxHeight: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: normalize(8),
        backgroundColor: '#4cb050',
        marginBottom: 5,
    },
    textSign: {
        fontSize: normalize(14),
        fontWeight: "500",
        fontFamily: 'Poppins Regular 400',
    },
    center :{
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex:1, 
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
        backgroundColor: '#fff',
        display:'flex',
        flexDirection:'row', 
        justifyContent: "space-evenly",
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
  });
