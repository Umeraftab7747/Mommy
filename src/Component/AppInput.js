import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';

const AppInput = ({text, Password, text2, ShowPassword}) => {
  return (
    <View style={styles.AppInputContainer}>
      <Text style={styles.TextCOlor}>{text}</Text>
      {Password ? (
        <TextInput
          style={styles.bgtxt}
          placeholder={text2}
          secureTextEntry={ShowPassword}
        />
      ) : (
        <TextInput style={styles.bgtxt} placeholder={text2} />
      )}
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  AppInputContainer: {
    width: w('90%'),
    height: h('9%'),
    // backgroundColor: 'red',
    marginTop: h('2%'),
  },
  bgtxt: {
    width: '100%',
    backgroundColor: 'white',
    height: h('7%'),
    borderRadius: h('0.5%'),
    borderColor: '#ACACAC',
    borderWidth: h('0.2%'),
    paddingLeft: h('1%'),
    fontSize: h('2%'),
  },
  TextCOlor: {
    color: '#707070',
    fontSize: h('2%'),
  },
});
