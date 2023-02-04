import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';

const AppButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.MainContainer}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  MainContainer: {
    width: w('90%'),
    height: h('7%'),
    backgroundColor: '#FF9A00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('1%'),
    marginTop: h('1%'),
  },
  btnText: {
    color: 'white',
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
});
