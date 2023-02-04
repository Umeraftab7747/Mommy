import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import Header from '../Component/Header';
import Activebar from '../Component/Activebar';
import RidersItem from '../Component/RidersItem';

const Riders = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <Header
        text={'Riders'}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <Animatable.View animation="fadeIn" delay={300}>
        <Activebar />
      </Animatable.View>
      <Animatable.View animation="fadeIn" delay={300}>
        <RidersItem />
      </Animatable.View>
      <Animatable.View animation="fadeIn" delay={600}>
        <RidersItem />
      </Animatable.View>
      <Animatable.View animation="fadeIn" delay={800}>
        <RidersItem />
      </Animatable.View>
    </View>
  );
};

export default Riders;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
  },
});
