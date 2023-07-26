import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {vh, vw, bgColor, lgBlue, dkBlue} from './Constants';
import MyText from './MyText';

const styles = StyleSheet.create({
  boxBtn: {
    marginBottom: vh*1,
    width: vw*40,
    marginHorizontal: 'auto',
    alignSelf: 'center',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: lgBlue,
    borderRadius: vw*4,
    paddingVertical: vh*1,
    elevation: 5,
  },
  btnText: {
    fontSize: 20,
  }
})

const SimpleButton = props =>  {
  return (
    <View style={styles.boxBtn}>
      <TouchableOpacity style={styles.btn} onPress={props.btnSimplePress}><MyText style={styles.btnText} text={props.btnNome}/></TouchableOpacity>
    </View>
  );
}

export default SimpleButton;