import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProfileHeader from '../../../components/ProfileHeader';
import PostDataBook from './PostDataBook';
export default function savedPost({navigation}) {
  backButtonPressed = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ProfileHeader backPressed={backButtonPressed} userName={'Saved Post'} />
      <PostDataBook />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
