import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PostHeaderComponent from '../../../components/PostHeaderComponent';
import {POSTHEADER} from '../../../assets/images/localimages';
import {vh, vw, normalize} from '../../../assets/Dimension/dimension';
import {DUMMY} from './CommentData';
// import testdata from '../Home/test';
import MenuModal from '../../../components/Modals/MenuModal';
import CommentsModal from '../../../components/Modals/CommentsModal';
var DATA = [];

//console.log('comm', DUMMY);

export default function PostPage(props) {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  DATA = props.route.params;
  // console.log('post page', DATA);
  backArrowPress = () => {
    props.navigation.goBack();
  };
  verticalMenuPressed = () => {
    setShowModal(!showModal);
  };
  closeModal = () => {
    setShowModal(false);
  };
  commentTypePressed = () => {
    setShowModal2(!showModal2);
  };
  closeModal2 = () => {
    setShowModal2(false);
  };
  // const CommentFunction = () => {

  // };

  return (
    <View style={styles.container}>
      <PostHeaderComponent
        backArrowPressed={backArrowPress}
        bookmarkImg={POSTHEADER.boormark}
        bookmarkedIMG={POSTHEADER.boormarked}
        verticalImg={POSTHEADER.horizontalmenu}
        verticalMenuPress={verticalMenuPressed}
      />
      <ScrollView>
        <View>
          <Text style={styles.title}>{DATA.titleOfPost}</Text>
          <Image style={styles.postimg} source={{uri: DATA.imageOfPost}} />
          <View style={styles.line} />
          <TouchableOpacity
            style={styles.hotcomment}
            onPress={commentTypePressed}>
            <Text style={styles.hotcommentText}>Hot Comments</Text>
            <Image
              // resizeMode={'contain'}
              style={styles.downarrow}
              source={POSTHEADER.cmnt}
            />
          </TouchableOpacity>
          <View style={styles.line} />

          <Text style={styles.guidlineText}>
            Remember to keep comments repectfull and to follow our{' '}
            <Text style={styles.guidelines}>Community Guidelines</Text>
          </Text>
          <View style={styles.line} />
        </View>
        <View>
          {DUMMY.map((itm, indx) => {
            return (
              <View>
                <View key={indx} style={styles.commentContainer}>
                  <View>
                    <Image
                      resizeMode={'center'}
                      style={styles.userAvatar}
                      source={{uri: itm.avatar}}
                    />
                  </View>
                  <View>
                    <Text style={styles.userName}>{itm.name}</Text>
                    <Text style={styles.comment}>{itm.body}</Text>
                  </View>
                </View>
                <View style={styles.line2} />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.commentInput}>
        <TextInput
          style={styles.inputStyle}
          placeholder={'Write your comment here!!'}
          placeholderTextColor={'gray'}
        />
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      <MenuModal
        show={showModal}
        animationType={'fade'}
        closePopup={closeModal}
        // data={popupList}
        haveOutsideTouch={true}
      />
      <CommentsModal
        show={showModal2}
        animationType={'fade'}
        closePopup={closeModal2}
        // data={popupList}
        haveOutsideTouch={true}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  postimg: {
    height: vh(300),
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: normalize(18),
    marginBottom: '3%',
    marginLeft: '3%',
    marginRight: '5%',
    textAlign: 'justify',
  },
  line: {
    borderWidth: 0.3,
    borderColor: 'grey',
    marginTop: '3%',
    marginBottom: '3%',
  },
  hotcomment: {
    marginLeft: '3%',
    flexDirection: 'row',
  },
  hotcommentText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: normalize(14),
  },
  downarrow: {
    resizeMode: 'contain',
    marginLeft: '3%',
    height: vh(15),
    width: vw(15),
  },
  guidlineText: {
    color: 'black',
    marginLeft: '3%',
    fontWeight: 'bold',
    fontSize: normalize(14),
  },
  guidelines: {
    fontSize: normalize(14),
    color: '#2196F3',
  },
  commentContainer: {
    flexDirection: 'row',
    margin: '3%',
  },
  userAvatar: {
    // resizeMode: 'contain',
    height: vh(30),
    width: vw(30),
    marginRight: '3%',
    borderRadius: 20,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: normalize(14),
  },
  comment: {
    marginRight: '10%',
    fontSize: normalize(14),
  },
  line2: {
    borderWidth: 0.3,
    borderColor: 'grey',
  },
  commentInput: {
    flexDirection: 'row',
    margin: '3%',
  },
  inputStyle: {
    borderWidth: 1,
    flex: 1,
    padding: '5%',
    borderRadius: 10,
    fontSize: normalize(14),
  },
  postButton: {
    backgroundColor: '#2196F3',
    marginLeft: '2%',
    borderRadius: 10,
  },
  postButtonText: {
    fontSize: normalize(14),
    padding: '5%',
    color: 'white',
  },
});
