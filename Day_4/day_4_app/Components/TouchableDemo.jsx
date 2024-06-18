import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Alert, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, TouchableNativeFeedback, Pressable } from 'react-native';
import birdImage from './../assets/logo.jpg';

export default function Demo() {
    const showAlert = (type) => {
        Alert.alert(`${type} pressed`);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => showAlert('TouchableOpacity')}>
                <Image source={birdImage} style={styles.image} />
            </TouchableOpacity>
            <TouchableHighlight onPress={() => showAlert('TouchableHighlight')} underlayColor="#DDDDDD">
                <Image source={birdImage} style={styles.image} />
            </TouchableHighlight>
            <TouchableWithoutFeedback onPress={() => showAlert('TouchableWithoutFeedback')}>
                <Image source={birdImage} style={styles.image} />
            </TouchableWithoutFeedback>
            <TouchableNativeFeedback onPress={() => showAlert('TouchableNativeFeedback')}>
                <View style={styles.touchableNativeFeedback}>
                    <Image source={birdImage} style={styles.image} />
                </View>
            </TouchableNativeFeedback>
            <Pressable onPress={() => showAlert('Pressable')}>
                <Image source={birdImage} style={styles.image} />
            </Pressable>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    touchableNativeFeedback: {
        borderRadius: 5,
        overflow: 'hidden',
    },
});

