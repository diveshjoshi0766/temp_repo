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
    Share,
    TouchableOpacity,
    Button
} from "react-native";
import { useTheme } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";

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

      const onShare = async () => {
        try {
        const result = await Share.share({
        message: `Share the referral link with your friends, colleagues and family members \nLink: https://surveyoptimus.com/?referral=${userInfo.Result && userInfo.Result.SOUID}`
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
    
    

    const check_for_survey = async () => {
        navigation.navigate('Update Profile Survey')
    }

    
    const [modal_data, setModal_data] = useState(null)

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        console.log("toggle modal")
        setModalVisible(!isModalVisible);
    }; 

    return (
        
        <ScrollView showsVerticalScrollIndicator ={false}>
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Good Morning, {userInfo.Result && userInfo.Result.firstname}</Text>
            </View>
            {/* heading */}
            <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', marginBottom: 6}}>
                <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(17), }}>My Account</Text>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="user" color="#378C3C" size={25}></Icon>
                    </View>
                    <TouchableOpacity 
                    style={{flex:0.6,
                        flexDirection:'column',
                        justifyContent:'center'
                    }}
                    onPress = {() => navigation.navigate('Update Profile Screen')}
                    >
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: normalize(15)}}>Personal Details</Text>
                        <Text style={{fontStyle: 'italic', fontSize: normalize(13)}}>your presonal information</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={25}></Icon>
                    </View>
            </View>

            
            
            <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="group" color="#378C3C" size={25}></Icon>
                    </View>
                    <TouchableOpacity 
                    style={{flex:0.6,
                        flexDirection:'column',
                        justifyContent:'center'
                    }}
                    onPress = {() => {
                        check_for_survey(navigation.navigate('Update Profile Survey'))
                    }}
                    >
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: normalize(15)}}>Profile Survey</Text>
                        <Text style={{fontStyle: 'italic', fontSize: normalize(13)}}>your demographic information</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Image source={require('../assets/home_Gr.png')} style={{ width: 25, height: 25 }}></Image>
                    </View>
                    <TouchableOpacity 
                    style={{flex:0.6,
                        flexDirection:'column',
                        justifyContent:'center'
                    }}
                    onPress = {() => navigation.navigate('Change Password Screen')}
                    >
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: normalize(15)}}>Change Password</Text>
                        <Text style={{fontStyle: 'italic', fontSize: normalize(13)}}>manage your sign-in settings</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={25}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff',justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="id-badge" color="#378C3C" size={25}></Icon>
                    </View>
                    <TouchableOpacity style={{flex:0.6,
                            flexDirection:'column',
                            justifyContent:'center'
                        }}
                        onPress = {() => navigation.navigate('Communication Option Screen')}
                        >
                        <View >
                            <Text style={{fontWeight: 'bold', fontSize: normalize(15)}}>Communication Preferences</Text>
                            <Text style={{fontStyle: 'italic', fontSize: normalize(13)}}>prefered means of communications</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={30}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="user-plus" color="#378C3C" size={25}></Icon>
                    </View>
                    <TouchableOpacity style={{flex:0.6,
                            flexDirection:'column',
                            justifyContent:'center'
                        }}
                        onPress={onShare} 
                        // title="Share" 
                        >
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize: normalize(15)}}>Refer a friend</Text>
                            <Text style={{fontStyle: 'italic', fontSize: normalize(13)}}>invite your friends to join</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={25}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="shield" color="#378C3C" size={25}></Icon>
                    </View>
                    <TouchableOpacity style={{flex:0.6,
                        flexDirection:'column',
                        justifyContent:'center'
                    }}
                    onPress = {() => navigation.navigate('Privacy Policy Screen')}
                    >
                    <View >
                        <Text style={{fontWeight: 'bold', fontSize: normalize(15)}}>Privacy Policy</Text>
                        <Text style={{fontStyle: 'italic', fontSize: normalize(13)}}>how we manage privacy</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={25}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff',justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="file" color="#378C3C" size={25}></Icon>
                    </View>
                    <TouchableOpacity style={{flex:0.6,
                        flexDirection:'column',
                        justifyContent:'center'
                    }}
                    onPress = {() => navigation.navigate('Terms And Conditions Screen')}
                    >
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize: normalize(15)}}>Terms & Conditions</Text>
                            <Text style={{fontStyle: 'italic', fontSize: normalize(13)}}>service providing document</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={25}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="question" color="#378C3C" size={25}></Icon>
                    </View>
                    <TouchableOpacity style={{flex:0.6,
                        flexDirection:'column',
                        justifyContent:'center'
                    }}
                    onPress = {() => navigation.navigate('FAQs Screen')}
                    >
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize: normalize(15)}}>FAQs</Text>
                            <Text style={{fontStyle: 'italic', fontSize: normalize(13)}}>frequently asked question</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={25}></Icon>
                    </View>
            </View>


            <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: "space-around"}]}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Icon name="sign-out" color="#378C3C" size={25}></Icon>
                    </View>
                    <TouchableOpacity 
                    style={{flex:0.6,
                        flexDirection:'column',
                        justifyContent:'center'
                    }}
                    onPress={() => toggleModal()}
                    >
                    <View >
                        <Text style={{fontWeight: 'bold', fontSize: normalize(15)}}>Log Out</Text>
                        <Text style={{fontStyle: 'italic', fontSize: normalize(13)}}>sign out of the application</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{flex:0.2, alignItems: 'center', marginRight: 0}}>
                        <Icon name="angle-right" color="#378C3C" size={25}></Icon>
                    </View>
            </View> 

            {/* modal */}
            <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
                <View style={styles.modal_}>
                    
                    <Text style={[styles.modal_sub_heading, {fontSize: normalize(18), marginTop: 10}]}>Are you sure you want to logout of you app ?</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 50}}>
                        <Button title="Cancel" onPress={toggleModal} style={styles.modal_btn} color='#9e9e9e'/>
                        <Button title="YES, LOG OUT" onPress={() => {
                            logout(userInfo.Result.email, navigation)
                            toggleModal()
                        }} style={styles.modal_btn} color='#378C3C'/>
                    </View>

                </View>
            </Modal>


            </View>
    </ScrollView>
    );
  }


const styles = StyleSheet.create({
     
    modal_:{
        // height: 'justifyContent', 
        backgroundColor: '#fff', 
        padding: 10,
        borderRadius: 10,
    },
    modal_btn:{
        width: SCREEN_WIDTH*0.2,
        color: '#378C3C',
        borderRadius: 20,
    },
    modal_sub_heading: {
        fontWeight: "500", 
        fontSize: normalize(15), 
    },
    modal_points:{
        fontWeight: "400", 
        fontSize: normalize(15),
    },
    header:{
        color: '#000000', 
        marginTop:10, 
        fontSize:normalize(22),
        fontWeight: 'bold',
    },
    container: {
        marginTop: 20,
        backgroundColor: '#FAFAFA',
        padding: 10,
        flexDirection:'column',
        minHeight: SCREEN_HEIGHT,
        minWidth: SCREEN_WIDTH,
    },
    text_box_black_header: {
        color: '#fff', 
        marginTop:10, 
        fontWeight: '300',
        textAlign: "center", 
        fontSize:normalize(18),
        // fontFamily: 'Poppins_Thin100'
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
        height: SCREEN_HEIGHT*0.1,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center',
        borderRadius: normalize(10),
        paddingLeft: 3,
        paddingRight: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        shadowRadius: 5,
        shadowOpacity: 1,
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
