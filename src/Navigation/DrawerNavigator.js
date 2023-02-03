import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import DrawerScreen from '../Screens/DrawerScreen';
import MainMenu from '../Screens/MainMenu';
import Riders from '../Screens/Riders';
import ChatHead from '../Screens/ChatHead';
import Setting from '../Screens/Setting';

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerScreen {...props} />}>
      <Drawer.Screen name="MainMenu" component={MainMenu} />
      <Drawer.Screen name="Riders" component={Riders} />
      <Drawer.Screen name="ChatHead" component={ChatHead} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
