import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';

const ChatBar = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.ChatBar}>
      <View style={styles.leftContainer}>
        <Image style={styles.ImgCont} source={require('../Assets/man.jpg')} />
      </View>
      <View style={styles.RightContainer}>
        <Text>Jhon Doe</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatBar;

const styles = StyleSheet.create({
  ChatBar: {
    width: '100%',
    height: h('10%'),

    flexDirection: 'row',
    borderColor: '#0001',
    borderWidth: h('0.1%'),
  },
  leftContainer: {
    width: '25%',
    height: '100%',
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightContainer: {
    width: '75%',
    height: '100%',
    justifyContent: 'center',
    // backgroundColor: 'orange',
  },
  ImgCont: {
    backgroundColor: 'grey',
    width: 65,
    height: 65,
    borderRadius: 1000 / 2,
    borderColor: '#fff',
    borderWidth: h('0.2%'),
  },
});
