import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {vh, vw, normalize} from '../assets/Dimension/dimension';
export default function ProfileTabs({tabPressed2}) {
  const [indexex, setIndexex] = useState('4');
  const [tab2, settab2] = useState('saved');
  useEffect(() => {
    return () => {
      setIndexex('4');
      settab2('saved');
    };
  }, []);
  onChangeIndex2 = text => {
    setIndexex(text);
  };

  return (
    <View>
      <View style={styles.mainContainer}>
        <Text
          onPress={() => {
            onChangeIndex2('4');
            settab2('saved');
            tabPressed2('saved');
          }}
          style={
            indexex === '4' ? styles.selectedIndex2 : styles.unselectedIndex2
          }>
          Saved
        </Text>
        <Text
          onPress={() => {
            onChangeIndex2('5');
            settab2('upvoted');
            tabPressed2('upvoted');
          }}
          style={
            indexex === '5' ? styles.selectedIndex2 : styles.unselectedIndex2
          }>
          Liked
        </Text>

        <Text
          onPress={() => {
            onChangeIndex2('6');
            settab2('downvoted');
            tabPressed2('downvoted');
          }}
          style={
            indexex === '6' ? styles.selectedIndex2 : styles.unselectedIndex2
          }>
          Disliked
        </Text>
      </View>
      <View>
        {indexex === '4' ? <View style={styles.fab1} /> : null}
        {indexex === '5' ? <View style={styles.fab2} /> : null}
        {indexex === '6' ? <View style={styles.fab3} /> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectedIndex2: {
    color: 'black',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  unselectedIndex2: {
    color: 'gray',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  mainContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: '7%',
    paddingRight: '7%',
    paddingBottom: '2%',
  },
  fab1: {
    borderRadius: 2,
    borderColor: 'red',
    borderWidth: 1,
    width: '33.3333333333%',
  },
  fab2: {
    borderRadius: 2,
    borderColor: 'red',
    borderWidth: 1,
    width: '33.3333333333%',
    marginLeft: '32.3333333333%',
  },
  fab3: {
    borderRadius: 2,
    borderColor: 'red',
    borderWidth: 1,
    width: '33.3333333333%',
    marginLeft: '66.6666666667%',
  },
});
