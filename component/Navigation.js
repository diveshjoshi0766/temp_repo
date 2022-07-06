import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from '../context/AuthContext';
import SplashScreen from '../screen/SplashScreen';
import MyTabScreen from '../screen/MyTabScreen';
import SignInScreen from '../screen/SignInScreen';
import DefaultScreen from '../screen/DefaultScreen';
import ForgotPasswordScreen from '../screen/ForgotPasswordScreen';
import SignUpScreen from '../screen/SignUpScreen';
import PresonalDetailsScreen from '../screen/PresonalDetailsScreen';
import ProfileSurvey1 from '../screen/ProfileSurvey1';

const Stack = createNativeStackNavigator();




const Navigation = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {splashLoading ? (
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : (userInfo.message !== undefined && userInfo.message.split('!!')[0] == 'Congratulations') ? (
          <>
            <Stack.Screen name="Profile Survey" component={ProfileSurvey1} screenOptions={{headerShown: false}}/>
            <Stack.Screen
              name="Home"
              component={MyTabScreen}
              options={{headerShown: false}}
            />
          </>
        ) :
  
        userInfo.Result  ? (
          <Stack.Screen name="Home" component={MyTabScreen} screenOptions={{headerShown: false}}/>
        ) : (
          <>
            <Stack.Screen
              name="Defualt Screen"
              component={DefaultScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Sign In Screen"
              component={SignInScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Forgot Password Screen"
              component={ForgotPasswordScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Sign Up Screen"
              component={SignUpScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Presonal Details Screen"
              component={PresonalDetailsScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
