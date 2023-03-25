import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import FastImage from 'react-native-fast-image';
import * as Animatable from 'react-native-animatable';
import CheckBox from '@react-native-community/checkbox';
// components
import AppInput from '../Component/AppInput';
import AppButton from '../Component/AppButton';

const Signup = ({navigation}) => {
  const [show, SetShow] = React.useState(true);
  const [isSelected, setSelection] = React.useState(false);
  const [isSelected2, setSelection2] = React.useState(false);

  return (
    <ScrollView>
      <View style={styles.Maincontainer}>
        <Animatable.View
          animation="fadeInDown"
          delay={200}
          style={styles.MainLogo}>
          {/* <Image
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          source={require('../../Assets/logo2.png')}
        /> */}
          <Text style={styles.mainCC}>Passenger Sign Up</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInDown" delay={300}>
          <AppInput text={'First Name'} text2={'Enter your Email'} />
        </Animatable.View>
        <Animatable.View animation="fadeInDown" delay={400}>
          <AppInput text={'Last Name'} text2={'Enter your Email'} />
        </Animatable.View>
        <Animatable.View animation="fadeInDown" delay={500}>
          <AppInput text={'Adress'} text2={'Enter your Email'} />
        </Animatable.View>
        <Animatable.View animation="fadeInDown" delay={600}>
          <AppInput text={'City'} text2={'Enter your Email'} />
        </Animatable.View>
        <Animatable.View animation="fadeInDown" delay={700}>
          <AppInput text={'Zip Code'} text2={'Enter your Email'} />
        </Animatable.View>

        <Animatable.View
          animation="fadeInDown"
          delay={700}
          style={styles.eightplusCc}>
          <Text>Are you 18+</Text>
          <View style={styles.bottmEightCC}>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
                tintColors={{true: '#FF9A00'}}
              />
              <Text style={styles.label}>Yes</Text>
            </View>
            <View
              style={[
                styles.checkboxContainer,
                {
                  marginLeft: h('2%'),
                },
              ]}>
              <CheckBox
                value={isSelected2}
                onValueChange={setSelection2}
                style={styles.checkbox}
                tintColors={{true: '#FF9A00'}}
              />
              <Text style={styles.label}>No</Text>
            </View>
          </View>
        </Animatable.View>

        <Animatable.View animation="fadeInDown" delay={600}>
          <AppInput text={'Email'} text2={'Enter your Email'} />
        </Animatable.View>

        <Animatable.View animation="fadeInDown" delay={700}>
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
          delay={700}>
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
            text={'SIGN UP'}
            onPress={() => {
              navigation.navigate('Otp');
            }}
          />
        </Animatable.View>

        {/* <Animatable.View
        animation="fadeInUp"
        delay={800}
        style={styles.MainLogo2}>
        <Image
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          source={require('../../Assets/or.png')}
        />
      </Animatable.View> */}
        <Animatable.View animation="fadeInUp" delay={1000}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={styles.MainBtn}>
            <Text style={styles.MainBtnText}>Already A User? LOG IN</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  Maincontainer: {
    width: '100%',
    height: h('130%'),
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
  },
  MainLogo: {
    width: '70%',
    height: h('7%'),
    // backgroundColor: 'red',
    marginTop: h('2.5%'),
    marginBottom: h('3%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCC: {
    fontSize: h('3.5%'),
    fontWeight: 'bold',
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
    marginTop: h('3%'),
  },
  passwordField: {
    width: '100%',
    height: '6%',
  },
  eightplusCc: {
    width: '87%',
    // backgroundColor: 'red',
    height: h('7%'),
    marginTop: h('2%'),
    borderBottomColor: '#0003',
    borderBottomWidth: h('0.2%'),
  },
  bottmEightCC: {
    width: '40%',
    height: '70%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    // margin: 8,
    fontSize: h('2%'),
    alignSelf: 'center',
    marginLeft: h('0.5%'),
  },
});
