import {Dimensions, StyleSheet} from 'react-native';

const vh = (Dimensions.get('window').height)/100;
const vw = (Dimensions.get('window').width)/100;
const bgColor = 'white';
const lgBlue = '#28b2b4';
const dkBlue = '#07374b';

const theme = {
    light: {
        theme: 'light',
        bg: 'white',
        btn: 'white',
        btnBorder: lgBlue,
        txt: 'black',
        txt2: 'white',
        header: lgBlue,
        textBorder: '#aaaaaa'
    },
    dark: {
        theme: 'dark',
        bg: '#18181a',
        btn: dkBlue,
        btnBorder: '#333333',
        txt: 'white',
        txt2: 'black',
        header: dkBlue,
        textBorder: '#333333'
    }
}

export {vh, vw, bgColor, lgBlue, dkBlue, theme}; 