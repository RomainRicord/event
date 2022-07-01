import React,{useEffect,useState} from 'react'
import {View,Dimensions} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import KeyEvent from 'react-native-keyevent'
import ScreenOne from './src/screens/ScreenOne'
import ScreenTwo from './src/screens/ScreenTwo'

const Stack = createNativeStackNavigator();

const App = () => {

  

  useEffect(() => {



    return () => {
      // cleanup
      console.log("cleanup");
      KeyEvent.removeKeyUpListener();
    }
    
  }, [])

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={ {headerShown:false} }  >
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App