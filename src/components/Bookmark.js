import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

import {vh, vw, normalize} from '../assets/Dimension/dimension';
import {POSTIMG} from '../assets/images/localimages';
import {useSelector, useDispatch} from 'react-redux';
import {savePost, newSavePost} from '../actions/userAction.js';
export default function Bookmark({postTitle, postImage, postUpvotes}) {
  const dispatch = useDispatch();

  const [bookmarked, setbookmarked] = React.useState(false);

  var existingPosts = useSelector(state => {
    return state.userReducer.saved;
  });

  return (
    <View>
      {bookmarked ? (
        <View style={styles.likeView}>
          <View style={styles.likeImageView}>
            <TouchableOpacity
              onPress={() => {
                setbookmarked(!bookmarked);
                var newpost = existingPosts.filter(posts => {
                  return posts.title !== postTitle;
                });
                dispatch(newSavePost(newpost));
                console.log('lide');
                console.log('book', existingPosts, 'bok', newpost);
              }}>
              <Image
                source={POSTIMG.bookmarked}
                style={styles.likeImage}
                // resizeMode="center"
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.likeView}>
          <View style={styles.likeImageView}>
            <TouchableOpacity
              onPress={() => {
                setbookmarked(!bookmarked);
                dispatch(
                  savePost({
                    title: postTitle,
                    image: postImage,
                    upvotes: postUpvotes,
                  }),
                );
              }}>
              <Image
                source={POSTIMG.boormark}
                style={styles.likeImage}
                // resizeMode="center"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  likeView: {
    flexDirection: 'row',
  },
  likeImageView: {
    width: vw(20),
    height: vh(20),
    // marginVertical: vh(5),
    // marginHorizontal: vh(25),
  },
  likeImage: {
    resizeMode: 'contain',
    width: vw(20),
    height: vh(20),
  },
});
