import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import HomeScreen from '../modules/screens/Home/HomeScreen';
import PostPage from '../modules/screens/Post/PostPage';
import sectionScreen from '../modules/screens/SectionScreem/sectionScreen';
import notifications from '../modules/screens/notifications/notifications';
import TopTabNavigator from './TopTabNavigator';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator(props) {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="PostPage" component={PostPage} />
      <Drawer.Screen name="sectionScreen" component={sectionScreen} />
      <Drawer.Screen name="notifications" component={notifications} />
    </Drawer.Navigator>
  );
}
