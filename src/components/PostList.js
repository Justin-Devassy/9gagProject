import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
//import testdata from '../modules/screens/Home/test';
import {POSTIMG, ACTIVITY} from '../assets/images/localimages';
import {vh, vw, normalize} from '../assets/Dimension/dimension';
//import {isUserLoggedIn} from '../actions/userAction';
import {useSelector, useDispatch} from 'react-redux';
import Bookmark from './Bookmark';
import Like from './Like';
import {getSearchData} from '../actions/userAction.js';
import {loadPartialConfig} from '@babel/core';
var hotDATA;
var freshDATA;
var trendingDATA;
var FlatDATA;
var bookMarkNav;

export default function PostList(props) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState();
  // const [upsNew, setUpsNew] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    // setSectionAttr(props.sectionAttr);
    setLoading(true);
    const acioxFun = async () => {
      await axios
        .get(
          'https://meme-api.herokuapp.com/gimme/' + props.sectionAttr + '/50',
        )
        .then(res => {
          setLoading(false);
          setPosts(res.data.memes);
        })
        .catch(error => {
          console.log(error);
        });
    };
    acioxFun();
  }, [props.sectionAttr]);

  const DATA = posts;

  if (DATA) {
    if (props.screenName === 'home') {
      hotDATA = DATA.filter(ele => ele.ups > 500);
      freshDATA = DATA.filter(ele => ele.ups < 100);
      trendingDATA = DATA.filter(ele => ele.ups < 500 && ele.ups > 100);
    } else if (props.screenName === 'section') {
      hotDATA = DATA.filter(ele => ele.ups > 100);
      freshDATA = DATA.filter(ele => ele.ups < 100);
    }
    // console.log('hot', hotDATA, 'freshDATA', freshDATA);
    if (props.tabName === 'hot') {
      FlatDATA = hotDATA;
    } else if (props.tabName === 'fresh') {
      FlatDATA = freshDATA;
    } else {
      FlatDATA = trendingDATA;
    }
    // console.log('FLAT', FlatDATA);
  }
  dispatch(getSearchData(DATA));

  renderItems = ({item, index}) => {
    const len = item.preview.length;

    // setUps(item.ups);

    increment = () => {
      console.log('increment');
    };
    decrement = () => {
      console.log('decrement');
    };
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            props.postPageNavigate(
              index,
              item.title,
              item.ups,
              item.preview[len - 1],
            )
          }>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
        <View style={styles.section}>
          <View style={styles.sectionView}>
            <Image />
            <Text></Text>
          </View>
          <View style={styles.flexDir}>
            {props.isLoggedIn ? (
              <TouchableOpacity>
                <Bookmark
                  postTitle={item.title}
                  postImage={item.preview[len - 1]}
                  postUpvotes={item.ups}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={props.userNotLogged}>
                <Image style={styles.icon} source={POSTIMG.boormark} />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={props.verticalMenuPress}>
              <Image style={styles.icon} source={POSTIMG.horizontalmenu} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image style={styles.postimg} source={{uri: item.preview[len - 1]}} />
        </View>
        <View style={styles.postinteractinView}>
          {/*============ liked part================ */}
          {props.isLoggedIn ? (
            <Like
              title={item.title}
              img={item.preview[len - 1]}
              increment={increment}
              decrement={decrement}
            />
          ) : (
            <View style={styles.upvotes}>
              <TouchableOpacity onPress={props.userNotLogged}>
                <Image style={styles.commonimg2} source={POSTIMG.uparrow} />
              </TouchableOpacity>
              <TouchableOpacity onPress={props.userNotLogged}>
                <Image style={styles.commonimg2} source={POSTIMG.downarrow} />
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity
            style={styles.flexDir}
            onPress={() =>
              props.postPageNavigate(
                index,
                item.title,
                item.ups,
                item.preview[len - 1],
              )
            }>
            <Image style={styles.commonimg} source={POSTIMG.comment} />
            <Text style={styles.commonText}>{item.ups}</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.commonText4}>
              VOTES{'  '}
              {item.ups}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.flexDir}
            onPress={props.openShareModal}>
            <Image style={styles.commonimg} source={POSTIMG.share} />
            <Text style={styles.commonText}>SHARE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
      </View>
    );
  };
  //console.log('imggggggggg', ACTIVITY.activityimg);

  return loading ? (
    <View style={styles.activityViewStyle}>
      <Image style={styles.activityImg} source={ACTIVITY.activityimg} />
    </View>
  ) : (
    <FlatList
      renderItem={renderItems}
      data={FlatDATA}
      initialNumToRender={50}
      extraData={FlatDATA}
      keyExtractor={item => item.postLink}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '5%',
    paddingBottom: '5%',
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: normalize(16),
    marginRight: '5%',
    marginLeft: '1%',
    textAlign: 'justify',
  },
  postimg: {
    flex: 1,
    width: '100%',
    height: vh(300),
    resizeMode: 'contain',
    marginTop: '5%',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  postinteractinView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5%',
    marginBottom: '5%',
    backgroundColor: 'white',
  },
  flexDir: {
    flexDirection: 'row',
  },
  commonimg: {
    resizeMode: 'contain',
    width: vw(25),
    height: vh(25),
  },
  commonText: {
    color: '#999999',
    paddingLeft: '3%',
    alignSelf: 'center',
    fontSize: normalize(14),
  },
  line: {
    borderWidth: 0.5,
    borderColor: '#9999',
  },
  icon: {
    resizeMode: 'contain',
    width: vw(20),
    height: vh(20),
  },
  section: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  commonimg2: {
    resizeMode: 'contain',
    width: vw(25),
    height: vh(25),
    marginLeft: '18%',
  },
  commonText4: {
    color: '#999999',
    alignSelf: 'center',
    marginTop: '5%',
    fontSize: normalize(14),
  },
  activityViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityImg: {
    width: 100,
    height: 100,
  },
  upvotes: {
    flexDirection: 'row',
    flex: 0.4,
  },
  sectionView: {
    flex: 1,
    flexDirection: 'row',
  },
});
