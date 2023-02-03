import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import FastImage from 'react-native-fast-image';

// components
import AppInput from '../Component/AppInput';
import AppButton from '../Component/AppButton';

const Signup = ({navigation}) => {
  const [show, SetShow] = React.useState(true);

  return (
    <View style={styles.Maincontainer}>
      <View style={styles.MainLogo}>
        <Image
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          source={require('../Assets/logo2.png')}
        />
      </View>
      <AppInput text={'Email'} text2={'Enter your Email'} />
      <AppInput
        text={'Password'}
        text2={'***************'}
        Password
        ShowPassword={show}
      />

      <TouchableOpacity
        onPress={() => {
          SetShow(!show);
        }}
        style={styles.TtBtn}>
        <Text style={styles.Btntext}>SHOW PASSWORD</Text>
      </TouchableOpacity>

      <AppButton
        text={'SIGN UP'}
        onPress={() => {
          navigation.navigate('Otp');
        }}
      />
      <View style={styles.MainLogo2}>
        <Image
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          source={require('../Assets/or.png')}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={styles.MainBtn}>
        <Text style={styles.MainBtnText}>Already A User? LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
  },
  MainLogo: {
    width: '70%',
    height: h('10%'),
    // backgroundColor: 'red',
    marginTop: h('10%'),
    marginBottom: h('3%'),
  },
  MainLogo2: {
    width: '90%',
    height: h('7%'),
    // backgroundColor: 'red',
    marginTop: h('5%'),
    marginBottom: h('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  TtBtn: {
    width: '90%',
    // backgroundColor: 'red',
    height: h('7%'),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  Btntext: {
    color: '#707070',
    fontSize: h('1.8%'),
  },
  MainBtnText: {
    color: '#707070',
    fontSize: h('2%'),
  },
  MainBtn: {
    // backgroundColor: 'red',
    width: '90%',
    height: h('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: h('10%'),
  },
});
