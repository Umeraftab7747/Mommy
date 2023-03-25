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
import Icon from 'react-native-vector-icons/Ionicons';

const DriverSignup = ({navigation}) => {
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
          <Text style={styles.mainCC}>Driver Applicatoin</Text>
        </Animatable.View>

        <Animatable.View
          animation="fadeInDown"
          delay={200}
          style={styles.CircleBox}>
          <Text style={styles.ProfilePicture}>Upload Profile Photo</Text>
          <View style={styles.imgbox}>
            <Icon name="camera" size={35} color="#FF9A00" />
          </View>
        </Animatable.View>
        <Animatable.View
          animation="fadeInDown"
          delay={200}
          style={styles.CircleBox2}>
          <Text style={styles.ProfilePicture}>Upload photos of the Car</Text>
          <View style={styles.TopCCircleBox}>
            <View style={styles.imgbox2}>
              <Icon name="camera" size={35} color="#FF9A00" />
              <Text>Front including</Text>
              <Text>License plates</Text>
            </View>
            <View style={styles.imgbox2}>
              <Icon name="camera" size={35} color="#FF9A00" />
              <Text>Left Side</Text>
              <Text>of the Car</Text>
            </View>
          </View>
          <View style={styles.TopCCircleBox}>
            <View style={styles.imgbox2}>
              <Icon name="camera" size={35} color="#FF9A00" />
              <Text>Right side</Text>
              <Text>of the car</Text>
            </View>
            <View style={styles.imgbox2}>
              <Icon name="camera" size={35} color="#FF9A00" />
              <Text>Rear including</Text>
              <Text>license plates</Text>
            </View>
          </View>
        </Animatable.View>

        <Animatable.View animation="fadeInDown" delay={300}>
          <AppInput text={'Number of Passengers:'} />
        </Animatable.View>
        <Animatable.View animation="fadeInDown" delay={400}>
          <AppInput text={'Make:'} />
        </Animatable.View>
        <Animatable.View animation="fadeInDown" delay={500}>
          <AppInput text={'Model:'} />
        </Animatable.View>
        <Animatable.View animation="fadeInDown" delay={600}>
          <AppInput text={'Year of the Car '} />
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp"
          delay={800}
          style={[styles.CircleBox3, {marginTop: h('2%')}]}>
          <Text style={styles.ProfilePicture}>Upload Auto Insurance</Text>
          <Text style={styles.ProfilePicture2}>
            Please take a picture of the verification of the insurance card to
            include the Driver's name and the car information.
          </Text>
          <View style={styles.imgbox3}>
            <Icon name="camera" size={35} color="#FF9A00" />
          </View>
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp"
          delay={800}
          style={styles.passwordField}
          animation="fadeInDown"
          delay={700}>
          <TouchableOpacity
            onPress={() => {
              SetShow(!show);
            }}
            style={styles.TtBtn}></TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={800}>
          <AppButton
            text={'Submit'}
            onPress={() => {
              alert('DONE');
              navigation.goBack();
            }}
          />
        </Animatable.View>
      </View>
    </ScrollView>
  );
};

export default DriverSignup;

const styles = StyleSheet.create({
  Maincontainer: {
    width: '100%',
    height: h('180%'),
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
    height: h('3%'),
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
  CircleBox2: {
    width: '90%',
    height: h('35%'),
    borderBottomColor: '#0003',
    borderBottomWidth: h('0.2%'),
    marginBottom: h('1%'),
    // backgroundColor: 'red',
  },
  CircleBox: {
    width: '90%',
    height: h('20%'),
    borderBottomColor: '#0003',
    borderBottomWidth: h('0.2%'),
    marginBottom: h('1%'),
    // backgroundColor: 'red',
  },
  CircleBox3: {
    width: '90%',
    height: h('26%'),
    // borderBottomColor: '#0003',
    // borderBottomWidth: h('0.2%'),
    marginBottom: h('1%'),
    // backgroundColor: 'red',
  },
  TopCCircleBox: {
    width: '70%',
    height: '45%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ProfilePicture: {
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
  ProfilePicture2: {
    fontSize: h('1.7%'),
    color: '#0003',
  },
  imgbox: {
    backgroundColor: '#fff',
    width: 120,
    height: 120,
    borderRadius: 1000 / 2,
    alignSelf: 'center',
    borderColor: '#FF9A00',
    borderWidth: h('0.2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgbox2: {
    backgroundColor: '#fff',
    width: 110,
    height: 110,

    alignSelf: 'center',
    borderColor: '#FF9A00',
    borderWidth: h('0.2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('1%'),
  },
  imgbox3: {
    backgroundColor: '#fff',
    width: '100%',
    height: 125,

    alignSelf: 'center',
    borderColor: '#FF9A00',
    borderWidth: h('0.2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('1%'),
    marginTop: h('2%'),
  },
});
