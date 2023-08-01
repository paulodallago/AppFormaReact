import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {vh, vw, bgColor, lgBlue, dkBlue, theme} from './Constants';
import Main from "./forms/Main";
import Form from "./forms/Form";
import List from "./forms/List";
import Agenda from "./forms/Agenda";
import Checklist from "./forms/Checklist";
import {EventRegister} from "react-native-event-listeners";
import Context from "./context";

const Stack = createNativeStackNavigator();

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
          <Stack.Screen name="Form" component={Form} options={{
            headerStyle: {
              backgroundColor: dkBlue,
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            title: 'Formulário' 
          }}/>
          <Stack.Screen name="List" component={List} options={{
            headerStyle: {
              backgroundColor: dkBlue,
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            title: 'Lista' 
          }}/>
          <Stack.Screen name="Checklist" component={Checklist} options={{
            headerStyle: {
              backgroundColor: dkBlue,
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            title: 'Checklist' 
          }}/>
          <Stack.Screen name="Agenda" component={Agenda} options={{
            headerStyle: {
              backgroundColor: dkBlue,
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            title: 'Agenda' 
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default App;