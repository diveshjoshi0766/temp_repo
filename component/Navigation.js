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
import ChangePasswordScreen from '../screen/ChangePasswordScreen';
import MyAccountScreen from '../screen/MyAccountScreen';
import CommunicationOptionScreen from '../screen/CommunicationOptionScreen';
import DeactivationConfirmation from '../screen/DeactivationConfirmation';
import UnsubscribeReason from '../screen/UnsubscribeReason';
import RewardHistory from '../screen/RewardHistory';
import PrivacyPolicyScreen from '../screen/PrivacyPolicyScreen';
import FAQs from '../screen/FAQs'
import TermsAndConditions from '../screen/TermsAndConditions';
import UpdateProfileScreen from '../screen/UpdateProfileScreen';
import EndOfProfileSurveyScreen from '../screen/EndOfProfileSurveyScreen';

const Stack = createNativeStackNavigator();



// (userInfo.message !== undefined && userInfo.message.split('!!')[0] == 'Congratulations') ? (
//   <>
//     <Stack.Screen name="Profile Survey" component={ProfileSurvey1} screenOptions={{headerShown: false}}/>
//     <Stack.Screen
//       name="Home"
//       component={MyTabScreen}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="End Of Profile Survey Screen"
//       component={EndOfProfileSurveyScreen}
//       options={{headerShown: false}}
//     />
//   </>
// ) :



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
        ) :
        userInfo.Result  ? (<>
          <Stack.Screen name="Home" component={MyTabScreen} screenOptions={{headerShown: false}}/>
            <Stack.Screen
              name="Communication Option Screen"
              component={CommunicationOptionScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Deactivation Confirmation Screen"
              component={DeactivationConfirmation}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Unsubscribe Reason Screen"
              component={UnsubscribeReason}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Reward History"
              component={RewardHistory}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Change Password Screen"
              component={ChangePasswordScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Privacy Policy Screen"
              component={PrivacyPolicyScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="FAQs Screen"
              component={FAQs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Terms And Conditions Screen"
              component={TermsAndConditions}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Update Profile Screen"
              component={UpdateProfileScreen}
              options={{headerShown: false}}
            />
          </>
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
            <Stack.Screen
              name="Change Password Screen"
              component={ChangePasswordScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="My Account Screen"
              component={MyAccountScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Terms And Conditions Screen"
              component={TermsAndConditions}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
