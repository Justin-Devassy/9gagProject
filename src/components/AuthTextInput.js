import React from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import {normalize} from '../assets/Dimension/dimension';
//import {AUTHIMG} from '../assets/images/localimages';
var imageToShow = '';
export default function AuthTextInput({
  upperText,
  holder,
  onChangeEmailLogin,
  onChangePasswordLogin,
  setSecureText,
  onChangeNameSignUp,
  onChangeEmailSignUp,
  onChangePasswordSignUp,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.upperText}>{upperText}</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={styles.text}
          onChangeText={
            onChangeEmailLogin ||
            onChangePasswordLogin ||
            onChangeNameSignUp ||
            onChangeEmailSignUp ||
            onChangePasswordSignUp
          }
          placeholder={holder}
          placeholderTextColor={'gray'}
          secureTextEntry={setSecureText}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: '8%',
  },
  upperText: {
    fontSize: normalize(14),
    color: 'white',
  },
  text: {
    fontSize: normalize(14),
    paddingTop: '5%',
    paddingBottom: '5%',
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: '3%',
    borderRadius: 15,
    marginTop: '3%',
    color: 'white',
    flex: 1,
  },
});
