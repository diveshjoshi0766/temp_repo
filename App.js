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
import MyTabScreen from './screen/MyTabScreen'
import DashboardScreen from './screen/DashboardScreen';
import SpinnerEndPages from './screen/SpinnerEndPages';
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

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Scree</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();
 


export default function App({ navigation }) {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TermsAndConditions} />
      <Stack.Screen name="Details" component={TermsAndConditions} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
