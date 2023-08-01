import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import CheckBox from 'expo-checkbox';
import {vh, vw, bgColor, lgBlue, dkBlue, theme} from '../Constants';
import Context from '../context';
import MyText from './MyText';

const Checkbox = (props) =>  {
    const theme = useContext(Context);
    const styles = StyleSheet.create({
        check: {
            width: 40,
            height: 40,
            marginStart: 5,
            borderRadius: 20,
        },
        container: { 
            flexDirection: 'row',
            marginBottom: 10,
        },
        text: {
            fontSize: 20,
            verticalAlign: 'middle',
            marginBottom: 3,
            borderBottomColor: '#aaaaaa',
            borderBottomWidth: 1
        }
    })
    return (
        <View style={styles.container}>
            <MyText text={props.text} style={styles.text}/>
            <CheckBox value={props.checked[props.index]} onValueChange={()=>{
                const newCheckedBox = [...props.checked];
                newCheckedBox[props.index] = !newCheckedBox[props.index];
                props.setChecked(newCheckedBox);
            }} style={styles.check}></CheckBox>
        </View>
    );
}

export default Checkbox;