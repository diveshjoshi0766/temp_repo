import React, { useContext, useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Platform, 
    PixelRatio,
    ScrollView,
    Button,

} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../config";
import axios from 'axios'
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native-web";

var {width: SCREEN_WIDTH, height: SCREEN_HEIGHT,} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;
export function normalize(size) {
    const newSize = size * scale 
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}
export default function RewardScreen({navigation}) {
    const {userInfo, redeem_request} = useContext(AuthContext);

    console.log(userInfo)
    const [comments,setComments]=useState(null)
    useEffect(() => {
      fetchComments();
    }, [])
    useEffect(() => {
      console.log(comments)
    }, [comments])
    const fetchComments=async()=>{
    const response=await axios(`${BASE_URL}/getReward/${parseInt(userInfo.Result.panelistID)}`);
    setComments(response.data)    
    }

    console.log(comments && comments.results[0])

    const [modal_data, setModal_data] = useState(null)

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        console.log("toggle modal")
        setModalVisible(!isModalVisible);
    }; 

    const setting_modal_data = (reward_points, ele) => {
        console.log(ele)
        let new_obj = {
            "name": userInfo.Result.firstname,
            "reward_points": reward_points,
            "voucher_worth": userInfo.Result.countryID == 100 ? (reward_points/100) * 40 : (reward_points/100) * 40,                                     
            "api_data": ele,
        }
        setModal_data(new_obj)
    }
    console.log(modal_data)

    const coupon_button_press = (points, ele) => {
        setting_modal_data(points, ele)
        toggleModal()
    }

   
    return (
    <ScrollView showsVerticalScrollIndicator ={false}>
    <View style={styles.container}>
        <View>
            <Text style={styles.header}>Good Morning, {userInfo.Result.firstname}</Text>
        </View>
        {/* heading */}
        <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', marginBottom: 6}}>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(20), fontFamily: 'Poppins Regular 400'}}>Reward</Text>
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(20), fontFamily: 'Poppins Regular 400' }}><Icon name="user" size={20} color="black"/> Profile</Text>
            <TouchableOpacity style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(20), fontFamily: 'Poppins Regular 400' }} onPress={() => {navigation.navigate('Reward History')}}><Icon name="history" size={20} color="black"/> </TouchableOpacity>
        </View>
        <View style={styles.points}>
            <View style={styles.center}>
                <Text style={styles.text_box_black_header}>My Points</Text>
                <Text style={styles.text_box_black_points}>{userInfo.Result.current_point}</Text>
            </View>
            <View style={styles.center}>
                <Text style={styles.text_box_black_header}>My Profile</Text>
                <Text style={styles.text_box_black_points}>{userInfo.Result.profilePercentage}%</Text>
            </View>
        </View>

        {
            comments && comments.results.map((ele, key) => {
                return(
                <View key={key} style={{display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center'}} >
                    <View style={[ styles.card, {display: 'flex', flexDirection: 'row', width: SCREEN_WIDTH - 20, padding: 5, textAlign: 'center', backgroundColor:'white', flex: 1}]}>
                        <View style={{alignItems: 'center', marginTop: '0', flex: 0.5}}>
                            <Image
                                style={[styles.stretch]}
                                source={ele.mode_picture}
                            />
                        </View>
                        <View style={{flexDirection: 'col', alignItems: "center", flex: 0.5, justifyContent: "center"}}>
                            <Text style={{fontWeight: 'bold', fontSize: normalize(20), fontFamily: 'Poppins Regular 400'}}>{ele.mode_name}</Text>
                            <View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 8}}>
                                <TouchableOpacity style={[styles.cardElement, {backgroundColor: userInfo.Result.redeemed_point > 2499 ?  '#378C3C' : '#8C6E63'}]} onPress={() => {coupon_button_press(2500, {ele})}}>
                                    <Text style={styles.cardElement_text}>2500 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.cardElement, {backgroundColor: userInfo.Result.redeemed_point > 2499 ?  '#378C3C' : '#8C6E63'}]} onPress={() => {coupon_button_press(5000, {ele})}}>
                                    <Text style={styles.cardElement_text}>5000 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                )
            })
        }

        {/* modal */}
        <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
            <View style={styles.modal_}>
                <View style={{textAlign: "center", marginTop: '0', width: '70%'}}>
                    <Image
                        style={[styles.stretch, {justifyContent: "center"}]}
                        source={modal_data && modal_data.api_data.ele.mode_picture}
                    />
                </View>
                <Text style={styles.modal_sub_heading}>Congratulation {modal_data &&modal_data.name}</Text>
                <View>
                <Text style={styles.modal_sub_heading}>You have requested {modal_data && modal_data.api_data.ele.mode_name} Voucher</Text>
                </View>
                <View>
                <Text style={styles.modal_sub_heading}>Redeem:  {modal_data && modal_data.reward_points} Points</Text>
                </View>
                <View>
                <Text style={styles.modal_sub_heading}>Voucher Worth:  {modal_data && modal_data.voucher_worth}</Text>
                </View>
                <View>
                    <Text style={styles.modal_sub_heading}>Would you like to continue.</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10}}>
                    <Button title="Cancel" onPress={toggleModal} style={styles.modal_btn} color='#9e9e9e'/>
                    <Button title="YES, CONTINUE" onPress={() => {
                        redeem_request(modal_data.reward_points, modal_data.api_data.ele.mode_id )
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
        backgroundColor: '#FAFAFA',
        padding: 10,
        flexDirection:'col',
        minHeight: SCREEN_HEIGHT,
        minWidth: SCREEN_WIDTH,
    },
    cardElement_text: {
        fontWeight: 500,
        fontSize: normalize(18),
        color: '#fff',
        fontFamily: 'Poppins Regular 400',
    },
    stretch: {
        width: '100%' ,
        height: SCREEN_WIDTH*0.3,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        color: '#000000', 
        marginTop:10, 
        fontSize:normalize(25),
        fontWeight: 'bold',
        fontFamily: 'Poppins Regular 400'
        // fontFamily: 'Poppins_Black900' 
    },
    text_box_black_header: {
        color: '#fff', 
        marginTop:10, 
        fontWeight: '300',
        textAlign: "center", 
        fontSize:normalize(18),
        fontFamily: 'Poppins Regular 400'
    },
    text_box_black_points: {
        color: '#fff', 
        marginTop:5, 
        // fontWeight: '500',
        textAlign: "center", 
        fontSize: normalize(30),
        fontFamily: 'Poppins Regular 400'
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
    },
    card : {
        borderColor: 'black',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 1
        },
        shadowRadius: 5,
        shadowOpacity: 0.1
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
    },
    cardElement: {
        // backgroundColor: 'gray',
        height: SCREEN_HEIGHT*0.055,
        width: SCREEN_WIDTH*0.2,
        justifyContent: 'center',
        borderRadius: 5 ,
        margin: 2,
    },



    scrollContainer: {
        flex: 1,
      },
      sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      },    
  });
