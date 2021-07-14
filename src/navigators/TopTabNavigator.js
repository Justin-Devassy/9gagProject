import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PostList from '../components/PostList';
import notification from '../modules/screens/notifications/notifications';
import HomeScreen from '../modules/screens/Home/HomeScreen';
const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator({screen}) {
  return (
    <Tab.Navigator
      // initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: 'white',
        labelStyle: {fontSize: 12},
        style: {backgroundColor: 'white'},
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{tabBarLabel: 'Hot'}}
      />
      <Tab.Screen
        name="notification"
        component={notification}
        options={{tabBarLabel: 'Trending'}}
      />
    </Tab.Navigator>
  );
}
