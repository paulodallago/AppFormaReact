import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import FormModal from '../forms/FormModal';

const { height } = Dimensions.get('window');

const Modal = ({ show, close, data }) => {
    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(height),
        modal: new Animated.Value(height)
    });

    const openModal = () => {
        Animated.sequence([
        Animated.timing(state.container, { toValue: 0, duration: 100 }),
        Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
        Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
        ]).start();
    };

    const closeModal = () => {
        Animated.sequence([
        Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
        Animated.timing(state.opacity, { toValue: 0, duration: 300 }),
        Animated.timing(state.container, { toValue: height, duration: 100 })
        ]).start(() => {
            close();
        });
    };

    useEffect(() => {
        if (show) {
            openModal();
        } else {
            closeModal();
        }
    }, [show]);

     return (
        <Animated.View
        style={[styles.container, {
            opacity: state.opacity,
            transform: [
                { translateY: state.container }
            ]
        }]}
        >
            <Animated.View
                style={[styles.modal, {
                transform: [
                    { translateY: state.modal }
                ]
                }]}
            >
                <View style={styles.indicator} />

                <FormModal data={data} closeModal={closeModal}/>

            </Animated.View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute'
    },
    modal: {
        bottom: 0,
        position: 'absolute',
        height: '80%',
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 25,
        paddingRight: 25
    },
    indicator: {
        width: 50,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 5
    }
});

export default Modal;
