import React, { useState, useContext } from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform, 
    PixelRatio,
    ScrollView,
    Image,
} from "react-native";
import { useTheme } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-web";
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

export default function MyAccountScreen({navigation}) {
    
    const {isLoading, logout, userInfo} = useContext(AuthContext);
    console.log(userInfo)
    return (
        
        <ScrollView showsVerticalScrollIndicator ={false}>
        <View style={styles.container}>
            <View>
            <Text style={styles.header}>Good Morning, Vimal</Text>
            </View>
            {/* heading */}
            <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', marginBottom: 6}}>
                <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(22), fontFamily: 'Poppins Regular 400'}}>My Account</Text>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="user" color="#378C3C" size={30}></Icon>
                    </View>
                    <TouchableOpacity 
                    style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}
                    onPress = {() => navigation.navigate('Update Profile Screen')}
                    >
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 18, fontFamily: 'Poppins Regular 400'}}>Personal Details</Text>
                        <Text style={{fontStyle: 'italic'}}>your presonal information</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={30}></Icon>
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
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Profile Survey</Text>
                        <Text style={{fontStyle: 'italic'}}>your demographic information</Text>
                    </View>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Image source={require('../assets/home_Gr.png')} style={{ width: 30, height: 30 }}></Image>
                    </View>
                    <TouchableOpacity 
                    style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}
                    onPress = {() => navigation.navigate('Change Password Screen')}
                    >
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Change Password</Text>
                        <Text style={{fontStyle: 'italic'}}>manage your sign-in settings</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="id-badge" color="#378C3C" size={30}></Icon>
                    </View>
                    <TouchableOpacity style={{flex:0.6,
                            flexDirection:'col',
                            justifyContent:'center'
                        }}
                        onPress = {() => navigation.navigate('Communication Option Screen')}
                        >
                        <View >
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>Communication Preferences</Text>
                            <Text style={{fontStyle: 'italic'}}>prefered means of communications</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="user-plus" color="#378C3C" size={30}></Icon>
                    </View>
                    <View style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Refer a friend</Text>
                        <Text style={{fontStyle: 'italic'}}>invite your friends to join</Text>
                    </View>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="shield" color="#378C3C" size={30}></Icon>
                    </View>
                    <TouchableOpacity style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}
                    onPress = {() => navigation.navigate('Privacy Policy Screen')}
                    >
                    <View >
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Privacy Policy</Text>
                        <Text style={{fontStyle: 'italic'}}>how we manage privacy</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="file" color="#378C3C" size={30}></Icon>
                    </View>
                    <TouchableOpacity style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}
                    onPress = {() => navigation.navigate('Terms And Conditions Screen')}
                    >
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>Terms & Conditions</Text>
                            <Text style={{fontStyle: 'italic'}}>service providing document</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="question" color="#378C3C" size={30}></Icon>
                    </View>
                    <TouchableOpacity style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}
                    onPress = {() => navigation.navigate('FAQs Screen')}
                    >
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>FAQs</Text>
                            <Text style={{fontStyle: 'italic'}}>frequently asked question</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', fontFamily: "Poppins", justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="sign-out" color="#378C3C" size={30}></Icon>
                    </View>
                    <TouchableOpacity 
                    style={{flex:0.6,
                        flexDirection:'col',
                        justifyContent:'center'
                    }}
                    onPress={() => logout(userInfo.Result.email)}
                    >
                    <View >
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Log Out</Text>
                        <Text style={{fontStyle: 'italic'}}>sign out of the application</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={30}></Icon>
                    </View>
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
        fontFamily: 'Poppins Regular 400'
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
