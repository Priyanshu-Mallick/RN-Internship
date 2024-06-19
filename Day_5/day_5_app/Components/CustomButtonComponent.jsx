import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const VARIANTS = {
    primary: {
        backgroundColor: '#007bff',
        color: '#fff',
    },
    secondary: {
        backgroundColor: '#6c757d',
        color: '#fff',
    },
    success: {
        backgroundColor: '#28a745',
        color: '#fff',
    },
    danger: {
        backgroundColor: '#dc3545',
        color: '#fff',
    },
    warning: {
        backgroundColor: '#ffc107',
        color: '#000',
    },
    info: {
        backgroundColor: '#17a2b8',
        color: '#fff',
    },
};

const SIZES = {
    sm: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        fontSize: 14,
    },
    md: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
    },
    lg: {
        paddingVertical: 14,
        paddingHorizontal: 28,
        fontSize: 18,
    },
};

const CustomButton = ({ title, btnKind = 'rounded', variant = 'primary', size = 'md', onPress, leadingIcon, trailingIcon }) => {
    const variantStyle = VARIANTS[variant] || VARIANTS.primary;
    const sizeStyle = SIZES[size] || SIZES.md;

    const buttonStyles = [
        styles.button,
        {
            backgroundColor: btnKind === 'outlined' ? 'transparent' : variantStyle.backgroundColor,
            borderColor: variantStyle.backgroundColor,
            borderWidth: btnKind === 'outlined' ? 2 : 0,
            borderRadius: btnKind === 'rounded' ? 30 : 0,
        },
        sizeStyle,
    ];

    const textStyles = [
        styles.text,
        {
            color: btnKind === 'outlined' ? variantStyle.backgroundColor : variantStyle.color,
            fontSize: sizeStyle.fontSize,
        },
    ];

    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <View style={styles.content}>
                {leadingIcon && <MaterialIcons name={leadingIcon} size={sizeStyle.fontSize} color={textStyles[1].color} style={styles.icon} />}
                <Text style={textStyles}>{title}</Text>
                {trailingIcon && <MaterialIcons name={trailingIcon} size={sizeStyle.fontSize} color={textStyles[1].color} style={styles.icon} />}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    text: {
        fontWeight: 'bold',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 5,
    },
});

export default CustomButton;
