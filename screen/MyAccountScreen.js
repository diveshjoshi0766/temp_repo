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
    ScrollView
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
        
        <ScrollView showsVerticalScrollIndicator ={false}>
        <View style={styles.container}>
            <View>
            <Text style={styles.header}>Good Morning, Vimal</Text>
            </View>
            {/* heading */}
            <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', marginBottom: 6}}>
                <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(22), fontFamily: 'Poppins_Black900'}}>My Account</Text>
            </View>
            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="user" color="#378C3C" size={30}></Icon>
                    </View>
                    <View style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Personal Details</Text>
                        <Text style={{fontStyle: 'italic'}}>your presonal information</Text>
                    </View>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="adduser" color="#378C3C" size={30}></Icon>
                    </View>
            </View>

            
            
            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="group" color="#378C3C" size={30}></Icon>
                    </View>
                    <View style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Personal Details</Text>
                        <Text style={{fontStyle: 'italic'}}>your presonal information</Text>
                    </View>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="adduser" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="group" color="#378C3C" size={30}></Icon>
                    </View>
                    <View style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Personal Details</Text>
                        <Text style={{fontStyle: 'italic'}}>your presonal information</Text>
                    </View>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="adduser" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="group" color="#378C3C" size={30}></Icon>
                    </View>
                    <View style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Personal Details</Text>
                        <Text style={{fontStyle: 'italic'}}>your presonal information</Text>
                    </View>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="adduser" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="group" color="#378C3C" size={30}></Icon>
                    </View>
                    <View style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Personal Details</Text>
                        <Text style={{fontStyle: 'italic'}}>your presonal information</Text>
                    </View>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="adduser" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="group" color="#378C3C" size={30}></Icon>
                    </View>
                    <View style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Personal Details</Text>
                        <Text style={{fontStyle: 'italic'}}>your presonal information</Text>
                    </View>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="adduser" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="group" color="#378C3C" size={30}></Icon>
                    </View>
                    <View style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Personal Details</Text>
                        <Text style={{fontStyle: 'italic'}}>your presonal information</Text>
                    </View>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="adduser" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="group" color="#378C3C" size={30}></Icon>
                    </View>
                    <View style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Personal Details</Text>
                        <Text style={{fontStyle: 'italic'}}>your presonal information</Text>
                    </View>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="adduser" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="group" color="#378C3C" size={30}></Icon>
                    </View>
                    <View style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Personal Details</Text>
                        <Text style={{fontStyle: 'italic'}}>your presonal information</Text>
                    </View>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="adduser" color="#378C3C" size={30}></Icon>
                    </View>
            </View> 

            
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
    </View>
    </ScrollView>
    );
  }


const styles = StyleSheet.create({
    header:{
        color: '#000000', 
        marginTop:10, 
        fontSize:normalize(25),
        fontWeight: 'bold',
        // fontFamily: 'Poppins_Black900' 
    },
    container: {
        backgroundColor: '#FAFAFA',
        padding: 10,
        flexDirection:'col',
        minHeight: SCREEN_HEIGHT,
        minWidth: SCREEN_WIDTH,
    },
    text_box_black_header: {
        color: '#fff', 
        marginTop:10, 
        fontWeight: '300',
        textAlign: "center", 
        fontSize:normalize(18),
        fontFamily: 'Poppins_Thin100'
    },
    icon_size:{
        height: 30,
        width: 30,
    },
    text_box_black_points: {
        color: '#fff', 
        marginTop:5, 
        // fontWeight: '500',
        textAlign: "center", 
        fontSize: normalize(30),
        // fontFamily: 'Poppins_Black900'
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
        maxHeight: SCREEN_HEIGHT*0.8,
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
