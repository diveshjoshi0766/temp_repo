import React, { useContext, useState, useEffect } from "react";
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
import * as Animatable from 'react-native-animatable';
import Icon from "react-native-vector-icons/FontAwesome";
import { RadioButton } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';
import { BASE_URL } from "../config";
import axios from "axios";
import Modal from "react-native-modal";

import { useTheme } from 'react-native-paper';
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

export default function UpdateProfileScreen({navigation}) {
    
    const {userInfo, Panelist_basic_details, panelistBasicDetails_func, udpate_profile, avatar_set} = useContext(AuthContext);
    const [comments,setComments]=useState(null)

    useEffect(() => {
      fetchComments();
    }, [])
    useEffect(() => {
      console.log(comments)
    }, [comments])
    const fetchComments=async()=>{
        const response=await axios(`${BASE_URL}/getBasicProfiling/${parseInt(userInfo.Result.panelistID)}`);
        setComments(response.data)    
    }
    const { colors } = useTheme();
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [zip, setZip] = useState('')
    const [phone, setPhone] = useState('')
    const [add1, setAdd1] = useState('')
    const [add2, setAdd2] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstName, setFirstName] = useState(comments && comments.Results.firstname)
    const [lastName, setLastName] = useState("")
    const [isSelected, setSelection] = useState(false);
    const [checked, setChecked] = React.useState('first');

    const [date, setDate] = useState(new Date());
    const [displaymode, setMode] = useState('date');
    const [isDisplayDate, setShow] = useState(false);
    const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
    };
    const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    };
    const displayDatepicker = () => {
    showMode('date');
    };
    const [mydate, setMydate] = useState()

    console.log(comments)

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [avatar,setAvatar]=useState(null)
    const [avatarLink, setAvatarLink] = useState(null);
    useEffect(() => {
      fetchAvatar();
    }, [])
    useEffect(() => {
      console.log(avatar)
    }, [avatar])
    const fetchAvatar=async()=>{
    const response=await axios(`${BASE_URL}/getAvatar`);
    setAvatar(response.data)    
    }

    console.log(comments && comments.Results.firstname)


    return (
    <View style={styles.container}>
    <Animatable.View 
        animation="fadeInUpBig"
        style={[styles.footer, {
            backgroundColor: "#f0f0f0"
        }]}
    >

        <Text style={{color: '#000000', marginTop:normalize(5), fontWeight: 'Bold', fontSize: normalize(20), fontFamily: 'Poppins Regular 400'}}>Presonal Details</Text>
        {
                comments && comments.Results ? 
                
        <View style={{display: 'flex', flexDirection:'row', alignItems: 'center', marginTop: '0'}}>
            <View style={{alignItems: 'center'}}>
                {comments.Results.profilePic != null ? <Image
                                style={[styles.stretch]}
                                source={{uri:  `${comments.Results.profilePic}`}}
                            /> : <Icon name="user" size={50}></Icon>}
                <TouchableOpacity style={{color:'red', fontFamily: 'Poppins Regular 400'}} onPress={() => {toggleModal()}}>Change avatar</TouchableOpacity>
            </View>
           
                <View style={{paddingLeft: normalize(10)}}>
                <Text style={styles.label}>SOID: {comments.Results.SOUID}</Text>
                <Text style={styles.label}>Profile Completion: {comments.Results.profilePercentage}</Text>
                <Text style={styles.label}>Email: {userInfo.Result.email}</Text>
                <Text style={styles.label}>Earned Points: {comments.Results.current_point}</Text>            
                </View> 
            
        </View>
        
            : 
            <></>
        }

        <View style={[styles.action, {backgroundColor: '#ffffff'}]}>
            <TextInput 
                placeholder={comments && comments.Results.firstname}
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color: colors.text
                }]}
                autoCapitalize="none"
                onChangeText={(val) => setFirstName(val)}
                onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
            />
        </View>

        <View style={[styles.action, {backgroundColor: '#ffffff'}]}>
            <TextInput 
                placeholder={comments && comments.Results.lastname}
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color: colors.text
                }]}
                autoCapitalize="none"
                onChangeText={(val) => setLastName(val)}
            />
        </View>

        <View style={{backgroundColor: '#ffffff', 
        marginTop: normalize(10),
        minHeight: 40,
        flex:1,
        flexDirection:'row',
        alignItems: "center",
        borderRadius: normalize(10),
        paddingLeft: 3,
        paddingRight: 3,}}>
        <TouchableOpacity
        onPress={displayDatepicker} 
        >
        <View >
            <Text style={{paddingLeft: 4}}>Select date of Birth</Text>
            <Image source={require('../assets/date.png')} size={{height: 20, width: 20}}></Image>
        </View>
        </TouchableOpacity>
        {isDisplayDate && (
            <DateTimePicker
                testID="dateTimePicker"
                value={mydate}
                mode={displaymode}
                display="default"
                onChange={changeSelectedDate}
        />
        )}

        
        </View>
        <View style={[styles.action]}>
            
            <Text style={[styles.textInput, {
                    color: colors.text
                }]}>Gender</Text>
            <RadioButton
                value="first"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
            />
            <RadioButton
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
            />

        </View>
        <View style={[styles.action, {backgroundColor: '#ffffff'}]}>
            <TextInput 
                placeholder={comments && comments.Results.address1}
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color: colors.text
                }]}
                autoCapitalize="none"
                onChangeText={(val) => setAdd1(val)}
            />
        </View>
        <View style={[styles.action, {backgroundColor: '#ffffff'}]}>
            <TextInput 
                placeholder={comments && comments.Results.address2}
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color: colors.text
                }]}
                autoCapitalize="none"
                onChangeText={(val) => setAdd2(val)}
            />
        </View>
        <View style={[styles.action, {backgroundColor: '#ffffff'}]}>
            <TextInput 
                placeholder={comments && comments.Results.city}
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color: colors.text
                }]}
                autoCapitalize="none"
                onChangeText={(val) => setCity(val)}
            />
        </View>
        <View style={[styles.action, {backgroundColor: '#ffffff'}]}>
            <TextInput 
                placeholder={comments && comments.Results.state}
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color: colors.text
                }]}
                autoCapitalize="none"
                onChangeText={(val) => setCountry(val)}
            />
        </View>
        <View style={[styles.action, {backgroundColor: '#ffffff'}]}>
            <TextInput 
                placeholder={comments && comments.Results.country}
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color: colors.text
                }]}
                autoCapitalize="none"
                onChangeText={(val) => setCountry(val)}
            />
        </View>
        <View style={[styles.action, {backgroundColor: '#ffffff'}]}>
            <TextInput 
                placeholder={comments && comments.Results.zipcode}
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color: colors.text
                }]}
                autoCapitalize="none"
                onChangeText={(val) => setZip(val)}
            />
            <TextInput 
                placeholder={comments && comments.Results.phone}
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color: colors.text
                }]}
                autoCapitalize="none"
                onChangeText={(val) => setPhone(val)}
            />
        </View>
        <View style={styles.button}>
            <TouchableOpacity
                onPress={() => udpate_profile(firstName, lastName, date, checked, add1, add2, city, state, country, zip, phone)}
                style={[styles.signIn, {
                    backgroundColor: '#378C3C',
                }]}
            >
                <Text style={[styles.textSign, {
                    color: '#fff'
                }]}>Update Profile</Text>
            </TouchableOpacity>
        </View>

        {/* modal */}
        <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} style={{height: SCREEN_HEIGHT*0.5}}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                <View style={{height: "60%", width: SCREEN_WIDTH*0.6, alignSelf: 'center'}}>
                {avatar && avatar.results.map((ele) => {
                    return(
                    <View style={styles.modal_} key={ele.avatarName}>
                        <TouchableOpacity style={{alignItems: 'center', marginTop: '0', width: '60%'}} onPress={() => {
                            setAvatarLink(ele.avatarLink)
                            avatar_set(ele.avatarName)
                            setModalVisible(!isModalVisible)
                            }}>
                            <Image
                                style={[styles.stretch]}
                                source={{uri:  `${ele.avatarLink}`}}
                            />
                            
                        </TouchableOpacity>
                    </View>
                    )
                })}
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
        alignItems: "center"
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
    label:{
        fontFamily: 'Poppins Regular 400',
    },
    container: {
        flex: 1, 
        backgroundColor: '#f0f0f0',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    stretch: {
        width: SCREEN_WIDTH*0.20,
        height: SCREEN_WIDTH*0.20,
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
        backgroundColor: '#f0f0f0',
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
        minHeight: normalize(37),
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: normalize(10),
        paddingLeft: 15,
        paddingRight: 15,
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
        borderRadius: 10,
        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOffset: {
        width: 0,
        height: 0
        },
        shadowOpacity: 0.3
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Poppins Regular 400',
    },
  });

