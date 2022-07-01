import React,{useEffect,useState} from 'react'
import {View,Text,Dimensions,Vibration} from 'react-native'

import KeyEvent from 'react-native-keyevent'

import { useFocusEffect } from '@react-navigation/native';

const ScreenTwo = ({navigation,route}) => {

    const [stat,setstat] = useState('Portrait')

    
    useFocusEffect(
        React.useCallback(() => {
          KeyEvent.onKeyUpListener((keyEvent) => {
            if ((keyEvent.keyCode === 25) ) { // KEY DOWN
              console.log("GO screen one");
              navigation.navigate("ScreenOne")
              if (stat === 'Paysage') {
                Vibration.vibrate(3000)
              }
              
            }
            if ((keyEvent.keyCode === 24) ) { // KEY UP
                if (stat === 'Portrait') {
                    Vibration.vibrate(5000)
                  }
            
            }
          });
          () => KeyEvent.removeKeyUpListener()
        })
      );

      const isPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
      };
    
      const isLandscape = () => {
        const dim = Dimensions.get('screen');
        return dim.width >= dim.height;
      };
    
      useEffect(() => {
    
        Dimensions.addEventListener('change', () => {
          setstat(isPortrait() ? 'Portrait' : 'Paysage')
    
        });
        
      }, [])
    


    return (
        <View style={{flex:1,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white',fontSize:48}}>Screen Two</Text>
            <Text style={{color:'white',fontSize:48}}>{stat}</Text>
        </View>
    )
}

export default ScreenTwo