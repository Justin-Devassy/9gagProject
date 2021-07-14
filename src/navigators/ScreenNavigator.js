import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../modules/screens/Home/HomeScreen';
import DrawerNavigator from './DrawerNavigator';
const Stack = createStackNavigator();
import PostPage from '../modules/screens/Post/PostPage';
import welcome from '../modules/screens/Auth/welcome';
import notifications from '../modules/screens/notifications/notifications';
import login from '../modules/screens/Auth/login';
import signUp from '../modules/screens/Auth/signUp';
import search from '../modules/screens/Search/search';
import Profile from '../modules/screens/Profile/Profile';
export default function ScreenNavigator() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="PostPage" component={PostPage} />
      <Stack.Screen name="welcome" component={welcome} />
      <Stack.Screen name="notifications" component={notifications} />
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="signUp" component={signUp} />
      <Stack.Screen name="search" component={search} />
    </Stack.Navigator>
  );
}
