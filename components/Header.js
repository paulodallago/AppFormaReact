import React, {useContext, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {vh, vw} from '../Constants';
import Context from '../context'; 

const Header = () => {
  const theme = useContext(Context);
  const styles = StyleSheet.create({
    header: {
      alignSelf: 'center',
      marginTop: vh*8,
      marginBottom: vh*8,
    },
  })
  var logo = theme.theme=='light' ? require('../assets/img/logo-l.png') : require('../assets/img/logo-d.png');
  return (
    <View style={styles.header}>
      <Image source={logo} style={{height: vh*15, width: vw*100}} resizeMode='contain'/>
    </View>
  )
}

export default Header;