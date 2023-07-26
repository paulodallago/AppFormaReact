import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from '../components/Modal';
import ListButton from '../components/ListButton';
import { lgBlue, dkBlue } from '../components/Constants';

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
  }
];

const emptyObj = {
  "nome": "",
  "cpf": "",
  "tipo": ""
}

const styles = StyleSheet.create({
  rndButton: {
    alignSelf: 'end',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10vh',
    height: '10vh',
    backgroundColor: lgBlue,
    borderRadius: '5vh',
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

const List = ({ navigation }) => {
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
    <View style={{ flex: 1 }}>
      <View style={{flex: 1, marginTop: 20}}>
        {items.map((item, index) => (
          <ListButton key={index} item={item} onPress={() => showItem(item)} />
        ))}
      </View>
      <View>
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