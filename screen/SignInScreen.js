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
    PixelRatio,
    CheckBox,
    Animated,
    Easing 
} from "react-native";
import {Avatar} from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// import { SocialIcon } from 'react-native-elements'
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import company_logo from '../assets/company_logo.png'

import { useTheme } from 'react-native-paper';
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
export default function SignInScreen({navigation}) {
    const { colors } = useTheme();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSelected, setSelection] = useState(false);
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    React.useEffect(() => {
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

        <View style={{alignItems: 'center', marginTop: '0'}}>
            <Animated.Image
                style={{ transform: [{ rotate: spin }], width: SCREEN_WIDTH*0.5, height: SCREEN_WIDTH*0.5 }}
                source={require('../assets/logo_comp.png')}
            />
        </View>
        <View style={{alignItems: "center"}}>
            <View style={{width: 'fit-content'}}>
                <TouchableOpacity>
                    <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(20), fontFamily: 'Poppins_400Regular'}}>Welcome to <Text style={{fontWeight: 'bold'}}>SurveyOptimus!</Text></Text>
                    <Text style={{ textAlign: "right", fontSize:normalize(15), fontFamily:'Poppins_500Medium_Italic'}}>it's quick and easy</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={[styles.action, {backgroundColor: '#ffffff'}]}>
            <FontAwesome 
                name="user-o"
                color={colors.text}
                size={20}
            />
            <TextInput 
                placeholder="Username"
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color: colors.text
                }]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
                onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
            />
            <Animatable.View
                animation="bounceIn"
            >
                <Feather 
                    name="check-circle"
                    color="green"
                    size={20}
                />
            </Animatable.View>
        </View>

        <View style={[styles.action, {backgroundColor: '#ffffff'}]}>
            <Feather 
                name="lock"
                color={colors.text}
                size={20}
            />
            <TextInput 
                placeholder="Password"
                placeholderTextColor="#666666"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={[styles.textInput, {
                    color: colors.text
                }]}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity
            >
                {data.secureTextEntry ? 
                <Feather 
                    name="eye-off"
                    color="grey"
                    size={20}
                />
                :
                <Feather 
                    name="eye"
                    color="grey"
                    size={20}
                />
                }
            </TouchableOpacity>
        </View>

        <TouchableOpacity>
            <Text style={{color: '#009387', marginTop:15, paddingRight: 0}}>Forgot password?</Text>
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
                }]}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
            
        <TouchableOpacity>
        <Text style={{color: '#000000', marginTop:15, textAlign: "center", fontFamily: 'Poppins_400Regular', fontSize: 20}}>Or continue with</Text>
        </TouchableOpacity>
        <View style={{alignItems: "center", flexDirection: 'row', justifyContent:'space-around', marginTop: 20}}>
            <Avatar.Image 
                source={facebook}
                size={50}
            />
            <Avatar.Image 
                source={google}
                size={50}
            />
        </View>
        <TouchableOpacity>
            <Text style={{color: '#000000', marginTop:15, textAlign: "center", fontSize:normalize(20), fontFamily: 'Poppins_400Regular'}}>Already a member: <Text style={{color: '#1E96F0', fontWeight: 'bold', fontFamily: 'Poppins_700Bold'}}>SIGN IN</Text></Text>
        </TouchableOpacity>
    </Animatable.View>
  </View>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'rgb(235 235 235)',
        flexDirection:'row',
        alignItems:'center',
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
        marginTop: normalize(10),
        minHeight: 40,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
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
        alignItems: 'center',
        marginTop: normalize(10),
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
