import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({text, onPress}) => {
  return (
    <View style={styles.MainHeader}>
      <TouchableOpacity onPress={onPress} style={styles.leftContainer}>
        <Icon name="list-sharp" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={styles.MiddleContainer}>
        <Text style={styles.ColorFont}>{text}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  MainHeader: {
    width: '100%',
    height: h('8%'),
    backgroundColor: '#FF9A00',
    flexDirection: 'row',
    borderBottomColor: '#fff',
    borderBottomWidth: h('0.2%'),
  },
  leftContainer: {
    width: '20%',
    height: '100%',
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MiddleContainer: {
    width: '60%',
    height: '100%',
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ColorFont: {
    color: '#fff',
    fontSize: h('2.5%'),
  },
});
