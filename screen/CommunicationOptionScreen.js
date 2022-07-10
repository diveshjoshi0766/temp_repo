import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Platform, 
    PixelRatio,
    Button
} from "react-native";
import * as Animatable from 'react-native-animatable';
import Modal from "react-native-modal";
import { ScrollView } from "react-native-web";

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

export default function CommunicationOptionScreen({navigation}) {
   
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
    <View style={styles.container}>
    <Animatable.View 
        animation="fadeInUpBig"
        style={[styles.footer, {
            backgroundColor: "rgb(235 235 235)"
        }]}
    >
       
        <View style={[styles.action, {backgroundColor: '#ffffff', justifyContent: 'space-between', fontFamily: 'Poppins Regular 400'}]}>
            <Text style={{fontWeight: 'bold', fontSize: normalize(17), marginTop: 5, fontFamily: 'Poppins Regular 400'}}>Email Opt out</Text>
            <Text style={{marginTop: 10,fontSize: normalize(15),  textAlign: 'center', fontFamily: 'Poppins Regular 400'}}>Opt out of receiving future emails from SurveyOptimus. If you opt out, you will not receive these email invitations and notifications from SurveyOptimus</Text>
            <View style={[styles.button]}>
                <TouchableOpacity
                    onPress={toggleModal}
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
            <Text style={{fontWeight: 'bold', fontSize: normalize(17), marginTop: 5, fontFamily: 'Poppins Regular 400'}}>Deactivate Account</Text>
            <Text style={{marginTop: 10,fontSize: normalize(15),  textAlign: 'center', fontFamily: 'Poppins Regular 400'}}>Deaccounting your account will disable your profile from SurveyOptimus</Text>
            <View style={[styles.button]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Deactivation Confirmation Screen')}
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


        {/* modal */}
        <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
        <ScrollView>
            <View style={styles.modal_}>
                <Text style={{fontWeight: 600, fontSize: normalize(25)}}>Are you sure you want to Unsubscribe Vimal21?</Text>
                <Text style={styles.modal_sub_heading}>Unsubscribeing means you will no longer receive Any email messages from SurveyOptimus which includes:</Text>
                <View>
                <Text style={styles.modal_points}>1. Invitations to survey</Text>
                <Text style={styles.modal_points}>2. Redeem points request from us</Text>
                <Text style={styles.modal_points}>3. Newsletters and offers</Text>
                </View>
                <Text style={styles.modal_sub_heading}>Do you really want to miss out on offers like this ?</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10}}>
                    <Button title="Cancel" onPress={toggleModal} style={styles.modal_btn} color='#9e9e9e'/>
                    <Button title="YES, Continue" onPress={() => {
                        toggleModal()
                        navigation.navigate('Unsubscribe Reason Screen')
                    }} style={styles.modal_btn} color='#378C3C'/>
                </View>
            </View>
        </ScrollView>
        </Modal>

        
    </Animatable.View>
  </View>
    );
  }


const styles = StyleSheet.create({
    modal_:{
        height: 'justifyContent', 
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
        fontWeight: 500, 
        fontSize: normalize(15), 
        marginTop: 10
    },
    modal_points:{
        fontWeight: 400, 
        fontSize: normalize(15),
    },
    container: {
        flex: 1, 
        backgroundColor: '#FAFAFA',
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
        padding: 5,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 3,
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
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Poppins Regular 400'
    },
  });
