import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../Component/Header';
import ChatBar from '../Component/ChatBar';

const ChatHead = ({navigation}) => {
  return (
    <View>
      <Header
        text={'Chats'}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <ChatBar
        onPress={() => {
          navigation.navigate('ChatScreen');
        }}
      />
      <ChatBar
        onPress={() => {
          navigation.navigate('ChatScreen');
        }}
      />
      <ChatBar
        onPress={() => {
          navigation.navigate('ChatScreen');
        }}
      />
    </View>
  );
};

export default ChatHead;

const styles = StyleSheet.create({});
