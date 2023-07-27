import React, {useEffect, useContext, useState} from 'react';
import {Text, View, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import TextField from '../components/TextField';
import { ScrollView } from 'react-native-gesture-handler';
import {vh, vw, bgColor, dkBlue, lgBlue} from '../components/Constants';
import SimpleButton from '../components/SimpleButton';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Context from '../context'; 
import {faPen, faXmark, faFloppyDisk, faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const fieldValidationSchema = yup.object().shape({
  nome: yup
    .string()
    .required('O nome não pode ser vazio')
})

const FormModal = ({ navigation, data, closeModal }) => {
    const {control, register, setValue, handleSubmit, errors, reset} = useForm({
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
            marginTop: 20,
        },
        btn: {
            width: 15*vw,
            height: 15*vw,
            backgroundColor: lgBlue,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            marginHorizontal: 2,
        },
        container: {
            marginTop: 20,
            alignContent: 'center',
            justifyContent: 'center',
            width: "100%",
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 10,
        },
    })

    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        register('nome')
        register('cpf')
        register('email')
    }, [register]);

    const onSubmit = (fdata) => {
        // You can access the form data directly from the formData object
        Alert.alert(JSON.stringify(data));
    };

    const handleModalClose = () => {
        reset();
        setIsEditable(false);
        closeModal();
    };

    const handleEdit = () => {
        setIsEditable(!isEditable);
    }

    const handleDelete = () => {
        handleModalClose();
    }

    const handleCancel = () => {
        setIsEditable(false);
    }

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleEdit} style={styles.btn}>
                    <FontAwesomeIcon icon={faPen} size="40%" style={{color: "#ffffff",}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
                    <FontAwesomeIcon icon={faFloppyDisk} size="40%" style={{color: "#ffffff",}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDelete} style={styles.btn}>
                    <FontAwesomeIcon icon={faTrash} size="40%" style={{color: "#ffffff",}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancel} style={styles.btn}>
                    <FontAwesomeIcon icon={faXmark} size="50%" style={{color: "#ffffff",}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.main}>
                <TextField text="Nome" defaultValue={data.nome} onChangeText={text => setValue('nome', text)} keyboard="default" isEditable={isEditable}/>
                <TextField text="CPF" defaultValue={data.cpf} onChangeText={text => setValue('cpf', text)} keyboard="numeric" isEditable={isEditable}/>
                <TextField text="Email" defaultValue={data.email} onChangeText={text => setValue('email', text)} keyboard="email-address" isEditable={isEditable}/>
                <SimpleButton btnNome="Fechar" btnSimplePress={handleModalClose}/>
            </View>
        </ScrollView>
     );
}

export default FormModal;