import React from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {MODALIMAGES} from '../../assets/images/localimages';
import {vh, vw, normalize} from '../../assets/Dimension/dimension';
import {useSelector, useDispatch} from 'react-redux';
//const dispatch = useDispatch();
export default function ProfileModal({
  show,
  animationType,
  closePopup,
  haveOutsideTouch,
  userNotLogged,
  userName,
  isUserLogged,
  navToUserProfile,
  navToUserSaved,
  navToUserSettings,
}) {
  var pressCommand = null;
  var user = 'User';
  if (isUserLogged === true) {
    user = userName;
  }
  var data = [
    {id: 0, name: user, src: MODALIMAGES.profile},
    {id: 1, name: 'Saved', src: MODALIMAGES.saved},
    {id: 2, name: 'Upgrade to PRO', src: MODALIMAGES.upgrade},
    {id: 3, name: 'Settings', src: MODALIMAGES.settings},
    {id: 4, name: 'Send FeedBack', src: MODALIMAGES.feedback},
    {id: 5, name: 'Dark Mode', src: MODALIMAGES.darkMode},
  ];
  // if (isUserLogged === true) {
  //   data.push({id: 6, name: 'LogOut', src: MODALIMAGES.logOut});
  // }
  modalCloseFun = () => {
    if (!haveOutsideTouch) return;
    closePopup();
  };

  renderItem = ({item, inde}) => {
    //console.log('yt', item);
    if (item.id === 0 || item.id === 1 || item.id === 3) {
      if (isUserLogged === false) {
        pressCommand = userNotLogged;
      } else if (isUserLogged === true && item.id === 0) {
        pressCommand = navToUserProfile;
      } else if (isUserLogged === true && item.id === 1) {
        pressCommand = navToUserSaved;
      } else if (isUserLogged === true && item.id === 3) {
        pressCommand = navToUserSettings;
      }
    } else {
      pressCommand = () => alert(item.name);
    }
    console.log(' this is press command', pressCommand);

    return (
      <TouchableOpacity onPress={pressCommand} style={styles.container}>
        <View style={styles.container2}>
          <Image style={styles.imgIN} source={item.src} />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal animationType={animationType} transparent={true} visible={show}>
      <View style={styles.OuterView}>
        <Pressable
          onPress={() => {
            if (!haveOutsideTouch) return;
            closePopup();
          }}
          style={styles.flex}></Pressable>
        <View style={styles.flatlistView}>
          <View>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              extraData={data}
              keyExtractor={item => `key-${item.id}`}
              contentContainerStyle={styles.flatlistStyle}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    height: vh(50),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  container2: {
    flexDirection: 'row',
    marginLeft: '5%',
    marginTop: '2%',
    marginBottom: '2%',
  },
  imgIN: {
    resizeMode: 'contain',
    width: vw(35),
    height: vh(35),
  },
  name: {
    fontSize: normalize(18),
    marginLeft: '5%',
    fontWeight: 'normal',
    color: '#182E44',
    alignSelf: 'center',
  },
  OuterView: {
    flex: 1,
    backgroundColor: '#000000AA',
  },
  flex: {
    flex: 1,
  },
  flatlistView: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    maxHeight: Dimensions.get('window').height * 0.6,
  },
  flatlistStyle: {
    paddingBottom: '5%',
  },
});
