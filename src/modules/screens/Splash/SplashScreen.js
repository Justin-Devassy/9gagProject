import React, {useState, useEffect} from 'react';
import {View, Text, Image, Animated, Easing, StyleSheet} from 'react-native';
import {normalize, vh, vw} from '../../../assets/Dimension/dimension';
import {SPLASH} from '../../../assets/images/localimages';
export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('DrawerNavigator');
  }, 2000); //asyncho

  const [bounceAnim] = useState(new Animated.Value(0));
  const [elasticAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.spring(bounceAnim, {
      toValue: vh(150),
      duration: 2000,
      friction: 1.5,
      tension: 0,
      useNativeDriver: true,
    }).start();
    Animated.timing(elasticAnim, {
      toValue: vw(120),
      duration: 2000,
      easing: Easing.elastic(4),
      useNativeDriver: true,
    }).start();
  }, []);
  const trans = {
    transform: [{translateY: bounceAnim}],
  };
  const trans2 = {
    transform: [{translateX: elasticAnim}],
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[trans]}>
        <Image style={styles.spalshImage1} source={SPLASH.img} />
      </Animated.View>

      <Animated.View style={[trans2]}>
        <Text style={styles.spalshText}>9GAG</Text>
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  spalshImage1: {
    resizeMode: 'contain',
    height: vh(130),
    width: vw(130),
    position: 'absolute',
    left: vw(130),
    top: vh(160),
  },
  spalshText: {
    fontFamily: 'BebasNeue-Regular',
    color: 'gray',
    fontSize: normalize(100),
    marginTop: '10%',
    position: 'absolute',
    top: vh(550),
    // left: 110,
  },
});
