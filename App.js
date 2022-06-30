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
      <Stack.Screen name="Home" component={PresonalDetailsScreen} />
      <Stack.Screen name="Details" component={PresonalDetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
