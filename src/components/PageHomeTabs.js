import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {vh, vw, normalize} from '../assets/Dimension/dimension';

export default function PageHomeTabs(props) {
  //console.log('this is ', props);
  const [index, setIndex] = useState('1');
  const [tab1, settab1] = useState('hot');

  onChangeIndex = text => {
    setIndex(text);
  };
  useEffect(() => {
    return () => {
      setIndex('1');
      settab1('hot');
    };
  }, []);
  return (
    <View>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            onChangeIndex('1');
            settab1('hot');
            props.tabPressed('hot');
          }}>
          <Text
            style={
              index === '1' ? styles.selectedIndex : styles.unselectedIndex
            }>
            Hot
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            onChangeIndex('2');
            settab1('trending');
            props.tabPressed('trending');
          }}>
          <Text
            style={
              index === '2' ? styles.selectedIndex : styles.unselectedIndex
            }>
            Trending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            onChangeIndex('3');
            settab1('fresh');
            props.tabPressed('fresh');
          }}>
          <Text
            style={
              index === '3' ? styles.selectedIndex : styles.unselectedIndex
            }>
            Fresh
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {index === '1' ? <View style={styles.tab1} /> : null}
        {index === '2' ? <View style={styles.tab2} /> : null}
        {index === '3' ? <View style={styles.tab3} /> : null}
        {/* {index === '4' ? <View style={styles.tab4} /> : null} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectedIndex: {
    color: 'black',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  unselectedIndex: {
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
  tab1: {
    borderRadius: 2,
    borderColor: 'red',
    borderWidth: 1,
    width: '33.3333333333%',
  },
  tab2: {
    borderRadius: 2,
    borderColor: 'red',
    borderWidth: 1,
    width: '33.3333333333%',
    marginLeft: '33.3333333333%',
  },
  tab3: {
    borderRadius: 2,
    borderColor: 'red',
    borderWidth: 1,
    width: '33.3333333333%',
    marginLeft: '66.6666666667%',
  },
});
