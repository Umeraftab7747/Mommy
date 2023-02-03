import {StyleSheet, Text, View, TextInput, Keyboard} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {w, h} from 'react-native-responsiveness';
import FastImage from 'react-native-fast-image';
import AppButton from '../Component/AppButton';

const Otp = ({navigation}) => {
  const [value, setValue] = React.useState('');
  const [input1, setInput1] = React.useState('');
  const [input2, setInput2] = React.useState('');
  const [input3, setInput3] = React.useState('');
  const [input4, setInput4] = React.useState('');

  const [input1Foucs, setinput1Foucs] = useState(false);
  const [input2Foucs, setInput2Foucs] = useState(false);
  const [input3Foucs, setInput3Foucs] = useState(false);
  const [input4Foucs, setInput4Foucs] = useState(false);

  const [code, setCode] = useState('');
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    ref1?.current?.focus();
  }, []);

  return (
    <View style={styles.OtpScreen}>
      <View style={styles.TopContainer}>
        <Text style={styles.MainVerification}>Verification</Text>
        <Text style={styles.MainVerification2}>
          Lorem Ipsum is simply dummy text
        </Text>
      </View>
      {/* inputs */}
      <View style={styles.InputCode}>
        <TextInput
          keyboardType="numeric"
          onFocus={() => {
            setinput1Foucs(true);
          }}
          onBlur={() => setinput1Foucs(false)}
          style={input1Foucs === true ? styles.otpInput2 : styles.otpInput}
          placeholder="*"
          value={input1}
          onChangeText={in1 => {
            setInput1(in1);
            ref2?.current?.focus();
          }}
          ref={ref1}
        />
        <TextInput
          keyboardType="numeric"
          onFocus={() => {
            setInput2Foucs(true);
          }}
          onBlur={() => setInput2Foucs(false)}
          style={input2Foucs === true ? styles.otpInput2 : styles.otpInput}
          placeholder="*"
          value={input2}
          onChangeText={in2 => {
            setInput2(in2);
            ref3?.current?.focus();
          }}
          ref={ref2}
        />
        <TextInput
          keyboardType="numeric"
          onFocus={() => {
            setInput3Foucs(true);
          }}
          onBlur={() => setInput3Foucs(false)}
          style={input3Foucs === true ? styles.otpInput2 : styles.otpInput}
          placeholder="*"
          value={input3}
          onChangeText={in3 => {
            setInput3(in3);
            ref4?.current?.focus();
          }}
          ref={ref3}
        />
        <TextInput
          keyboardType="numeric"
          onFocus={() => {
            setInput4Foucs(true);
          }}
          onBlur={() => setInput4Foucs(false)}
          style={input4Foucs === true ? styles.otpInput2 : styles.otpInput}
          placeholder="*"
          value={input4}
          onChangeText={async in6 => {
            await setInput4(in6);
            await setCode(input1 + input2 + input3 + input4);
            const v = input1 + input2 + input3 + input4;
            console.warn(v);

            Keyboard.dismiss();
          }}
          ref={ref4}
        />
      </View>

      <View style={styles.MainView} />
      <AppButton
        text={'SUBMIT'}
        onPress={() => {
          navigation.navigate('Carbooking');
        }}
      />

      {/* inputs */}
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  OtpScreen: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  TopContainer: {
    backgroundColor: '#FF9A00',
    width: '100%',
    height: h('25%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainVerification: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: h('4%'),
  },
  MainVerification2: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: h('2.4%'),
  },
  otpInput2: {
    width: 50,
    height: 60,
    borderWidth: 1,
    borderColor: '#FF9A00',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'HKGrotesk-SemiBold',
    // marginHorizontal: 2,
  },
  otpInput: {
    width: 50,
    height: 60,
    borderWidth: 1,
    borderColor: '#0002',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'HKGrotesk-SemiBold',
    // marginHorizontal: 2,
  },
  InputCode: {
    width: '100%',
    height: h('10%'),
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  MainView: {
    marginTop: h('15%'),
  },
});
