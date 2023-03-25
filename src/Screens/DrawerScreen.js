import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import Icon from 'react-native-vector-icons/Ionicons';

const DrawerScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.MainContainer2}>
        <View style={styles.Imgbox}>
          <Icon name="person-sharp" size={70} color="#FF9A00" />
        </View>
      </View>
      {/* Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('MainMenu')}
        style={styles.ItemView}>
        <View style={styles.LeftContainer}>
          <Icon name="map-sharp" size={30} color="#0007" />
        </View>
        <View style={styles.RightContainer}>
          <Text style={styles.txt}>Home</Text>
        </View>
      </TouchableOpacity>
      {/* Button */}
      {/* Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Riders');
        }}
        style={styles.ItemView}>
        <View style={styles.LeftContainer}>
          <Icon name="car-sport-sharp" size={30} color="#0007" />
        </View>
        <View style={styles.RightContainer}>
          <Text style={styles.txt}>Riders</Text>
        </View>
      </TouchableOpacity>
      {/* Button */}
      {/* Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ChatHead');
        }}
        style={styles.ItemView}>
        <View style={styles.LeftContainer}>
          <Icon name="chatbox-sharp" size={30} color="#0007" />
        </View>
        <View style={styles.RightContainer}>
          <Text style={styles.txt}>Chat</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Setting');
        }}
        style={styles.ItemView}>
        <View style={styles.LeftContainer}>
          <Icon name="cog-sharp" size={30} color="#0007" />
        </View>
        <View style={styles.RightContainer}>
          <Text style={styles.txt}>Settings</Text>
        </View>
      </TouchableOpacity>
      {/* Button */}
      {/* Button */}
      <TouchableOpacity
        onPress={() => {
          alert('Still in production');
        }}
        style={styles.ItemView}>
        <View style={styles.LeftContainer}>
          <Icon name="log-out-sharp" size={30} color="#0007" />
        </View>
        <View style={styles.RightContainer}>
          <Text style={styles.txt}>Log out</Text>
        </View>
      </TouchableOpacity>
      {/* Button */}
    </View>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ItemView: {
    height: h('8%'),

    borderBottomWidth: h('0.2%'),
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderColor: '#0003',
  },
  txt: {
    fontSize: h('3%'),
  },
  MainContainer2: {
    width: '100%',
    height: h('25%'),
    backgroundColor: '#FF9A00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Imgbox: {
    width: '45%',
    height: '60%',
    backgroundColor: 'white',
    borderRadius: h('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  LeftContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  RightContainer: {
    width: '70%',
    height: '100%',
    // backgroundColor: 'green',
    justifyContent: 'center',
  },
});
