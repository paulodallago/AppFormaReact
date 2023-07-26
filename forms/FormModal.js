import React, {useEffect, useContext} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import TextField from '../components/TextField';
import { ScrollView } from 'react-native-gesture-handler';
import {vh, vw, bgColor, dkBlue, lgBlue} from '../components/Constants';
import SimpleButton from '../components/SimpleButton';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Context from '../context'; 

const onSubmit = (data) => Alert.alert(data.nome + " | " + data.cpf);

const fieldValidationSchema = yup.object().shape({
  nome: yup
    .string()
    .required('O nome não pode ser vazio')
})

const FormModal = ({ navigation, data, closeModal }) => {
    const { register, setValue, handleSubmit, errors, reset } = useForm({
        validationSchema: fieldValidationSchema,
        defaultValues: data,
    });

    const theme = useContext(Context);
    const styles = StyleSheet.create({
        scroll: {
        backgroundColor: theme.bg
        },
        main: {
        width: vw*80,
        alignSelf: 'center',
        flex: 1,
        marginTop: 5*vh,
        },
    })

    useEffect(() => {
        register('nome')
    }, [register]);

    const onSubmit = (data) => {
        Alert.alert(`Nome: ${data.nome}\nCPF: ${data.cpf}`);
        closeModal();
    };

    const handleModalClose = () => {
        reset();
        closeModal();
    };

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.main}>
                <TextField text="Nome" defaultValue={data.nome} onChangeText={text => setValue('nome', text)} keyboard="default"/>
                <TextField text="CPF" defaultValue={data.cpf} onChangeText={text => setValue('cpf', text)} keyboard="numeric"/>
                <TextField text="Email" defaultValue={data.email} onChangeText={text => setValue('email', text)} keyboard="email-address"/>
                <SimpleButton btnNome="Enviar" btnSimplePress={handleSubmit(onSubmit)}/>
                <SimpleButton btnNome="Fechar" btnSimplePress={handleModalClose}/>
            </View>
        </ScrollView>
     );
}

export default FormModal;