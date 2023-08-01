import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {vh, vw, bgColor, lgBlue, dkBlue, theme} from '../Constants';
import MyText2 from './MyText2';
import Context from '../context'; 

const SimpleButton = props =>  {
  const theme = useContext(Context);
  const styles = StyleSheet.create({
    boxBtn: {
      marginBottom: vh*1,
      width: vw*40,
      marginHorizontal: 'auto',
      alignSelf: 'center',
    },
    btn: {
      alignItems: 'center',
      backgroundColor: theme.sBtn,
      borderRadius: vw*4,
      paddingVertical: vh*1,
      elevation: 5,
    },
    btnText: {
      fontSize: 20,
    }
  })
  return (
    <View style={styles.boxBtn}>
      <TouchableOpacity style={styles.btn} onPress={props.btnSimplePress}><MyText2 style={styles.btnText} text={props.btnNome}/></TouchableOpacity>
    </View>
  );
}

export default SimpleButton;