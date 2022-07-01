import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardScreen from './DashboardScreen';
import SpinnerScreen from './SpinnerScreen';
import RewardScreen from './RewardScreen';
import UserActivityScreen from './UserActivitScreen';
import MyAccountScreen from './MyAccountScreen';
const Tab = createMaterialBottomTabNavigator();

export default function MyTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="DashboardScreen"
      activeColor="#000000"
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Spinner"
        component={SpinnerScreen}
        options={{
          tabBarLabel: 'circle',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="filmstrip-box-multiple" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Reward"
        component={RewardScreen}
        options={{
          tabBarLabel: 'Reward',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="menu" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={UserActivityScreen}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-today" color={color} size={26} />
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