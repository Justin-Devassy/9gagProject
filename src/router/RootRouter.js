import React from 'react';
import {View, Text} from 'react-native';
import DrawerNavigator from '../navigators/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNavigator from '../navigators/ScreenNavigator';
export default function RootRouter() {
  return (
    <NavigationContainer>
      <ScreenNavigator />
    </NavigationContainer>
  );
}
