import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import MainButton from '../components/MainButton';
import {ScrollView, Switch} from 'react-native-gesture-handler';
import {vh, vw, bgColor, lgBlue, dkBlue, theme} from '../Constants';
import Context from '../context'; 
import {EventRegister} from "react-native-event-listeners";

const Main = ({navigation}) => {
    const theme = useContext(Context);
    const [mode, setMode] = useState(false);
    const styles = StyleSheet.create({
        scroll: {
            backgroundColor: theme.bg,
            flex: 1,
        },
        main: {
            textAlign: 'center', 
            flex: 1,
        },
    });
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.main}>
                <Header/>
                <MainButton btnNome='Formulário' btnMainPress={() => navigation.navigate('Form')}></MainButton>
                <MainButton btnNome='Lista' btnMainPress={() => navigation.navigate('List')}></MainButton>
                <MainButton btnNome='Checklist' btnMainPress={() => navigation.navigate('Checklist')}></MainButton>
                <MainButton btnNome='Agenda' btnMainPress={() => navigation.navigate('Agenda')}></MainButton>
                <MainButton btnNome='Sair'></MainButton>
            </View>
            <View style={{alignItems: 'center', marginTop: 5*vh}}>
                <Switch
                    value={mode} onValueChange={(value) => {
                        setMode(value);
                        EventRegister.emit('changeTheme', value);
                    }}
                ></Switch>
            </View>
        </ScrollView>
    )
}

export default Main;