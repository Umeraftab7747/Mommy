import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {w, h} from 'react-native-responsiveness';
import Icon from 'react-native-vector-icons/Ionicons';

const RidersItem = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.leftContainer}>
        <View style={styles.leftbox}>
          <Icon name="person-sharp" size={40} color="#fff" />
        </View>
        <Text style={styles.NameText}>UMER AFTAB</Text>
        <View style={styles.mainReview}>
          <Text style={styles.NameText2}>5</Text>
          <Icon name="star-sharp" size={25} color="#FF9A00" />
        </View>
      </View>
      <View style={styles.RightContainer}>
        <Text style={styles.NameText3}>1220 E North St</Text>
        <Text style={styles.NameText3}>3995 Valley View Ln</Text>
        <Text style={styles.NameText4}>35$</Text>
        <View style={styles.mainReview2}>
          <Icon name="ellipse-sharp" size={15} color="green" />
          <Text style={styles.NameText6}>Online</Text>
        </View>
      </View>
    </View>
  );
};

export default RidersItem;

const styles = StyleSheet.create({
  MainContainer: {
    width: '90%',
    height: h('20%'),
    backgroundColor: 'white',
    borderRadius: h('2%'),
    marginTop: h('1%'),
    flexDirection: 'row',
    borderColor: '#FF9A00',
    borderWidth: h('0.2%'),
  },
  leftContainer: {
    width: '35%',
    height: '100%',
    // backgroundColor: 'green',
    overflow: 'hidden',
    alignItems: 'center',
  },
  RightContainer: {
    width: '70%',
    height: '100%',
    // backgroundColor: 'purple',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  leftbox: {
    width: 80,
    height: 80,
    backgroundColor: '#FF9A00',
    borderRadius: h('100%'),
    marginTop: h('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  NameText: {
    color: '#0008',
    fontSize: h('1.9%'),
    marginTop: h('1%'),
  },
  NameText2: {
    color: '#0008',
    fontSize: h('2%'),
    fontWeight: 'bold',
    marginRight: h('1%'),
  },
  NameText6: {
    color: 'green',
    fontSize: h('2%'),
  },
  NameText3: {
    color: '#000',
    fontSize: h('2.2%'),
  },
  NameText4: {
    color: '#000',
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
  mainReview: {
    width: '100%',
    height: '30%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: h('2%'),
  },
  mainReview2: {
    width: '50%',
    height: '30%',
    // backgroundColor: 'red',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: h('2%'),
  },
});
