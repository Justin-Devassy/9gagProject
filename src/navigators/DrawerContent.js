import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {vh, vw, normalize} from '../assets/Dimension/dimension';

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {DRAWERIMG} from '../assets/images/localimages';
export default function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Home"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.logo} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('HomeScreen');
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Top Posts"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.graph} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Shop"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.shop} style={styles.imgstyle} />;
          }}
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Upgrade"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.pro} style={styles.imgstyle} />;
          }}
          onPress={() => props.navigation.closeDrawer()}
        />
        <View
          style={{
            borderWidth: 0.3,
            marginTop: '5%',
            borderColor: '#9999',
            borderRadius: 2,
          }}
        />
        <Text
          style={{
            color: 'grey',
            fontWeight: 'bold',
            fontSize: normalize(14),
            paddingTop: '5%',
          }}>
          Sections
        </Text>

        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Funny"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.funny} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Funny',
              sectionAtrrName: 'funny',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Meme"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.meme} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Meme',
              sectionAtrrName: 'meme',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Movies"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.movie} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Movies',
              sectionAtrrName: 'MoviePosterPorn',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Pc Master Race"
          icon={({focused, color, size}) => {
            return (
              <Image source={DRAWERIMG.pcmaster} style={styles.imgstyle} />
            );
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'PC master race',
              sectionAtrrName: 'pcmasterrace',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Food"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.food} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Food',
              sectionAtrrName: 'food',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Star Wars"
          icon={({focused, color, size}) => {
            return (
              <Image source={DRAWERIMG.starwars} style={styles.imgstyle} />
            );
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Star Wars',
              sectionAtrrName: 'StarWars',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Marvel"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.marvel} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Marvel',
              sectionAtrrName: 'Marvel',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Wholesome"
          icon={({focused, color, size}) => {
            return (
              <Image source={DRAWERIMG.wholesome} style={styles.imgstyle} />
            );
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'wholesome',
              sectionAtrrName: 'wholesome',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="History"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.history} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'History',
              sectionAtrrName: 'HistoryPorn',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Wallpaper"
          icon={({focused, color, size}) => {
            return (
              <Image source={DRAWERIMG.wallpaper} style={styles.imgstyle} />
            );
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Wallpaper',
              sectionAtrrName: 'wallpaper',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Cars"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.car} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Cars',
              sectionAtrrName: 'carporn',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Dogs"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.dog} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Dogs',
              sectionAtrrName: 'dog',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Cats"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.cats} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Cats',
              sectionAtrrName: 'cats',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Comics"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.comics} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Comics',
              sectionAtrrName: 'comics',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Cozy"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.cozy} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Cozy',
              sectionAtrrName: 'CozyPlaces',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Funny"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.funny} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Funny',
              sectionAtrrName: 'funny',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Drawing"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.drawing} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Drawing',
              sectionAtrrName: 'Drawing',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Ramen"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.ramen} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Ramen',
              sectionAtrrName: 'ramen',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Crafts"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.crafts} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Crafts',
              sectionAtrrName: 'Crafts',
            });
          }}
        />
        <DrawerItem
          labelStyle={{
            fontWeight: 'bold',
            fontSize: normalize(14),
            color: 'black',
          }}
          label="Photography"
          icon={({focused, color, size}) => {
            return <Image source={DRAWERIMG.photo} style={styles.imgstyle} />;
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('sectionScreen', {
              sectionName: 'Photography',
              sectionAtrrName: 'itookapicture',
            });
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgstyle: {
    resizeMode: 'contain',
    height: vh(30),
    width: vw(30),
  },
});
