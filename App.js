import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './screen/SignInScreen';
import DefaultScreen from './screen/DefaultScreen';
import ForgotPasswordScreen from './screen/ForgotPasswordScreen';
import SignUpScreen from './screen/SignUpScreen';
import PresonalDetailsScreen from './screen/PresonalDetailsScreen';
import ProfileSurvey1 from './screen/ProfileSurvey1';
import ProfileSurvey2 from './screen/ProfileSurvey2';
import ProfileSurvey3 from './screen/ProfileSurvey3';
import EndOfProfileSurveyScreen from './screen/EndOfProfileSurveyScreen';
import DashboardScreen from './screen/DashboardScreen';
import SurveyEndPages from './screen/SurveyEndPages';
import MyAccountScreen from './screen/MyAccountScreen';
import UpdateProfileScreen from './screen/UpdateProfileScreen';
import ChangePasswordScreen from './screen/ChangePasswordScreen';
import CommunicationOperationsScreen from './screen/CommunicationOperationsScreen';
import UnsubscribeReason from './screen/UnsubscribeReason';
import DeactivationConfirmation from './screen/DeactivationConfirmation';
import ReferFriendToFollow from './screen/ReferFriendToFollow';
import PrivacyPolicyScreen from './screen/PrivacyPolicyScreen';
import TermsAndConditions from './screen/TermsAndConditions';
import FAQs from './screen/FAQs';
import SpinnerScreen from './screen/SpinnerScreen';
import BestPracticeScreen from './screen/BestPracticeScreen';
import RewardScreen from './screen/RewardScreen';
import RewardHistory from './screen/RewardHistory';
import UserActivityScreen from './screen/UserActivitScreen';
import LoadingScreen from './screen/LoadingScreen';
import SpinnerEndPages from './screen/SpinnerEndPages';

// My Screen Tab
import MyTabScreen from './screen/MyTabScreen';

const Stack = createNativeStackNavigator();
 
export default function App({ navigation }) {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={DefaultScreen } />
      <Stack.Screen name="Details" component={DefaultScreen } />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
