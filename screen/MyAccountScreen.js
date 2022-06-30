import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Platform, 
    PixelRatio
} from "react-native";
import {Avatar} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'

import { useTheme } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
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

export default function MyAccountScreen({navigation}) {
    const { colors } = useTheme();
    const [email, setEmail] = useState("");
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
   
    return (
        
    <View style={styles.container}>
    <Animatable.View 
        animation="fadeInUpBig"
        style={[styles.footer, {
            backgroundColor: "rgb(235 235 235)"
        }]}
    >
        {/* heading */}
        <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(20), fontWeight: 'bold'}}>Good Afternoon, Vimal21</Text>

        {/* Question */}
        <Text style={{color: '#000000', marginTop:10,  fontSize:normalize(15), fontWeight: 'bold'}}>My Account</Text>

        <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: 'space-between'}]}>
                <View style={{width: "15%", alignItems: 'center'}}>
                    <Icon name="user" color="#378C3C" size={30}></Icon>
                </View>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Personal Details</Text>
                    <Text style={{fontStyle: 'italic'}}>your presonal information</Text>
                </View>
                <View style={{width: "15%", alignItems: 'center'}}>
                    <Icon name="adduser" color="#378C3C" size={30}></Icon>
                </View>
        </View>

        <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: 'space-between'}]}>
                <View style={{width: "15%", alignItems: 'center'}}>
                    <Icon name="group" color="#378C3C" size={30}></Icon>
                </View>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Profile Survey</Text>
                    <Text style={{fontStyle: 'italic'}}>your demographic information</Text>
                </View>
                <View style={{width: "15%", alignItems: 'center'}}>
                    <Icon name="adduser" color="#378C3C" size={30}></Icon>
                </View>
        </View>

        <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: 'space-between'}]}>
                <View style={{width: "15%", alignItems: 'center'}}>
                    <Icon name="adduser" color="#378C3C" size={30}></Icon>
                </View>
                <View style={{marginLeft: '0'}}>
                    <Text style={{fontWeight: 'bold'}}>Change Password</Text>
                    <Text style={{fontStyle: 'italic'}}>Manage your sign-in settings</Text>
                </View>
                <View style={{width: "15%", alignItems: 'center'}}>
                    <Icon name="adduser" color="#378C3C" size={30}></Icon>
                </View>
        </View>

        <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: 'space-between'}]}>
                <View style={{width: "15%", alignItems: 'center'}}>
                    <Icon name="adduser" color="#378C3C" size={30}></Icon>
                </View>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Communication preference</Text>
                    <Text style={{fontStyle: 'italic'}}>Prefered means of Communication</Text>
                </View>
                <View style={{width: "15%", alignItems: 'center'}}>
                    <Icon name="adduser" color="#378C3C" size={30}></Icon>
                </View>
        </View>

        <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: 'space-between'}]}>
                <View style={{width: "15%", alignItems: 'center'}}>
                    <Icon name="adduser" color="#378C3C" size={30}></Icon>
                </View>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Refer a friend</Text>
                    <Text style={{fontStyle: 'italic'}}>Invite your friends to join</Text>
                </View>
                <View style={{width: "15%", alignItems: 'center'}}>
                    <Icon name="adduser" color="#378C3C" size={30}></Icon>
                </View>
        </View>

        <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: 'space-between'}]}>
                <View style={{width: "15%", alignItems: 'center'}}>
                    <Icon name="adduser" color="#378C3C" size={30}></Icon>
                </View>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Privacy Policy</Text>
                    <Text style={{fontStyle: 'italic'}}>how we have to manage the policy</Text>
                </View>
                <View style={{width: "15%", alignItems: 'center'}}>
                    <Icon name="adduser" color="#378C3C" size={30}></Icon>
                </View>
        </View>

        <Animatable.View animation="fadeInLeft" duration={500}>
        {/* <Text style={styles.errorMsg}>Username must be 4 characters long.</Text> */}
        </Animatable.View>

        <View style={styles.button}>

            <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}
                style={[styles.signIn, {
                    backgroundColor: '#fff',
                    color: 'black',
                    borderWidth: 1,
                    borderColor: 'black'
                }]}
            >
                <Text style={[styles.textSign, {
                    color: 'black'
                }]}> Back </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}
                style={[styles.signIn, {
                    backgroundColor: '#378C3C',
                }]}
            >
                <Text style={[styles.textSign, {
                    color: '#fff'
                }]}> Next </Text>
            </TouchableOpacity>
        </View>
        
    </Animatable.View>
  </View>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#eeeeee',
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'center',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    stretch: {
        width: SCREEN_WIDTH*0.5,
        height: SCREEN_WIDTH*0.5,
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
        marginTop: normalize(5),
        maxHeight: "justifyContent",
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center',
        borderRadius: normalize(10),
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
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
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
  });
