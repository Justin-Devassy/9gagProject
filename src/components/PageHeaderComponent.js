import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {headerimages} from '../assets/images/localimages';
import {DrawerActions} from '@react-navigation/native';
import {vh, vw, normalize} from '../assets/Dimension/dimension';
import {useSelector, useDispatch} from 'react-redux';
var currNotificationNav;
export default function PageHeaderComponent({
  openDrawerCall,
  openNotification,
  openSearch,
  openProfileModal,
  title,
  userNotLogged,
}) {
  const isLoggedIn = useSelector(state => {
    return state.userReducer.isLoggedIn;
  });
  isLoggedIn
    ? (currNotificationNav = openNotification)
    : (currNotificationNav = userNotLogged);
  //console.log('page,header', props);
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer1}>
        <TouchableOpacity onPress={openDrawerCall}>
          <Image style={styles.menuimg} source={headerimages.menu} />
        </TouchableOpacity>
        <Text style={styles.titlestyle}>{title}</Text>
      </View>

      <View style={styles.subcontainer2}>
        <TouchableOpacity onPress={openSearch}>
          <Image style={styles.imagesonright} source={headerimages.search} />
        </TouchableOpacity>
        <TouchableOpacity onPress={currNotificationNav}>
          <Image style={styles.imagesonright} source={headerimages.bell} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openProfileModal}>
          <Image style={styles.imagesonright} source={headerimages.noProfile} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '8%',
  },
  subcontainer1: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginLeft: '3%',
  },
  subcontainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '3%',
  },
  menuimg: {
    resizeMode: 'contain',
    height: vh(20),
    width: vw(20),
  },
  titlestyle: {
    color: 'black',
    fontFamily: 'BebasNeue-Regular',
    fontSize: normalize(26),
    paddingLeft: '10%',
  },
  imagesonright: {
    resizeMode: 'contain',
    height: vh(20),
    width: vw(20),
    marginLeft: '1%',
    marginRight: '1%',
  },
});
