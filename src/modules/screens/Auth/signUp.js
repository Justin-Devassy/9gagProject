import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import AuthOptions from '../../../components/AuthOptions';
import AuthTextInput from '../../../components/AuthTextInput';
import AuthButton from '../../../components/AuthButton';
import {AUTHIMG} from '../../../assets/images/localimages';

import {useSelector, useDispatch} from 'react-redux';
import {saveUser} from '../../../actions/userAction';
import {vh, vw, normalize} from '../../../assets/Dimension/dimension';
var signUpName;
var signUpEmail;
var signUpPassword;

export default function signUp({navigation}) {
  const dispatch = useDispatch();

  const [isButtonDisabledNm, setIsButtonDisabledNm] = useState(true);
  const [isButtonDisabledEm, setIsButtonDisabledEm] = useState(true);
  const [isButtonDisabledPs, setIsButtonDisabledPs] = useState(true);
  const [eyeOff, eyeOn] = useState(false);

  var existingUsers = useSelector(state => {
    return state.userReducer.existingUsers;
  });
  console.log(existingUsers);

  backButtonPressedSign = () => {
    navigation.navigate('welcome');
  };
  navigateToLogin = () => {
    navigation.navigate('login');
  };

  onChangeNameSignUp = text => {
    const re = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    {
      re.test(String(text).toLowerCase())
        ? ((signUpName = text), setIsButtonDisabledNm(false))
        : ((signUpName = ''), setIsButtonDisabledNm(true));
    }

    console.log('pass', signUpName, isButtonDisabledPs);
  };
  onChangeEmailSignUp = text => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    {
      re.test(String(text).toLowerCase())
        ? ((signUpEmail = text), setIsButtonDisabledEm(false))
        : ((signUpEmail = ''), setIsButtonDisabledEm(true));
    }
    console.log('email', signUpEmail, isButtonDisabledEm);
  };
  onChangePasswordSignUp = text => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    {
      re.test(String(text).toLowerCase())
        ? ((signUpPassword = text), setIsButtonDisabledPs(false))
        : ((signUpPassword = ''), setIsButtonDisabledPs(true));
    }

    console.log('pass', signUpPassword, isButtonDisabledPs);
  };

  onPressedSignUpButton = () => {
    console.log(signUpName, signUpEmail, signUpPassword);
    const userDetails = existingUsers.map(users => users.email === signUpEmail);
    console.log('llll', userDetails);
    if (userDetails[0]) {
      console.log('if lop', userDetails[0]);
      alert('user already exist');
      return;
    }
    dispatch(
      saveUser({
        name: signUpName,
        email: signUpEmail,
        password: signUpPassword,
      }),
    );
    navigation.navigate('login');
  };
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title={'Sign up'} backButton={backButtonPressedSign} />
      <Text style={styles.title}>
        Login using one of the following options.
      </Text>
      <AuthOptions />
      <AuthTextInput
        upperText={'Name'}
        holder={'Enter your name'}
        onChangeNameSignUp={text => {
          onChangeNameSignUp(text);
        }}
      />
      <AuthTextInput
        upperText={'Email'}
        holder={'Enter your email'}
        onChangeEmailSignUp={text => {
          onChangeEmailSignUp(text);
        }}
      />
      <View>
        <AuthTextInput
          upperText={'Password'}
          holder={'Enter a strong password'}
          setSecureText={!eyeOff}
          onChangePasswordSignUp={text => {
            onChangePasswordSignUp(text);
          }}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => {
            eyeOn(!eyeOff);
          }}>
          <Image
            style={styles.eye}
            source={eyeOff ? AUTHIMG.showPass : AUTHIMG.dontShowPass}
          />
        </TouchableOpacity>
      </View>

      <AuthButton
        text={'Create Account'}
        onPressedSignUpButton={onPressedSignUpButton}
        isDisableEmail={isButtonDisabledEm}
        isDisablePassword={isButtonDisabledPs}
        isDisableName={isButtonDisabledNm}
      />
      <View style={styles.container2}>
        <Text style={styles.text2}>Already have an account?</Text>
        <TouchableOpacity style={styles.navigateLog} onPress={navigateToLogin}>
          <Text style={styles.text3}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  title: {
    fontSize: normalize(14),
    color: 'white',
    marginTop: '10%',
    color: 'gray',
  },
  container2: {
    flexDirection: 'row',
    // alignSelf: 'center',
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    fontSize: normalize(14),
    color: 'white',
    alignSelf: 'center',
  },
  navigateLog: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  text3: {
    fontSize: normalize(14),
    color: 'white',
  },
  eye: {
    resizeMode: 'contain',
    width: vw(25),
    height: vh(25),
  },
  eyeButton: {
    position: 'absolute',
    left: vw(310),
    top: vw(70),
  },
});
