import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import FastImage from 'react-native-fast-image';
import * as Animatable from 'react-native-animatable';

const Carbooking = ({navigation}) => {
  return (
    <View style={styles.MainLogo}>
      <Image
        style={{width: '100%', height: '100%', resizeMode: 'cover'}}
        source={require('../Assets/text.png')}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DrawerNavigator');
        }}>
        <Text style={styles.Text123}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Carbooking;

const styles = StyleSheet.create({
  MainLogo: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  Text123: {
    position: 'absolute',
    bottom: 48,
    left: 100,
    color: 'white',
    fontSize: h('4%'),
    fontWeight: 'bold',
  },
});
