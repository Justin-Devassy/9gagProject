import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {POSTHEADER} from '../../../assets/images/localimages';
import PostHeaderComponent from '../../../components/PostHeaderComponent';
import SectionTabs from '../../../components/SectionTabs';
import TopTabNavigator from '../../../navigators/TopTabNavigator';
export default function notifications(props) {
  backArrowPressed = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <PostHeaderComponent
        backArrowPressed={backArrowPressed}
        doubleImg={POSTHEADER.doubleTick}
        settingsIMG={POSTHEADER.settings}
      />
      <SectionTabs
        firstTabName={'All'}
        secondTabName={'Mentions'}
        tabPressed={currentTabIndex}
      />
      {/* <TopTabNavigator screen={'notifications'} /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
