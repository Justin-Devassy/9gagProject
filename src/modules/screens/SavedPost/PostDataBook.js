import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {vh, vw, normalize} from '../../../assets/Dimension/dimension';
export default function PostDataBook() {
  var existingPosts = useSelector(state => {
    return state.userReducer.saved;
  });
  console.log('saved', existingPosts);
  return (
    <ScrollView style={{}}>
      {existingPosts.map(element => {
        return (
          <View style={{}}>
            <View>
              <Text style={styles.title}>{element.title}</Text>
            </View>

            <View>
              <Image style={styles.img} source={{uri: element.image}} />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingTop: '5%',
    paddingBottom: '5%',
    fontWeight: 'bold',
    fontSize: normalize(18),
  },
  img: {
    width: '100%',
    height: vh(300),
    resizeMode: 'contain',
  },
});
