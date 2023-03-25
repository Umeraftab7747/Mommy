import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';

import {w, h} from 'react-native-responsiveness';
import FastImage from 'react-native-fast-image';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import GetLocation from 'react-native-get-location';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAPS_APIKEY = 'AIzaSyB5ukZgNnlKRZDvfM6LV2y6l9HikfZQCb8';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const MainMenu = ({navigation, route}) => {
  const map = useRef(null);
  const ref = useRef(null);
  const mapDirection = useRef(null);

  const [longitude, setLongitude] = React.useState(0);
  const [latitude, setlatitude] = React.useState(0);
  const [Destination, setDestination] = React.useState(0);

  const getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        setLongitude(location.longitude);
        setlatitude(location.latitude);
        // console.warn(longitude);
        // console.warn(latitude);
      })
      .catch(error => {
        const {code, message} = error;
        // console.warn(code, message);
      });
  };

  React.useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {});
    if (route.params.lat > 0) {
      setDestination(1);
    }

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      {latitude !== 0 && longitude !== 0 ? (
        <MapView
          ref={map}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {route.params.Destination !== 0 ? (
            <MapViewDirections
              ref={mapDirection}
              origin={{
                latitude: latitude,
                longitude: longitude,
              }}
              destination={{
                latitude: route.params.lat,
                longitude: route.params.lng,
              }}
              // onError={() => locationNotAvailable()}
              onError={error => console.warn(error)}
              mode={'DRIVING'}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              optimizeWaypoints={true}
              strokeColor="#FF9A00"
              onReady={result => {
                map.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 80,
                    bottom: 20,
                    left: 40,
                    top: 40,
                  },
                });
              }}
            />
          ) : null}

          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            title={'Origin'}
            identifier="Destination"
          />

          {route.params.Destination !== 0 ? (
            <Marker
              coordinate={{
                latitude: route.params.lat,
                longitude: route.params.lng,
              }}
              title={'Destination'}
              identifier="Destination"
            />
          ) : null}
        </MapView>
      ) : null}

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
  AutoComcc: {
    width: '90%',
    height: h('30%'),
    backgroundColor: 'red',
    alignSelf: 'center',
    marginBottom: h('1%'),
    position: 'absolute',
    top: 0,
    zIndex: 1000,
  },
});
