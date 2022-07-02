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
    Container,
    stylesGrid 
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

const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginVertical * (rows + 1));


export default function RewardScreen({navigation}) {
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
            <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(22), fontFamily: 'Poppins_Black900'}}>Reward</Text>
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


        <View style={{flexDirection: 'col', marginTop: 10, alignItems: 'center'}}>
            <View style={[ styles.card, {width: SCREEN_WIDTH*0.9, padding: 5, textAlign: 'center', backgroundColor:'white'}]}>
                <View style={{alignItems: 'center', marginTop: '0'}}>
                    <Image
                        style={[styles.stretch]}
                        source={require("../assets/amazon.png")}
                    />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: normalize(20)}}>Amazon</Text>
                <View style={{flexDirection: 'row', justifyContent: "space-evenly", marginTop: 10}}>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>2500 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>5000 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                </View>
            </View>
        </View>

        <View style={{flexDirection: 'col', marginTop: 10, alignItems: 'center'}}>
            <View style={[ styles.card, {width: SCREEN_WIDTH*0.9, padding: 5, textAlign: 'center', backgroundColor:'white'}]}>
                <View style={{alignItems: 'center', marginTop: '0'}}>
                    <Image
                        style={[styles.stretch]}
                        source={require("../assets/googleplay.png")}
                    />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: normalize(20)}}>Amazon</Text>
                <View style={{flexDirection: 'row', justifyContent: "space-evenly", marginTop: 10}}>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>2500 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>5000 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                </View>
            </View>
        </View>

        <View style={{flexDirection: 'col', marginTop: 10, alignItems: 'center'}}>
            <View style={[ styles.card, {width: SCREEN_WIDTH*0.9, padding: 5, textAlign: 'center', backgroundColor:'white'}]}>
                <View style={{alignItems: 'center', marginTop: '0'}}>
                    <Image
                        style={[styles.stretch]}
                        source={require("../assets/googleplay.png")}
                    />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: normalize(20)}}>Amazon</Text>
                <View style={{flexDirection: 'row', justifyContent: "space-evenly", marginTop: 10}}>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>2500 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>5000 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                </View>
            </View>
        </View>

        <View style={{flexDirection: 'col', marginTop: 10, alignItems: 'center'}}>
            <View style={[ styles.card, {width: SCREEN_WIDTH*0.9, padding: 5, textAlign: 'center', backgroundColor:'white'}]}>
                <View style={{alignItems: 'center', marginTop: '0'}}>
                    <Image
                        style={[styles.stretch]}
                        source={require("../assets/homedepot.png")}
                    />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: normalize(20)}}>Amazon</Text>
                <View style={{flexDirection: 'row', justifyContent: "space-evenly", marginTop: 10}}>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>2500 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>5000 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                </View>
            </View>
        </View>


        <View style={{flexDirection: 'col', marginTop: 10, alignItems: 'center'}}>
            <View style={[ styles.card, {width: SCREEN_WIDTH*0.9, padding: 5, textAlign: 'center', backgroundColor:'white'}]}>
                <View style={{alignItems: 'center', marginTop: '0'}}>
                    <Image
                        style={[styles.stretch]}
                        source={require("../assets/itunes.png")}
                    />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: normalize(20)}}>Amazon</Text>
                <View style={{flexDirection: 'row', justifyContent: "space-evenly", marginTop: 10}}>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>2500 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>5000 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                </View>
            </View>
        </View>


        <View style={{flexDirection: 'col', marginTop: 10, alignItems: 'center'}}>
            <View style={[ styles.card, {width: SCREEN_WIDTH*0.9, padding: 5, textAlign: 'center', backgroundColor:'white'}]}>
                <View style={{alignItems: 'center', marginTop: '0'}}>
                    <Image
                        style={[styles.stretch]}
                        source={require("../assets/mcdonails.png")}
                    />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: normalize(20)}}>Amazon</Text>
                <View style={{flexDirection: 'row', justifyContent: "space-evenly", marginTop: 10}}>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>2500 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>5000 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                </View>
            </View>
        </View> 
        <View style={{flexDirection: 'col', marginTop: 10, alignItems: 'center'}}>
            <View style={[ styles.card, {width: SCREEN_WIDTH*0.9, padding: 5, textAlign: 'center', backgroundColor:'white'}]}>
                <View style={{alignItems: 'center', marginTop: '0'}}>
                    <Image
                        style={[styles.stretch]}
                        source={require("../assets/paypal.png")}
                    />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: normalize(20)}}>Amazon</Text>
                <View style={{flexDirection: 'row', justifyContent: "space-evenly", marginTop: 10}}>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>2500 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>5000 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                </View>
            </View>
        </View> 
        <View style={{flexDirection: 'col', marginTop: 10, alignItems: 'center'}}>
            <View style={[ styles.card, {width: SCREEN_WIDTH*0.9, padding: 5, textAlign: 'center', backgroundColor:'white'}]}>
                <View style={{alignItems: 'center', marginTop: '0'}}>
                    <Image
                        style={[styles.stretch]}
                        source={require("../assets/starbucks.png")}
                    />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: normalize(20)}}>Amazon</Text>
                <View style={{flexDirection: 'row', justifyContent: "space-evenly", marginTop: 10}}>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>2500 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>5000 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                </View>
            </View>
        </View> 
        <View style={{flexDirection: 'col', marginTop: 10, alignItems: 'center'}}>
            <View style={[ styles.card, {width: SCREEN_WIDTH*0.9, padding: 5, textAlign: 'center', backgroundColor:'white'}]}>
                <View style={{alignItems: 'center', marginTop: '0'}}>
                    <Image
                        style={[styles.stretch]}
                        source={require("../assets/paypal.png")}
                    />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: normalize(20)}}>Amazon</Text>
                <View style={{flexDirection: 'row', justifyContent: "space-evenly", marginTop: 10}}>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>2500 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>5000 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                </View>
            </View>
        </View> 
        <View style={{flexDirection: 'col', marginTop: 10, alignItems: 'center'}}>
            <View style={[ styles.card, {width: SCREEN_WIDTH*0.9, padding: 5, textAlign: 'center', backgroundColor:'white'}]}>
                <View style={{alignItems: 'center', marginTop: '0'}}>
                    <Image
                        style={[styles.stretch]}
                        source={require("../assets/subway.png")}
                    />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: normalize(20)}}>Amazon</Text>
                <View style={{flexDirection: 'row', justifyContent: "space-evenly", marginTop: 10}}>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>2500 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>5000 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                </View>
            </View>
        </View> 
        <View style={{flexDirection: 'col', marginTop: 10, alignItems: 'center'}}>
            <View style={[ styles.card, {width: SCREEN_WIDTH*0.9, padding: 5, textAlign: 'center', backgroundColor:'white'}]}>
                <View style={{alignItems: 'center', marginTop: '0'}}>
                    <Image
                        style={[styles.stretch]}
                        source={require("../assets/walmart.png")}
                    />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: normalize(20)}}>Amazon</Text>
                <View style={{flexDirection: 'row', justifyContent: "space-evenly", marginTop: 10}}>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>2500 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
                    <View style={[styles.cardElement]}>
                        <Text style={styles.cardElement_text}>5000 <Icon name="star" size={normalize(20)} color="#fff"/></Text>
                    </View>
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
    cardElement_text: {
        fontWeight: 500,
        fontSize: normalize(18),
        color: '#fff',
    },
    stretch: {
        width: SCREEN_WIDTH*0.85,
        height: SCREEN_WIDTH*0.4,
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
        backgroundColor: 'gray',
        height: SCREEN_HEIGHT*0.055,
        width: SCREEN_WIDTH*0.2,
        justifyContent: 'center',
        borderRadius: 5 ,
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
