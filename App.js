import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen.js';
import CalendarScreen from './src/screens/CalendarScreen.js';
import StatisticsScreen from './src/screens/StatisticsScreen.js';
import NoSmokingScreen from './src/screens/NoSmokingScreen.js';
import SettingsScreen from './src/screens/SettingsScreen.js';



function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="홈" component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="달력" component={CalendarScreen}
        options={{
          tabBarLabel: '달력',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="통계" component={StatisticsScreen}
        options={{
          tabBarLabel: '통계',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="graph" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="금연" component={NoSmokingScreen}
        options={{
          tabBarLabel: '금연',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="smoking" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="설정" component={SettingsScreen}
        options={{
          tabBarLabel: '설정',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;