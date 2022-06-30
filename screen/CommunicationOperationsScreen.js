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

export default function CommunicationOperationsScreen({navigation}) {
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
       
        <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: 'space-between'}]}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 5}}>Email Opt out</Text>
            <Text style={{marginTop: 10,  textAlign: 'center'}}>Opt out of receiving future emails from SurveyOptimus. If you opt out, you will not receive these email invitations and notifications from SurveyOptimus</Text>
            <View style={[styles.button]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        backgroundColor: '#378C3C',
                        color: '#fff'
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Unsubscribe</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: 'space-between'}]}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 5}}>Deactivate Account</Text>
            <Text style={{marginTop: 10, textAlign: 'center'}}>Deaccounting your account will disable your profile from SurveyOptimus</Text>
            <View style={[styles.button]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        backgroundColor: '#378C3C',
                        color: '#fff'
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Deactivate</Text>
                </TouchableOpacity>
            </View>
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
        flexDirection:'col',
        alignItems:'center',
        // justifyContent:'center',
        borderRadius: normalize(10),
        paddingLeft: 3,
        paddingRight: 3,
        borderWidth: 1,
        borderColor: '#000000',
        padding: 5,
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
        marginTop: normalize(10),
        borderRadius: '50%'
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 11
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
  });
