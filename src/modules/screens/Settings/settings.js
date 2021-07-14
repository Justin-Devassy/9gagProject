import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SwitchButton from '../../../components/SwitchButton';
import {POSTHEADER} from '../../../assets/images/localimages';
export default function settings({navigation}) {
  const [value, setValue] = useState(false);
  const onToggle = () => setValue(!value);
  navigateToHome = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexView}>
        <TouchableOpacity onPress={navigateToHome}>
          <Image style={styles.arrowimg} source={POSTHEADER.backarrow} />
        </TouchableOpacity>

        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.line} />
      <Text style={styles.sectionText}>General</Text>
      <View style={styles.flexView}>
        <Text style={styles.switchText}>Hide ads</Text>
        <SwitchButton style={styles.buttonStyle} onToggle={onToggle} />
      </View>
      <View style={styles.flexView}>
        <Text style={styles.switchText}>Hide announcement</Text>
        <SwitchButton style={styles.buttonStyle} onToggle={onToggle} />
      </View>
      <View style={styles.flexView}>
        <Text style={styles.switchText}>Hide promoted posts</Text>
        <SwitchButton style={styles.buttonStyle} onToggle={onToggle} />
      </View>
      <View style={styles.flexView}>
        <Text style={styles.switchText}>Mask Sensetive Content</Text>
        <SwitchButton style={styles.buttonStyle} onToggle={onToggle} />
      </View>
      <View style={styles.line} />

      <Text style={styles.sectionText}>About</Text>
      <View style={styles.flexView}>
        <Text style={styles.switchText}>9GAG Rules</Text>
      </View>
      <View style={styles.flexView}>
        <Text style={styles.switchText}>FAQ</Text>
      </View>
      <View style={styles.flexView}>
        <Text style={styles.switchText}>Copyright</Text>
      </View>
      <View style={styles.flexView}>
        <Text style={styles.switchText}>PrivacyPolicy</Text>
      </View>
      <View style={styles.flexView}>
        <Text style={styles.switchText}>Send Feedback</Text>
      </View>
      <View style={styles.flexView}>
        <Text style={styles.switchText}>Share 9GAG</Text>
      </View>
      <View style={styles.flexView}>
        <Text style={styles.switchText}>App version</Text>
        <Text style={styles.verno}>6.106.01</Text>
      </View>
      <View style={styles.line} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flexView: {
    flexDirection: 'row',
    margin: '3%',
  },
  switchText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  sectionText: {
    margin: '1%',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonStyle: {},
  arrowimg: {
    height: 25,
    width: 25,
    marginRight: '5%',
  },
  line: {
    borderWidth: 0.3,
    borderColor: 'gray',
    marginBottom: '3%',
  },
  verno: {
    fontSize: 14,
  },
});
