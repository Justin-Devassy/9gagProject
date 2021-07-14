import React, {useState, useRef} from 'react';
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
import {vh, vw, normalize} from '../../../assets/Dimension/dimension';
import {
  isLoggedIn,
  checkCredentials,
  saveUserName,
} from '../../../actions/userAction';
import {useSelector, useDispatch} from 'react-redux';
var loginEmail;
var loginPassword;
//var isButtonDisabled = true;
export default function login({navigation}) {
  const [isButtonDisabledEm, setIsButtonDisabledEm] = useState(true);
  const [isButtonDisabledPs, setIsButtonDisabledPs] = useState(true);
  const [eyeOff, eyeOn] = useState(false);
  const inputEl2 = useRef(null);

  const dispatch = useDispatch();

  const existing = useSelector(state => {
    return state.userReducer.existingUsers;
  });
  console.log('login existing', existing);

  onPressedLoginButton = () => {
    var userName;
    console.log('login existing', existing);
    const doesExist = existing.filter(
      user =>
        user.email === loginEmail &&
        user.password === loginPassword &&
        (userName = user.name),
    );
    //console.log('show user name', userName);
    if (doesExist[0]) {
      dispatch(checkCredentials(true));
      dispatch(saveUserName(userName));
      navigation.navigate('DrawerNavigator');
    } else {
      alert('no');
    }
  };

  backButtonPressedLogin = () => {
    navigation.navigate('welcome');
  };
  navigateToSignUp = () => {
    navigation.navigate('signUp');
  };
  onChangeEmailLogin = text => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    {
      re.test(String(text).toLowerCase())
        ? ((loginEmail = text), setIsButtonDisabledEm(false))
        : ((loginEmail = ''), setIsButtonDisabledEm(true));
    }
    console.log('email', loginEmail, isButtonDisabledEm);
  };
  onChangePasswordLogin = text => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    {
      re.test(String(text).toLowerCase())
        ? ((loginPassword = text), setIsButtonDisabledPs(false))
        : ((loginPassword = ''), setIsButtonDisabledPs(true));
    }

    console.log('pass', loginPassword, isButtonDisabledPs);
  };
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title={'Log in'} backButton={backButtonPressedLogin} />
      <Text style={styles.loginTitle}>
        Login using one of the following options.
      </Text>
      <AuthOptions />
      <AuthTextInput
        upperText={'Email'}
        holder={'Enter your registered email'}
        onChangeEmailLogin={text => {
          onChangeEmailLogin(text);
        }}
      />
      <View>
        <AuthTextInput
          upperText={'Password'}
          holder={'Enter your password'}
          setSecureText={!eyeOff}
          onChangePasswordLogin={text => {
            onChangePasswordLogin(text);
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
        text={'Log In'}
        onPressedLoginButton={onPressedLoginButton}
        isDisableEmail={isButtonDisabledEm}
        isDisablePassword={isButtonDisabledPs}
      />
      <View style={styles.container2}>
        <Text style={styles.text2}>Already have an account?</Text>
        <TouchableOpacity style={styles.navToSign} onPress={navigateToSignUp}>
          <Text style={styles.text3}> Sign Up</Text>
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
  loginTitle: {
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
  navToSign: {
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
