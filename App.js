import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {vh, vw, bgColor, lgBlue, dkBlue, theme} from './components/Constants';
import Main from "./forms/Main";
import Form from "./forms/Form";
import List from "./forms/List";
import {EventRegister} from "react-native-event-listeners";
import Context from "./context";

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  header: {
    headerStyle: {
      backgroundColor: dkBlue,
    },
    headerTintColor: 'white',
    headerTitleAlign: 'center', 
    }
});

const App = () => {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    )
  });
  return (
    <Context.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer>
        <Stack.Navigator initialRoutenName="Main">
          <Stack.Screen name="Main" component={Main} options={{headerShown: false}}/>
          <Stack.Screen name="Form" component={Form} options={styles.header}/>
          <Stack.Screen name="List" component={List} options={styles.header}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default App;