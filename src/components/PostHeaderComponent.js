import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {POSTHEADER} from '../assets/images/localimages';
import {vh, vw, normalize} from '../assets/Dimension/dimension';
export default function PostHeaderComponent({
  backArrowPressed,
  bookmarkImg,
  verticalImg,
  doubleImg,
  settingsIMG,
  verticalMenuPress,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.backview}>
        <TouchableOpacity onPress={backArrowPressed}>
          <Image style={styles.imgstyle1} source={POSTHEADER.backarrow} />
        </TouchableOpacity>
        <Text style={styles.headertext}>Post</Text>
      </View>
      <View style={styles.headerview2}>
        <Image
          style={styles.headerbookmark}
          source={bookmarkImg || doubleImg}
        />
        <TouchableOpacity onPress={verticalMenuPress}>
          <Image style={styles.menuimg} source={verticalImg || settingsIMG} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: '5%',
    marginLeft: '3%',
    marginRight: '3%',
    marginBottom: '5%',
  },
  backview: {
    flexDirection: 'row',
    flex: 1,
  },
  imgstyle1: {
    resizeMode: 'contain',
    height: vh(25),
    width: vw(25),
  },
  headertext: {
    alignSelf: 'center',
    marginLeft: '5%',
    color: 'black',
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
  headerview2: {
    flexDirection: 'row',
  },
  headerbookmark: {
    resizeMode: 'contain',
    height: vh(20),
    width: vw(20),
    marginRight: '5%',
  },
  menuimg: {
    resizeMode: 'contain',
    height: vh(20),
    width: vw(20),
  },
});
