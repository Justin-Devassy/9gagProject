import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {normalize} from '../assets/Dimension/dimension';
var colorBut = 'gray';
export default function AuthButton({
  text,
  onPressedLoginButton,
  isDisableEmail,
  isDisablePassword,
  isDisableName,
  onPressedSignUpButton,
}) {
  isDisableEmail || isDisablePassword || isDisableName
    ? (colorBut = 'gray')
    : (colorBut = '#FFB100');
  console.log(isDisableEmail, isDisablePassword, isDisableName);
  return (
    <View>
      <TouchableOpacity
        style={{
          padding: '5%',
          backgroundColor: colorBut,
          borderRadius: 15,
          marginTop: '8%',
        }}
        onPress={onPressedLoginButton || onPressedSignUpButton}
        disabled={isDisableEmail || isDisablePassword || isDisableName}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: normalize(14),
    color: 'white',
    textAlign: 'center',
  },
});
