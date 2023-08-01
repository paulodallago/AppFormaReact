import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {vh, vw, bgColor, lgBlue, dkBlue, theme} from '../Constants';
import Context from '../context';
import {Agenda, LocaleConfig} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
    {
        "data": "2023-07-31",
        "desc": "hello world"
    },
    {
        "data": "2023-08-01",
        "desc": "hello world"
    },
    {
        "data": "2023-08-01",
        "desc": "asdsd"
    },
]

LocaleConfig.locales['pt'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: "Hoje"
  };

LocaleConfig.defaultLocale = 'pt';
const AgendaForm = () =>  {
    const theme = useContext(Context);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: theme.bg
        },
        item: {
            backgroundColor: 'white',
            flex: 1,
            borderRadius: 5,
            padding: 10,
            marginRight: 10,
            marginTop: 17,
        },
        itemText: {
            color: '#888',
            fontSize: 16,
        }
    })
    //eu não faço ideia de como isso funciona. glória ao chatgpt
    const items = data.reduce((result, item) => {
        const { data, desc } = item;
        if (!result[data]) {
            result[data] = []; 
        }
        result[data].push({ name: desc }); 
        return result;
    }, {});
    const currentDate = new Date();
    const date = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
    return (
        <SafeAreaView style={styles.container}>
            <Agenda
                selected={date}
                items={items}
                renderItem={(item) => (
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

export default AgendaForm;