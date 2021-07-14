import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProfileTabs from '../../../components/ProfileTabs';
import ProfileHeader from '../../../components/ProfileHeader';
import PostDataBook from '../SavedPost/PostDataBook';
import UpVotedDataBook from '../UpvotedPosts/upVotedDataBook';
import DownVotedDataBook from '../UpvotedPosts/downVotedDataBook';
export default function Profile({navigation, route}) {
  const [tabName2, setTabName2] = useState('saved');

  backButtonPressed = () => {
    navigation.navigate('DrawerNavigator');
  };
  currentTabIndex2 = tab => {
    setTabName2(tab);
    console.log('tab', tab);
  };

  return (
    <View style={styles.container}>
      <ProfileHeader
        backPressed={backButtonPressed}
        userName={route.params.username}
      />
      <ProfileTabs tabPressed2={currentTabIndex2} />

      {tabName2 === 'saved' ? <PostDataBook /> : null}
      {tabName2 === 'upvoted' ? <UpVotedDataBook /> : null}
      {tabName2 === 'downvoted' ? <DownVotedDataBook /> : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
