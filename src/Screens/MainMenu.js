import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {w, h} from 'react-native-responsiveness';
import FastImage from 'react-native-fast-image';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const GOOGLE_MAPS_APIKEY = 'AIzaSyB5ukZgNnlKRZDvfM6LV2y6l9HikfZQCb8';

const MainMenu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
      <Animatable.View animation="fadeInDown" delay={300}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
          style={styles.boxofColor}>
          <Icon name="apps-sharp" size={30} color="#FF9A00" />
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        delay={500}
        style={styles.boxofColor2}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Location');
          }}>
          <Icon name="car-sport-sharp" size={40} color="#fff" />
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    zIndex: -1,
  },
  boxofColor: {
    width: '14%',
    height: h('7%'),
    backgroundColor: '#fff',
    position: 'absolute',
    top: 10,
    zIndex: 1000,
    left: 10,
    borderRadius: h('1000%'),
    borderColor: '#0003',
    borderWidth: h('0.2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxofColor2: {
    width: '20%',
    height: h('10%'),
    backgroundColor: '#FF9A00',
    position: 'absolute',
    bottom: 20,
    zIndex: 1000,
    right: 30,
    borderRadius: h('1000%'),
    borderColor: '#0003',
    borderWidth: h('0.2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
