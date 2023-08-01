import React, {useContext} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {vh, vw, bgColor, constStyles} from '../Constants';
import MyText from './MyText';
import Context from '../context'; 

const TextField = props =>  {
  const theme = useContext(Context);
  const styles = StyleSheet.create({
    textInput: {
      borderWidth: 1,
      borderRadius: vh*2,
      borderColor: theme.textBorder,
      height: vh*5,
      marginBottom: 10,
      paddingHorizontal: 10,
      elevation: 5,
      backgroundColor: theme.bg,  
    },
    label: {
      marginStart: vw*3,
      fontSize: 20,
    }
  })
  return (
    <View>
      <MyText style={styles.label} text={props.text}/>
      <TextInput style={styles.textInput} defaultValue={props.defaultValue} onChangeText={props.onChangeText} keyboardType={props.keyboard} editable={props.isEditable}></TextInput>
    </View>
  );
}

export default TextField;