import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const TextInputC = () => {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [numeric, setNumeric] = useState('');
    const [multiline, setMultiline] = useState('');

    const handleSubmit = () => {
        console.log("Text:", text);
        console.log("Password:", password);
        console.log("Numeric:", numeric);
        console.log("Multiline:", multiline);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Default TextInput:</Text>
            <TextInput
                style={styles.input}
                placeholder="Type here"
                value={text}
                onChangeText={setText}
            />
            <Text style={styles.label}>Password TextInput:</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Text style={styles.label}>Numeric TextInput:</Text>
            <TextInput
                style={styles.input}
                placeholder="Numeric input"
                value={numeric}
                onChangeText={setNumeric}
                keyboardType="numeric"
            />
            <Text style={styles.label}>Multiline TextInput:</Text>
            <TextInput
                style={[styles.input, styles.multiline]}
                placeholder="Multiline input"
                value={multiline}
                onChangeText={setMultiline}
                multiline={true}
                numberOfLines={4}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
    },
    input: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    multiline: {
        height: 100,
    },
});

export default TextInputC;
