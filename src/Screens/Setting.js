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
import * as Animatable from 'react-native-animatable';

import ItemContainer from '../Component/ItemContainer';
import AppButton from '../Component/AppButton';

const Setting = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
      {/* headr */}
      <Animatable.View
        animation="fadeIn"
        delay={300}
        style={styles.TopContainer}>
        <View style={styles.TopNineCOntainer}>
          <Animatable.View
            style={styles.leftTopC}
            animation="fadeInUp"
            delay={700}>
            <Image
              style={styles.ImgCont}
              source={require('../../Assets/man.jpg')}
            />
          </Animatable.View>
          <Animatable.View
            animation="fadeInUp"
            delay={700}
            style={styles.RightTopC}>
            <Text style={styles.NameText2}>Jhon Doe</Text>
            <View style={styles.mainReview}>
              <Icon name="star-sharp" size={22} color="#fff" />
              <Text style={styles.NameText}>5</Text>
            </View>
          </Animatable.View>
        </View>
      </Animatable.View>
      {/* headr */}
      <View style={{height: 10}} />
      <Animatable.View animation="fadeIn" delay={400}>
        <ItemContainer icon={'call'} />
      </Animatable.View>
      <Animatable.View animation="fadeIn" delay={500}>
        <ItemContainer icon={'person'} />
      </Animatable.View>
      <Animatable.View animation="fadeIn" delay={600}>
        <ItemContainer icon={'home'} />
      </Animatable.View>
      <Animatable.View animation="fadeIn" delay={700}>
        <ItemContainer icon={'notifications'} />
      </Animatable.View>
      <Animatable.View animation="fadeIn" delay={800}>
        <ItemContainer icon={'cog'} />
      </Animatable.View>
      <Animatable.View animation="fadeInUp" delay={1100}>
        <AppButton text={'CHECK PAYMENT METHOD'} />
      </Animatable.View>
      <Animatable.View animation="fadeInUp" delay={1500}>
        <AppButton
          onPress={() => {
            navigation.navigate('DriverSignup');
          }}
          text={'BECOME DRIVER'}
        />
      </Animatable.View>
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
