import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {vh, vw, normalize} from '../assets/Dimension/dimension';

export default function SectionTabs(props) {
  const [index, setIndex] = useState('1');
  const [tab3, settab3] = useState('posts');
  useEffect(() => {
    return () => {
      setIndex('1');
      settab3('hot');
    };
  }, []);

  onChangeIndx3 = text => {
    setIndex(text);
  };
  return (
    <View>
      <View style={styles.mainContainer}>
        <TouchableOpacity>
          <Text
            onPress={() => {
              onChangeIndx3('1');
              settab3('hot');
              props.tabPressed('hot');
            }}
            style={index === '1' ? styles.selectedIndx : styles.unselectedIndx}>
            Hot
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            onPress={() => {
              onChangeIndx3('2');
              settab3('fresh');
              props.tabPressed('fresh');
            }}
            style={index == '2' ? styles.selectedIndx : styles.unselectedIndx}>
            Fresh
          </Text>
        </TouchableOpacity>
      </View>
      {index === '1' ? <View style={styles.tab1} /> : null}
      {index === '2' ? <View style={styles.tab2} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  selectedIndx: {
    color: 'black',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  unselectedIndx: {
    color: 'gray',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  mainContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    width: '50%',
  },
  tab2: {
    borderRadius: 2,
    borderColor: 'red',
    borderWidth: 1,
    width: '50%',
    marginLeft: '50%',
  },
});
