import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {AUTHIMAGES} from '../assets/images/localimages';
import {vh, vw, normalize} from '../assets/Dimension/dimension';
export default function AuthHeader({title, backButton}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={backButton} style={styles.backarrow}>
        <Image style={styles.backarrowimg} source={AUTHIMAGES.backarrow} />
      </TouchableOpacity>

      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  backarrow: {
    borderWidth: 1,
    borderColor: '#202020',
    borderRadius: 15,
    padding: '3%',
  },
  backarrowimg: {
    resizeMode: 'contain',
    height: vh(20),
    width: vw(20),
  },
  titleText: {
    //fontSize: normalize(16),
    color: 'white',
    fontWeight: 'bold',
    marginLeft: '5%',
    alignSelf: 'center',
    fontSize: normalize(30),
  },
});
