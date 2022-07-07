import React, { useState, useEffect, useContext } from "react";
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
    ScrollView,
    Container,
    stylesGrid 
} from "react-native";
import {Avatar} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import Icon from 'react-native-vector-icons/FontAwesome';

import axios from "axios";
import { AuthContext } from "../context/AuthContext";

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

export default function RewardHistory({navigation}) {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [trans_history, setTrans_history] = useState()
    const {userInfo} = useContext(AuthContext);
    console.log(userInfo)
    const [comments,setComments]=useState(null)
    useEffect(() => {
      fetchComments();
    }, [])
    useEffect(() => {
      console.log(comments)
    }, [comments])
    const fetchComments=async()=>{
    const response=await axios(`http://staging.paneloptimus.com/api/transactionHistory/${parseInt(userInfo.Result.panelistID)}`);
    setComments(response.data.activityDetails)    
    }

    console.log(comments)

    return (
    <ScrollView showsVerticalScrollIndicator ={false}>
    <View style={styles.container}>
    <Animatable.View 
        animation="fadeInUpBig"
        style={[styles.footer, {
            backgroundColor: "rgb(235 235 235)"
        }]}
    >

    {
        comments && comments.map((comment) => {
            return(
                <View style={styles.products}>
            <View style={[styles.center, {width: "50%", padding: 5}]}>
                <View style={{alignItems: 'center', marginTop: '0'}}>
                    <Image
                        style={[styles.stretch]}
                        source={require("../assets/amazon_gift.png")}
                    />
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUpScreen')}
                            style={[styles.signIn, {
                                backgroundColor: '#8C6E63',
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>{comment.Transaction_status}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.center}>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Amazon</Text>
                <Text style={{textAlign: 'center'}}>Redeem Points : {comment.Total_points}</Text>
                <Text style={{textAlign: 'center'}}>Voucher worth : </Text>
                <Text style={{textAlign: 'center'}}>Trans ID : </Text>
                <Text style={{textAlign: 'center'}}>Date : {comment.Date}</Text>
            </View>
        </View>

            )
        })
    }

        
        {/* dummy data */}
        <View style={styles.products}>
            <View style={[styles.center, {width: "50%"}]}>
                <View style={{alignItems: 'center'}}>
                    <Image
                        style={[styles.stretch]}
                        source={require("../assets/amazon_gift.png")}
                    />
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUpScreen')}
                            style={[styles.signIn, {
                                backgroundColor: '#8C6E63',
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Processing</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.center}>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Amazon</Text>
                <Text style={{textAlign: 'center'}}>Redeem Points : </Text>
                <Text style={{textAlign: 'center'}}>Voucher worth : </Text>
                <Text style={{textAlign: 'center'}}>Trans ID : </Text>
                <Text style={{textAlign: 'center'}}>Date : </Text>
            </View>
        </View>


    </Animatable.View>
  </View>
  </ScrollView>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#FAFAFA',
        justifyContent:'center',
        mimWidth: SCREEN_WIDTH,
        minHeight: SCREEN_HEIGHT
    },
    stretch: {
        width: SCREEN_WIDTH*0.4,
        height: 100,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
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
        marginTop: normalize(5),
        height: 40,
    },
    signIn: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        padding: 5,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 500,
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
        borderRadius: 10,
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
        marginTop: 10,
        backgroundColor: '#fff',
        height: 'justifyContent',
        display:'flex',
        flexDirection:'row', 
        borderRadius: 10,
        marginTop: normalize(10),
        borderColor: 'black',
        borderRadius: 4,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 1
        },
        shadowRadius: 5,
        shadowOpacity: 0.1
    }
  });
