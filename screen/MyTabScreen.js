import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardScreen from './DashboardScreen';
import SpinnerScreen from './SpinnerScreen';
import RewardScreen from './RewardScreen';
import UserActivityScreen from './UserActivitScreen';
import MyAccountScreen from './MyAccountScreen';
import {
  Image,
} from "react-native";
const Tab = createMaterialBottomTabNavigator();

export default function MyTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="DashboardScreen"
      activeColor="#369239"
      barStyle={{ backgroundColor: '#fff' }}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (color == '#369239' ? <Image source={require('../assets/home_Gr.png')} style={{ width: 26, height: 26 }}
 ></Image> : <Image source={require('../assets/home_Gy.png')} style={{ width: 26, height: 26 }}
 ></Image>
          ),
        }}
      />

      <Tab.Screen
        name="Spinner"
        component={SpinnerScreen}
        options={{
          tabBarLabel: 'Spinner',
          tabBarIcon: ({ color }) => (
            color == '#369239' ? <Image source={require('../assets/spinner_Gr.png')} style={{ width: 26, height: 26 }}
 ></Image> : <Image source={require('../assets/spinner_Gy.png')} style={{ width: 26, height: 26 }}
 ></Image>
          ),
        }}
      />

      <Tab.Screen
        name="Reward"
        component={RewardScreen}
        options={{
          tabBarLabel: 'Reward',
          tabBarIcon: ({ color }) => (
            color == '#369239' ? <Image source={require('../assets/reward_Gr.png')} style={{ width: 26, height: 26 }}
 ></Image> : <Image source={require('../assets/reward_Gy.png')} style={{ width: 26, height: 26 }}
 ></Image>
          ),
        }}
      />

      <Tab.Screen
        name="Activity"
        component={UserActivityScreen}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color }) => (color == '#369239' ? <Image source={require('../assets/activity_Gr.png')} style={{ width: 26, height: 26 }}
 ></Image> : <Image source={require('../assets/activity_Gy.png')} style={{ width: 26, height: 26 }}
 ></Image>
          ),
        }}
      />

      <Tab.Screen
        name="My Account"
        component={MyAccountScreen}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

