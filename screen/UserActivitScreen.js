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

export default function UserActivityScreen({navigation}) {
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
    <ScrollView>
    <View style={styles.container}>
    <Animatable.View 
        animation="fadeInUpBig"
        style={[styles.footer, {
            backgroundColor: "rgb(235 235 235)"
        }]}
    >


        <TouchableOpacity>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(20), fontWeight: 'bold'}}>Good Morning, Vimal</Text>
        </TouchableOpacity>

        {/* heading */}
        <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(20)}}>Dashboard</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(20)}}><Icon name="user" size={20} color="black"/> Profile</Text>
        </View>
        <View style={styles.points}>
            <View style={styles.center}>
                <Text style={{color: '#000000', textAlign: "center", fontSize:normalize(20), color: 'white'}}>My Points</Text>
                <Text style={{color: '#000000', textAlign: "center", fontSize:normalize(20), color: 'white'}}>1355</Text>
            </View>
            <View style={styles.center}>
                <Text style={{color: '#000000', textAlign: "center", fontSize:normalize(20), color: 'white'}}>My Profile</Text>
                <Text style={{color: '#000000', textAlign: "center", fontSize:normalize(20), color: 'white'}}>100%</Text>
            </View>
        </View>

        <View style={[styles.products, {display:'flex', flexDirection:'row', justifyContent: 'space-evenly', backgroundColor: 'gray', marginTop: '10'}]}>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(20)}}>Date</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(20)}}>Description</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(20)}}>Points</Text>
        </View>
        
        <View style={[styles.products, {justifyContent: 'space-evenly', textAlign: 'center'}]}>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>April 27,2022</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>Spinner</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>Points</Text>
        </View>

        <View style={[styles.products, {justifyContent: 'space-evenly', }]}>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>April 27,2022</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>Spinner</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>Points</Text>
        </View>

        <View style={[styles.products, {justifyContent: 'space-evenly', }]}>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>April 27,2022</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>Spinner</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>Points</Text>
        </View>

        <View style={[styles.products, {justifyContent: 'space-evenly', }]}>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>April 27,2022</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>Spinner</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>Points</Text>
        </View>

        <View style={[styles.products, {justifyContent: 'space-evenly', }]}>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>April 27,2022</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>Spinner</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>Points</Text>
        </View>
        
        <View style={[styles.products, {justifyContent: 'space-evenly', }]}>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>April 27,2022</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>Spinner</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(15)}}>Points</Text>
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
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    stretch: {
        width: 100,
        height: 100,
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
        marginTop: 3,
        minHeight: normalize(40),
        justifyContent: 'center',
        display:'flex',
        flexDirection:'row', 
        borderRadius: 10,
        // marginTop: normalize(10),
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
