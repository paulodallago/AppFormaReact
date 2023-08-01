import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Checkbox from '../components/Checkbox';
import {ScrollView} from 'react-native-gesture-handler';
import {vh, vw, bgColor, lgBlue, dkBlue, theme} from '../Constants';
import Context from '../context';

const data = {
    "temCN": false,
    "temCC": true
}

const Checklist = () =>  {
    const theme = useContext(Context);
    const styles = StyleSheet.create({
        main: {
            width: 70*vw,
            alignSelf: 'center',
            alignItems: 'flex-end',
            marginTop: 30,
            backgroundColor: theme.bg
        },
    })
    const [checkedBox, setCheckedBox] = useState([data.temCN, data.temCC]);

    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.main}>
                <Checkbox index={0} text={'Certidão de nascimento'} checked={checkedBox} setChecked={setCheckedBox}/>
                <Checkbox index={1} text={'Certidão de casamento'} checked={checkedBox} setChecked={setCheckedBox}/>
            </View>
        </ScrollView>
    );
}

export default Checklist;