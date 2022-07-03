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
    ScrollView,
    ImageBackground
} from "react-native";
import {Avatar} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import Icon from 'react-native-vector-icons/FontAwesome';

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

export default function SpinnerScreen({navigation}) {
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
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(22), fontFamily: 'Poppins_Black900'}}>Spinner</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(22), fontFamily: 'Poppins_Black900'}}><Icon name="user" size={20} color="black"/> Profile</Text>
        </View>
        <View style={styles.points}>
            <View style={styles.center}>
                <Text style={styles.text_box_black_header}>My Points</Text>
                <Text style={styles.text_box_black_points}>1355</Text>
            </View>
            <View style={styles.center}>
                <Text style={styles.text_box_black_header}>My Profile</Text>
                <Text style={styles.text_box_black_points}>100%</Text>
            </View>
        </View>

        <View style={styles.products}>
            <View style={[styles.center, {flex: 1.2}]}>
                <Text style={{textAlign: 'center', fontSize: 15}}>Opertunity to Earn 100 point every 3 hour</Text>
            </View>
            <View style={[styles.center, {flex: 0.8}]}>
                <View style={{alignItems: 'center', marginTop: '0'}}>
                    <ImageBackground style={[styles.stretch]}
                        source={require("../assets/spinner_edited.gif")} resizeMode="cover">
                        <Image
                            style={{width: 70, height: 70}}
                            source={require("../assets/yellow_spinner.png")}
                        />
                    </ImageBackground>
                </View>
            </View>
        </View>

        <View style={styles.products}>
            <View style={[styles.center, {flex: 0.8}]}>
                <View style={{alignItems: 'center', marginTop: '0'}}>
                    <ImageBackground style={[styles.stretch]}
                        source={require("../assets/spinner_edited.gif")} resizeMode="cover">
                        <Image
                            style={{width: 70, height: 70}}
                            source={require("../assets/green_spinner.png")}
                        />
                    </ImageBackground>
                </View>
            </View>
            <View style={[styles.center, {flex: 1.2}]}>
                <Text style={{textAlign: 'center', fontSize: 15}}>Opertunity to Earn 75 point every 2 hour</Text>
            </View>
        </View>

        <View style={styles.products}>
            <View style={[styles.center, {flex: 1.2}]}>
                <Text style={{textAlign: 'center', fontSize: 15}}>Opertunity to Earn 50 point every 1 hour</Text>
            </View>
            <View style={[styles.center, {flex: 0.8}]}>
                <View style={{alignItems: 'center', marginTop: '0'}}>
                    <ImageBackground style={[styles.stretch]}
                        source={require("../assets/spinner_edited.gif")} resizeMode="cover">
                        <Image
                            style={{width: 70, height: 70}}
                            source={require("../assets/red_spinner.png")}
                        />
                    </ImageBackground>
                </View>
            </View>
        </View>
  </View>
  </ScrollView>
    );
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
        fontFamily: 'Poppins_Thin100'
    },
    text_box_black_points: {
        color: '#fff', 
        marginTop:5, 
        // fontWeight: '500',
        textAlign: "center", 
        fontSize: normalize(30),
        // fontFamily: 'Poppins_Black900'
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
  });
