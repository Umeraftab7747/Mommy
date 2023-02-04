import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

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

      <Animatable.View animation="fadeIn" delay={300}>
        <ChatBar
          onPress={() => {
            navigation.navigate('ChatScreen');
          }}
        />
      </Animatable.View>
      <Animatable.View animation="fadeIn" delay={500}>
        <ChatBar
          onPress={() => {
            navigation.navigate('ChatScreen');
          }}
        />
      </Animatable.View>
      <Animatable.View animation="fadeIn" delay={800}>
        <ChatBar
          onPress={() => {
            navigation.navigate('ChatScreen');
          }}
        />
      </Animatable.View>
    </View>
  );
};

export default ChatHead;

const styles = StyleSheet.create({});
