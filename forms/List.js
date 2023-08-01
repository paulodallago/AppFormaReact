import React, { useState, useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from '../components/Modal';
import ListButton from '../components/ListButton';
import {vh, vw, bgColor, lgBlue, dkBlue, theme} from '../Constants';
import Context from '../context'; 

const items = [
  {
    "nome": "Jorge",
    "cpf": '12312312313',
    "email": "jorge@gmail.com"
  },
  {
    "nome": "Pedro",
    "cpf": '66666666666',
    "email": "pedro@gmail.com"
  },
  {
    "nome": "Maria",
    "cpf": '12312312313',
    "email": "jorge@gmail.com"
  },
  {
    "nome": "Gabriel",
    "cpf": '66666666666',
    "email": "pedro@gmail.com"
  },
  {
    "nome": "Fernando",
    "cpf": '12312312313',
    "email": "jorge@gmail.com"
  },
  {
    "nome": "Felipe",
    "cpf": '66666666666',
    "email": "pedro@gmail.com"
  },
];

const emptyObj = {
  "nome": "",
  "cpf": "",
  "tipo": ""
}

const List = () => {
  const theme = useContext(Context);
  const styles = StyleSheet.create({
    rndButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 10*vh,
      height: 10*vh,
      backgroundColor: lgBlue,
      borderRadius: 5*vh,
      marginEnd: 15,
      marginBottom: 15,
      elevation: 5
    },
    btnText: {
      fontSize: 40,
      marginBottom: 8,
      color: 'white'
    }
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(emptyObj);

  const showItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const showEmptyObj = () => {
    setSelectedItem(emptyObj);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg}}>
      <View style={{flex: 1, marginTop: 20}}>
        {items.map((item, index) => (
          <ListButton key={index} item={item} onPress={() => showItem(item)} />
        ))}
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity style={styles.rndButton} onPress={showEmptyObj}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
      <Modal
        show={modalVisible}
        close={() => setModalVisible(false)}
        data={selectedItem}
      />
    </View>
  );
};

export default List;