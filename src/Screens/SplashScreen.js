import {StyleSheet, Text, View, Animated, Image} from 'react-native';
import React from 'react';

import {w, h} from 'react-native-responsiveness';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
  const [progress, setProgress] = React.useState(0);
  let anim = new Animated.Value(0);

  React.useEffect(() => {
    onAnimate();
  }, []);

  const onAnimate = () => {
    anim.addListener(({value}) => {
      setProgress(parseInt(value));
    });
    Animated.timing(anim, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false, // Add This line
    }).start(() => {
      navigation.navigate('Signup');
    });
  };

  return (
    <View style={styles.MainContainer}>
      <View style={styles.MainLogo}>
        <Image
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          source={require('../../Assets/Mainlogo.png')}
        />
      </View>
      <View style={styles.Space} />
      <View style={styles.progressBarContainer}>
        <LinearGradient
          colors={['#FF9A00', '#FF9A00', '#FF9A00']}
          style={[
            styles.progressBar,
            {width: `${progress}%`, backgroundColor: '#FF9A00'},
          ]}
          start={{x: 0, y: 0}}
          end={{x: 0.6, y: 0.0}}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  MainLogo: {
    width: '50%',
    height: h('30%'),
    // backgroundColor: 'red',
  },
  progressBarContainer: {
    width: w('80%'),
    height: 8,
    borderRadius: 15,
    backgroundColor: '#D8D8D8',
    position: 'relative',
    marginVertical: 10,
  },
  progressBar: {
    height: 8,
    width: '100%',
    borderRadius: 15,
  },
  Space: {
    width: '100%',
    height: h('50%'),
  },
});
