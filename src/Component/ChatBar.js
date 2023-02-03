import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';

const ChatBar = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.ChatBar}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.ImgCont}
          source={{
            uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
          }}
        />
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
