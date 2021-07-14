import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {AUTHIMAGES} from '../assets/images/localimages';
import {vh, vw, normalize} from '../assets/Dimension/dimension';

export default function AuthOptions() {
  return (
    <View style={styles.container}>
      <View style={styles.flexdir}>
        <TouchableOpacity style={styles.tochableGoog}>
          <Image style={styles.imgSty} source={AUTHIMAGES.google} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tochableGoog}>
          <Image style={styles.imgSty} source={AUTHIMAGES.facebook} />
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>OR</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '8%',
  },
  tochableGoog: {
    // padding: '5%',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingRight: '20%',
    paddingLeft: '20%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1e1e1e',
    backgroundColor: '#171717',
    marginRight: '1%',
  },
  imgSty: {
    resizeMode: 'contain',
    height: vh(25),
    width: vw(25),
  },
  orText: {
    fontSize: normalize(14),
    color: 'gray',
    textAlign: 'center',
    marginTop: '8%',
  },
  flexdir: {
    flexDirection: 'row',
  },
});
