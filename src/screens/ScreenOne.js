import React,{useEffect,useState} from 'react'
import {View,Text,Dimensions,Vibration} from 'react-native'

import KeyEvent from 'react-native-keyevent'

import { useFocusEffect } from '@react-navigation/native';

const ScreenOne = (props) => {

    const {navigation,route} = props

    const ONE_SECOND_IN_MS = 1000;

    const PATTERN = [
        1 * ONE_SECOND_IN_MS,
        2 * ONE_SECOND_IN_MS,
        3 * ONE_SECOND_IN_MS
    ];

    useFocusEffect(
        React.useCallback(() => {
            KeyEvent.onKeyUpListener((keyEvent) => {
                if ((keyEvent.keyCode === 24) ) { // KEY UP
                    console.log("GO screen two");
                    navigation.navigate("ScreenTwo")
                    if (stat === 'Portrait') {
                        Vibration.vibrate(5000)
                    }
                }
                if ((keyEvent.keyCode === 25) ) { // KEY DOWN
                
                    if (stat === 'Paysage') {
                    Vibration.vibrate(3000)
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

    const [stat,setstat] = useState('Portrait')
    const isLandscape = () => {
        const dim = Dimensions.get('screen');
        return dim.width >= dim.height;
    };

    useEffect(() => {

        setstat(isPortrait() ? 'Portrait' : 'Paysage')

        Dimensions.addEventListener('change', () => {
        setstat(isPortrait() ? 'Portrait' : 'Paysage')

        });
        
    }, [])
      

    return (
        <View style={{flex:1,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white',fontSize:48}}>Screen One</Text>
            <Text style={{color:'white',fontSize:48}}>{stat}</Text>
        </View>
    )
}

export default ScreenOne