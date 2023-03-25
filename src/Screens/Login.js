import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import FastImage from 'react-native-fast-image';
import * as Animatable from 'react-native-animatable';

// components
import AppInput from '../Component/AppInput';
import AppButton from '../Component/AppButton';

const Login = ({navigation}) => {
  const [show, SetShow] = React.useState(true);

  return (
    <View style={styles.Maincontainer}>
      <Animatable.View
        animation="fadeInDown"
        delay={400}
        style={styles.MainLogo}>
        <Image
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          source={require('../../Assets/logo2.png')}
        />
      </Animatable.View>
      <Animatable.View animation="fadeInDown" delay={600}>
        <AppInput text={'Email'} text2={'Enter your Email'} />
      </Animatable.View>
      <Animatable.View animation="fadeInDown" delay={600}>
        <AppInput
          text={'Password'}
          text2={'***************'}
          Password
          ShowPassword={show}
        />
      </Animatable.View>

      <Animatable.View
        style={styles.passwordField}
        animation="fadeInDown"
        delay={800}>
        <TouchableOpacity
          onPress={() => {
            SetShow(!show);
          }}
          style={styles.TtBtn}>
          <Text style={styles.Btntext}>SHOW PASSWORD</Text>
        </TouchableOpacity>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={800}>
        <AppButton
          text={'LOG IN'}
          onPress={() => {
            navigation.navigate('Otp');
          }}
        />
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={800}
        style={styles.MainLogo2}>
        <Image
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          source={require('../../Assets/or.png')}
        />
      </Animatable.View>
      <Animatable.View animation="fadeInUp" delay={900}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
          style={styles.MainBtn}>
          <Text style={styles.MainBtnText}>Need an account? SIGN UP</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Login;

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
  passwordField: {
    width: '100%',
    height: '6%',
  },
});
