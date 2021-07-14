import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import PageHeaderComponent from '../../../components/PageHeaderComponent';
import PageHomeTabs from '../../../components/PageHomeTabs';
import PostList from '../../../components/PostList';
import {useSelector, useDispatch} from 'react-redux';
import ProfileModal from '../../../components/Modals/ProfileModal';
import ShareModal from '../../../components/Modals/ShareModal';
import MenuModal from '../../../components/Modals/MenuModal';

//var tabName = 'hot';
export default function HomeScreen(props) {
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
  //console.log('homescreen', props);
  currentTabIndex = tab => {
    setTabName(tab);
    console.log('tab', tab);
  };
  openDrawerPressed = () => {
    props.navigation.openDrawer();
  };
  postPageNavigate = (index, title, ups, img) => {
    //console.log(index);
    props.navigation.navigate('PostPage', {
      indexOfPost: index,
      titleOfPost: title,
      upsOfPost: ups,
      imageOfPost: img,
    });
  };
  openNotificationPressed = () => {
    props.navigation.navigate('notifications');
  };
  openSearchPressed = () => {
    props.navigation.navigate('search');
  };
  userNotLoggedPressed = () => {
    isLoggedIn ? null : props.navigation.navigate('welcome');
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
    props.navigation.navigate('Profile', {username: loggedInUserName});
  };
  navToUserSavedPressed = () => {
    console.log('savedPost');
    props.navigation.navigate('savedPost');
  };
  navToUserSettingsPressed = () => {
    console.log('settings screen');
    props.navigation.navigate('settings');
  };
  //navToUserSavedPressed;
  return (
    <View style={styles.container}>
      <PageHeaderComponent
        openDrawerCall={openDrawerPressed}
        openNotification={openNotificationPressed}
        openSearch={openSearchPressed}
        openProfileModal={openProfileModalPressed}
        userNotLogged={userNotLoggedPressed}
        title={'9gag'}
      />
      {/* <TopTabNavigator /> */}
      <PageHomeTabs
        tabPressed={currentTabIndex}
        indx={'1'}
        initialTab={'hot'}
      />
      <PostList
        postPageNavigate={postPageNavigate}
        userNotLogged={userNotLoggedPressed}
        openShareModal={openShareModalPressed}
        sectionAttr={'india'}
        tabName={tabName}
        screenName={'home'}
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
        // title={""}
        animationType={'fade'}
        closePopup={closeModal2}
        // data={popupList}
        haveOutsideTouch={true}
      />
      <MenuModal
        show={showModal3}
        // title={""}
        animationType={'fade'}
        closePopup={closeModal3}
        // data={popupList}
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
