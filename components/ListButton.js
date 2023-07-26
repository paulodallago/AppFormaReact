import React, {useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {vh, vw, bgColor, lgBlue, dkBlue} from './Constants';
import MyText from './MyText';
import Context from '../context'; 

const ListButton = ({ item, onPress }) => {
    const theme = useContext(Context);
    const styles = StyleSheet.create({
        boxBtn: {
            marginBottom: vh*1,
            width: vw*80,
            marginHorizontal: 'auto',
            alignSelf: 'center',
          },
          btn: {
            alignItems: 'center',
            borderWidth: 2,
            borderColor: theme.btnBorder,
            borderRadius: vw*4,
            paddingVertical: vh*2,  
            elevation: 5,
            backgroundColor: theme.btn  
          },
          btnText: {
            fontSize: 20,
          },
    })

    return (
        <View style={styles.boxBtn}>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <MyText style={styles.btnText} text={item.nome}/>
            </TouchableOpacity>
        </View>
    );
};

export default ListButton