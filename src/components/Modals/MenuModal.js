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
export default function MenuModal({
  show,
  animationType,
  closePopup,
  haveOutsideTouch,
}) {
  var data = [
    {id: 0, name: 'Copy Link', src: MODALIMAGES.copyLink},
    {id: 1, name: 'Download Media', src: MODALIMAGES.download},
    {id: 2, name: "I don't like this", src: MODALIMAGES.heart},
    {id: 3, name: 'I have seen this post', src: MODALIMAGES.iHaveSeen},
    {id: 4, name: 'Report Post', src: MODALIMAGES.report},
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
    maxHeight: Dimensions.get('window').height * 0.6,
  },
  flatlistStyle: {
    paddingBottom: '5%',
  },
});
