import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {w, h} from 'react-native-responsiveness';

const Activebar = ({}) => {
  const [active, setactive] = useState(false);
  return (
    <View style={styles.Maincontainer}>
      <TouchableOpacity
        onPress={() => {
          setactive(!active);
        }}
        style={active ? styles.RightContainer : styles.leftContainer}>
        <Text style={active ? styles.fColor : styles.nfColor}>Offline</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setactive(!active);
        }}
        style={active ? styles.leftContainer : styles.RightContainer}>
        <Text style={active ? styles.nfColor : styles.fColor}>Online</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Activebar;

const styles = StyleSheet.create({
  Maincontainer: {
    width: '65%',
    height: h('7%'),
    // backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: h('10%'),
    borderColor: '#0003',
    borderWidth: h('0.2%'),
  },
  leftContainer: {
    // backgroundColor: 'green',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightContainer: {
    backgroundColor: '#FF9A00',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('10%'),
  },
  fColor: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: h('2%'),
  },
  nfColor: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: h('2%'),
  },
});
