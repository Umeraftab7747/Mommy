import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import Icon from 'react-native-vector-icons/Ionicons';

import ItemContainer from '../Component/ItemContainer';
import AppButton from '../Component/AppButton';

const Setting = () => {
  return (
    <View style={styles.MainContainer}>
      {/* headr */}
      <View style={styles.TopContainer}>
        <View style={styles.TopNineCOntainer}>
          <View style={styles.leftTopC}>
            <Image
              style={styles.ImgCont}
              source={{
                uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
              }}
            />
          </View>
          <View style={styles.RightTopC}>
            <Text style={styles.NameText2}>Jhon Doe</Text>
            <View style={styles.mainReview}>
              <Icon name="star-sharp" size={22} color="#fff" />
              <Text style={styles.NameText}>5</Text>
            </View>
          </View>
        </View>
      </View>
      {/* headr */}
      <ItemContainer icon={'call'} />
      <ItemContainer icon={'person'} />
      <ItemContainer icon={'home'} />
      <ItemContainer icon={'notifications'} />
      <ItemContainer icon={'cog'} />
      <AppButton text={'CHECK PAYMENT METHOD'} />
      <AppButton text={'BECOME DRIVER'} />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  TopContainer: {
    width: '100%',
    height: h('20%'),
    backgroundColor: '#FF9A00',
    justifyContent: 'center',
  },
  TopNineCOntainer: {
    width: '90%',
    height: '80%',
    // backgroundColor: 'white',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  leftTopC: {
    width: '25%',
    height: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  RightTopC: {
    width: '20%',
    height: '90%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: h('2%'),
  },
  ImgCont: {
    backgroundColor: 'grey',
    width: 65,
    height: 65,
    borderRadius: 1000 / 2,
    borderColor: '#fff',
    borderWidth: h('0.2%'),
  },
  mainReview: {
    width: '70%',
    height: '30%',

    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainReview2: {
    width: '50%',
    height: '30%',

    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: h('2%'),
  },
  NameText2: {
    color: '#fff',
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
  NameText: {
    color: '#fff',
  },
});
