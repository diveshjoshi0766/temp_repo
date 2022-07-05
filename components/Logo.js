import React from 'react'
import {
    View,
    Dimensions,
    Platform, 
    PixelRatio,
    Animated,
    Easing 
} from "react-native";


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
const spinValue = new Animated.Value(0);
function Logo() {
    React.useEffect(() => {
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
        }, []);
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
    return (
        <View style={{alignItems: 'center', marginTop: '0'}}> 
            <Animated.Image
                style={{ transform: [{ rotate: spin }], width: SCREEN_WIDTH*0.28, height: SCREEN_WIDTH*0.28 }}
                source={require('../assets/logo_remove_bg.png')}
            />
        </View>
    )
}

export default Logo