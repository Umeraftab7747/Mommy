import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import * as Animatable from 'react-native-animatable';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

// components

import AppButton from '../Component/AppButton';
import Icon from 'react-native-vector-icons/Ionicons';

const Location = () => {
  const [Cods, setCods] = React.useState([]);
  const [Cods2, setCods2] = React.useState([]);
  return (
    <View style={styles.MainContainer}>
      <View style={styles.MiddleContainer}>
        <Text style={styles.FontWork}>Set Location</Text>
      </View>
      <View style={styles.AutoComcc}>
        <GooglePlacesAutocomplete
          placeholder="Enter Starting Location"
          fetchDetails={true}
          GooglePlacesDetailsQuery={{fields: 'geometry'}}
          onPress={(data, details = null) => {
            const Locationss = JSON.stringify(details.geometry.location);
            setCods(Locationss);
            console.warn(Cods);
          }}
          styles={{
            textInputContainer: {
              width: '100%',
              alignSelf: 'center',
              // borderWidth: h('0.2%'),
              backgroundColor: 'white',

              // borderColor: Colors.Primary,
            },
            textInput: {
              height: '100%',
              color: '#5d5d5d',
              fontSize: 16,
              width: '100%',
              alignSelf: 'center',
            },

            listView: {
              width: '100%',
              alignSelf: 'center',
              borderColor: '#FF9A00',
            },
          }}
          debounce={100}
          // currentLocation
          // currentLocationLabel={'GET NOW'}
          query={{
            key: 'AIzaSyD0Pd70F1RYfHsMWojsqozPRqq8q-_yswo',
            language: 'en',
          }}
        />
      </View>
      <View style={styles.AutoComcc}>
        <GooglePlacesAutocomplete
          placeholder="Enter Final Destination"
          fetchDetails={true}
          GooglePlacesDetailsQuery={{fields: 'geometry'}}
          onPress={(data, details = null) => {
            const Locationss = JSON.stringify(details.geometry.location);
            setCods2(Locationss);
            console.warn(Cods2);
          }}
          styles={{
            textInputContainer: {
              width: '100%',
              alignSelf: 'center',
              // borderWidth: h('0.2%'),
              backgroundColor: 'white',

              // borderColor: Colors.Primary,
            },
            textInput: {
              height: '100%',
              color: '#5d5d5d',
              fontSize: 16,
              width: '100%',
              alignSelf: 'center',
            },

            listView: {
              width: '100%',
              alignSelf: 'center',
              borderColor: '#FF9A00',
            },
          }}
          debounce={100}
          // currentLocation
          // currentLocationLabel={'GET NOW'}
          query={{
            key: 'AIzaSyD0Pd70F1RYfHsMWojsqozPRqq8q-_yswo',
            language: 'en',
          }}
        />
      </View>

      <Animatable.View
        animation="fadeInUp"
        delay={800}
        style={{alignSelf: 'center'}}>
        <AppButton
          text={'Submit'}
          onPress={() => {
            alert('DONE');
            navigation.goBack();
          }}
        />
      </Animatable.View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  MainContainer: {flex: 1},
  MiddleContainer: {
    width: '100%',
    height: h('10%'),
    backgroundColor: '#FF9A00',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  FontWork: {
    color: 'white',
    fontSize: h('2.4%'),
    fontWeight: 'bold',
  },
  AutoComcc: {
    width: '90%',
    height: h('30%'),
    // backgroundColor: 'red',
    alignSelf: 'center',
    marginBottom: h('1%'),
  },
});
