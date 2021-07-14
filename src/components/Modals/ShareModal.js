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

export default function ShareModal({
  show,
  animationType,
  closePopup,
  haveOutsideTouch,
}) {
  var data = [
    {id: 0, name: 'Whatsapp', src: MODALIMAGES.whatsapp},
    {id: 1, name: 'Messenger', src: MODALIMAGES.messenger},
    {id: 2, name: 'Discord', src: MODALIMAGES.discord},
    {id: 3, name: 'Messages', src: MODALIMAGES.message},
    {id: 4, name: 'Instagram', src: MODALIMAGES.instagram},
    {id: 5, name: 'Gmail', src: MODALIMAGES.gmail},
    {id: 6, name: 'Copy Link', src: MODALIMAGES.copyLink},
    {id: 7, name: 'Download Media', src: MODALIMAGES.download},
    {id: 8, name: 'More Options...', src: MODALIMAGES.share},
  ];

  renderItem = ({item, inde}) => {
    return (
      <TouchableOpacity
        onPress={() => alert(item.name)}
        style={styles.container}>
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
          <Text style={styles.mainTitle}>Share</Text>
          <View>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              extraData={data}
              keyExtractor={item => item.id}
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
    maxHeight: Dimensions.get('window').height * 0.9,
  },
  flatlistStyle: {
    paddingBottom: '5%',
  },
  mainTitle: {
    // alignSelf: 'center',
    color: '#182E44',
    fontSize: normalize(20),
    fontWeight: '500',
    margin: '5%',
  },
});
