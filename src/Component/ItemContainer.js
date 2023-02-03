import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import Icon from 'react-native-vector-icons/Ionicons';

const ItemContainer = ({icon}) => {
  return (
    <View style={styles.ItemContainerMain}>
      <View style={styles.MainCheader}>
        <Icon name={icon} size={24} color="#0003" />
      </View>
      <View style={styles.RighText}>
        <Text style={styles.txtcolor}>Lorem Ipsum</Text>
      </View>
    </View>
  );
};

export default ItemContainer;

const styles = StyleSheet.create({
  ItemContainerMain: {
    width: '100%',
    height: h('10%'),
    // backgroundColor: 'red',
    borderColor: '#0003',
    borderWidth: h('0.1%'),
    flexDirection: 'row',
  },
  MainCheader: {
    // backgroundColor: 'gold',
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RighText: {
    // backgroundColor: 'red',
    width: '80%',
    height: '100%',
    justifyContent: 'center',
  },
  txtcolor: {
    color: '#000',
    fontSize: h('2%'),
  },
});
