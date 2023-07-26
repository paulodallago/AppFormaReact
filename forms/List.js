import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { vh, vw, bgColor } from '../components/Constants';

const styles = StyleSheet.create({
  main: {
    width: vw * 80,
    alignSelf: 'center',
    flex: 1,
    marginTop: 5 * vh,
  },
});

const List = ({ navigation }) => {
  const [piada, setPiada] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((response) => response.json())
      .then((json) => {
        const joke = {
          setup: json.setup,
          punchline: json.punchline,
        };
        setPiada(joke);
        setLoading(false);
      })
      .catch(() => {
        Alert.alert('Error fetching joke');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: bgColor }}>
      <View style={styles.main}>
        {piada ? (
          <>
            <Text>{piada.setup}</Text>
            <Text>{piada.punchline}</Text>
          </>
        ) : (
          <Text>No joke available</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default List;
