import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import StackNavigation from './src/Navigation/StackNavigation';

const App = () => {
  return (
    <>
      <SafeAreaView />
      <StatusBar />
      <StackNavigation />
    </>
  );
};

export default App;
