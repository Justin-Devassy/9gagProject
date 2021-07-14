import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {
  newUpvotedPost,
  newDownvotedPost,
  latestUpvotedPost,
  latestDownvotedPost,
} from '../actions/userAction';
import {vh, vw, normalize} from '../assets/Dimension/dimension';
import {POSTIMG} from '../assets/images/localimages';
export default function Like({
  initialVal,
  typed,
  title,
  img,
  increment,
  decrement,
}) {
  const dispatch = useDispatch();
  const [bookmarked, setbookmarked] = useState(false);
  const [bookmarked2, setbookmarked2] = useState(false);
  var upVoted = useSelector(state => {
    return state.userReducer.upVoted;
  });
  var downVoted = useSelector(state => {
    return state.userReducer.downVoted;
  });

  return (
    <View style={styles.likeView}>
      <TouchableOpacity
        // style={{alignItems: 'space-around'}}
        onPress={() => {
          setbookmarked(!bookmarked);
          if (bookmarked === false) {
            dispatch(newUpvotedPost({title: title, image: img}));
            increment();
          } else {
            var newpost = upVoted.filter(posts => {
              return posts.title !== title;
            });
            dispatch(latestUpvotedPost(newpost));
          }
          setbookmarked2(false);
        }}>
        <Image
          style={styles.likeImage}
          source={bookmarked ? POSTIMG.uparrowed : POSTIMG.uparrow}
        />
      </TouchableOpacity>
      <TouchableOpacity
        // style={{alignItems: 'space-around'}}
        onPress={() => {
          setbookmarked2(!bookmarked2);
          if (bookmarked2 === false) {
            dispatch(newDownvotedPost({title: title, image: img}));
            decrement();
          } else {
            var newpost = downVoted.filter(posts => {
              return posts.title !== title;
            });
            dispatch(latestDownvotedPost(newpost));
          }
          setbookmarked(false);
        }}>
        <Image
          style={styles.likeImage}
          source={bookmarked2 ? POSTIMG.downarrowed : POSTIMG.downarrow}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  likeView: {
    flexDirection: 'row',
    flex: 0.4,
  },

  likeImage: {
    resizeMode: 'contain',
    width: vw(25),
    height: vh(25),
    marginLeft: '18%',
  },
});
