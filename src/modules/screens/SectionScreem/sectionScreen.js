import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import PageHeaderComponent from '../../../components/PageHeaderComponent';
import PostList from '../../../components/PostList';
import SectionTabs from '../../../components/SectionTabs';
import {useSelector, useDispatch} from 'react-redux';
import ProfileModal from '../../../components/Modals/ProfileModal';
import ShareModal from '../../../components/Modals/ShareModal';
import MenuModal from '../../../components/Modals/MenuModal';

var tabName = 'hot';
export default function sectionScreen({navigation, route}) {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const [tabName, setTabName] = useState('hot');

  const isLoggedIn = useSelector(state => {
    return state.userReducer.isLoggedIn;
  });
  const loggedInUserName = useSelector(state => {
    return state.userReducer.loggedInUserName;
  });
  currentTabIndex = tab => {
    setTabName(tab);
    //console.log('tab', tab);
  };
  openDrawerPressed = () => {
    navigation.openDrawer();
  };
  openNotificationPressed = () => {
    navigation.navigate('notifications');
  };
  postPageNavigate = (index, title, ups, img) => {
    //console.log(index);
    navigation.navigate('PostPage', {
      indexOfPost: index,
      titleOfPost: title,
      upsOfPost: ups,
      imageOfPost: img,
    });
  };
  openSearchPressed = () => {
    navigation.navigate('search');
  };
  userNotLoggedPressed = () => {
    isLoggedIn ? null : navigation.navigate('welcome');
  };
  openProfileModalPressed = () => {
    setShowModal(!showModal);
  };
  openShareModalPressed = () => {
    setShowModal2(!showModal2);
  };
  verticalMenuPressed = () => {
    setShowModal3(!showModal3);
  };
  closeModal3 = () => {
    setShowModal3(false);
  };
  closeModal2 = () => {
    setShowModal2(false);
  };

  closeModal = () => {
    setShowModal(false);
  };
  navToUserProfilePressed = () => {
    console.log('profile');
    navigation.navigate('Profile', {username: loggedInUserName});
  };
  navToUserSavedPressed = () => {
    console.log('savedPost');
    navigation.navigate('savedPost');
  };
  navToUserSettingsPressed = () => {
    console.log('settings screen');
    navigation.navigate('settings');
  };
  return (
    <View style={styles.container}>
      <PageHeaderComponent
        openDrawerCall={openDrawerPressed}
        openNotification={openNotificationPressed}
        openSearch={openSearchPressed}
        openProfileModal={openProfileModalPressed}
        title={route.params.sectionName}
        userNotLogged={userNotLoggedPressed}
      />
      <SectionTabs
        tabPressed={currentTabIndex}
        //setTabIndex={tabIndex}
      />
      <PostList
        postPageNavigate={postPageNavigate}
        userNotLogged={userNotLoggedPressed}
        openShareModal={openShareModalPressed}
        sectionAttr={route.params.sectionAtrrName}
        tabName={tabName}
        screenName={'section'}
        verticalMenuPress={verticalMenuPressed}
        isLoggedIn={isLoggedIn}
      />
      <ProfileModal
        show={showModal}
        animationType={'fade'}
        closePopup={closeModal}
        haveOutsideTouch={true}
        userNotLogged={userNotLoggedPressed}
        userName={loggedInUserName}
        isUserLogged={isLoggedIn}
        navToUserProfile={navToUserProfilePressed}
        navToUserSaved={navToUserSavedPressed}
        navToUserSettings={navToUserSettingsPressed}
      />
      <ShareModal
        show={showModal2}
        animationType={'fade'}
        closePopup={closeModal2}
        haveOutsideTouch={true}
      />
      <MenuModal
        show={showModal3}
        animationType={'fade'}
        closePopup={closeModal3}
        haveOutsideTouch={true}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
