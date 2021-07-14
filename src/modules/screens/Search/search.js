import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import testdata from '../Home/test';
import {POSTHEADER} from '../../../assets/images/localimages';
import {useSelector, useDispatch} from 'react-redux';
import {normalize, vh, vw} from '../../../assets/Dimension/dimension';

var someArr = [];
// var searchArr = [];
const DATA = testdata;
export default function search({navigation}) {
  const searchData = useSelector(state => {
    return state.userReducer.search;
  });
  const [filters, setfilter] = useState();

  renderItems = items => {
    // console.log('foundddddddddddddddddd', items.item);
    const {title, preview, ups} = items.item;
    const len = preview.length;
    return (
      <View style={styles.topView}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.imageStyle} source={{uri: preview[len - 1]}} />
      </View>
    );
  };

  findPost = text => {
    setfilter(
      searchData.filter(
        ele => ele.title.toLowerCase().indexOf(text.toLowerCase()) !== -1,
      ),
    );
    //console.log('fill', filters);
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexdir}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.backarr} source={POSTHEADER.backarrow} />
        </TouchableOpacity>
        <Text style={styles.textHead}>Search</Text>
      </View>
      <TextInput
        style={styles.textInputStyle}
        placeholder={'Search'}
        onChangeText={findPost}
      />
      <FlatList
        data={filters}
        renderItem={renderItems}
        keyExtractor={item => item.title}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInputStyle: {
    color: 'black',
    fontSize: normalize(14),
    margin: '3%',
    padding: '3%',
    borderWidth: 1,
    borderRadius: 5,
  },
  topView: {
    marginRight: '3%',
    marginLeft: '3%',
  },
  title: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    marginTop: '10%',
    marginBottom: '3%',
    textAlign: 'justify',
  },
  imageStyle: {
    marginLeft: '3%',
    height: vh(300),
    width: '100%',
    resizeMode: 'contain',
  },
  flexdir: {
    flexDirection: 'row',
  },
  backarr: {
    height: vh(25),
    width: vw(25),
    marginLeft: '3%',
  },
  textHead: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: normalize(25),
  },
});
