
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './User';
import Details from './Details';

const TAB = createNativeStackNavigator();

export default function App(){

  return (
    <NavigationContainer>
      <TAB.Navigator initialRouteName='Home'>
        <TAB.Screen name='Home' component={Home} />
        <TAB.Screen name='Details' component={Details} />
      </TAB.Navigator>
    </NavigationContainer>
  );
}