import React, {useContext} from 'react';
import {Text} from 'react-native';
import { Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import {useFonts} from 'expo-font';
import Header from './Header';
import Context from '../context';

const MyText2 = (props) => {
  const theme = useContext(Context);
  let [fontsLoaded] = useFonts({
    montserrat: Montserrat_500Medium
  });
  if (!fontsLoaded) {
    return <Header/>;
  }
  return <Text style={[props.style, {fontFamily: "montserrat", color: theme.txt2}]}>{props.text}</Text>;
};

export default MyText2;