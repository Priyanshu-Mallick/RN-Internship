// components/CustomTextField.js
import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTextField = ({
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    onBlur,
    isValid,
    showIcon,
    iconName,
    onIconPress,
}) => {
    return (
        <View style={[styles.inputContainer, isValid === false && styles.invalidInput, isValid === true && styles.validInput]}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onBlur={onBlur}
            />
            {showIcon && (
                <TouchableOpacity onPress={onIconPress}>
                    <Ionicons name={iconName} size={24} color={isValid !== null ? (isValid ? "#34A853" : "#EB4335") : "#707B81"} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F9',
        borderColor: '#ddd',
        borderRadius: 10,
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
    },
    invalidInput: {
        borderWidth: 1,
        borderColor: '#EB4335',
    },
    validInput: {
        borderWidth: 1,
        borderColor: '#34A853',
    },
});

export default CustomTextField;
