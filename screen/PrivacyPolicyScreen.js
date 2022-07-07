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
    SafeAreaView ,

} from "react-native";
import { WebView } from 'react-native-webview';


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


export default function PrivacyPolicyScreen({navigation}) {
   
    return (
      Platform.OS === "web" ? (
        <iframe src="https://surveyoptimus.com/privacy-policy" height={'100%'} width={'100%'} />
      ) : (
        <View style={{ flex: 1 }}>
          <WebView
            source={{ uri: "https://surveyoptimus.com/privacy-policy" }}
            style={{marginTop: 22, flex: 1}}
          />
        </View>
      ));
  }


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'center',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    stretch: {
        width: SCREEN_WIDTH * 0.5,
        height: 60,
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
    text_container:{
        marginTop: normalize(20),
    },
    shadow_container:{
        marginTop: 10,
        padding:20,
        backgroundColor:'#e6e6e6',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
  });
