import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {WELCOME} from '../../../assets/images/localimages';
import {vh, vw, normalize} from '../../../assets/Dimension/dimension';
export default function welcome({navigation}) {
  notNowPressed = () => {
    navigation.goBack();
  };
  signUpPressed = () => {
    navigation.navigate('signUp');
  };
  loginPressed = () => {
    navigation.navigate('login');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={WELCOME.logo} style={styles.logo} />
        <Text style={styles.topText}>Exclusive for 9GAG users</Text>
        <Text style={styles.bottomText}> Join us and have fun together! </Text>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={signUpPressed} style={styles.firstButton}>
            <Text style={styles.buttonText1}>SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={loginPressed} style={styles.secondButton}>
            <Text style={styles.buttonText2}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.endText} onPress={notNowPressed}>
        <Text style={styles.endTxt}>Not now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: '10%',
    width: '20%',
    resizeMode: 'contain',
    marginBottom: '5%',
  },
  topText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: normalize(17),
    marginBottom: '5%',
  },
  bottomText: {
    color: 'grey',
    fontSize: normalize(14),
    marginBottom: '10%',
  },
  buttonView: {
    flexDirection: 'row',
  },
  buttonText1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: normalize(15),
  },
  buttonText2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: normalize(15),
  },
  firstButton: {
    backgroundColor: '#0077FF',
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingLeft: '6%',
    paddingRight: '6%',
    marginRight: '3%',
    borderRadius: 5,
  },
  secondButton: {
    backgroundColor: 'white',
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingLeft: '6%',
    paddingRight: '6%',
    marginLeft: '3%',
    borderRadius: 5,
  },
  endText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  endTxt: {
    fontSize: normalize(14),
    color: '#848484',
  },
});
