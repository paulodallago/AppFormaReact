import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {vh, vw, bgColor, lgBlue, dkBlue, theme} from '../Constants';
import MyText from './MyText';
import Context from '../context'; 

const MainButton = props => {
  const theme = useContext(Context);
  const styles = StyleSheet.create({
    boxBtnMain: {
      marginBottom: vh*1,
      width: vw*80,
      marginHorizontal: 'auto',
      alignSelf: 'center',
    },
    btnMain: {
      alignItems: 'center',
      borderWidth: 2,
      borderColor: theme.btnBorder,
      borderRadius: vw*4,
      paddingVertical: vh*2,  
      elevation: 5,
      backgroundColor: theme.btn  
    },
    btnMainText: {
      fontSize: 20,
    },
  })

  return (
    <View style={styles.boxBtnMain}>
      <TouchableOpacity style={styles.btnMain} onPress={props.btnMainPress}><MyText style={styles.btnMainText} text={props.btnNome}/></TouchableOpacity>
    </View>
  );
}

export default MainButton;