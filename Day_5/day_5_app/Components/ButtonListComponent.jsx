import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import CustomButton from './CustomButtonComponent';

const buttonData = [
    { title: 'Primary Button', btnKind: 'rounded', variant: 'primary', size: 'md', description: 'This is a primary button', leadingIcon: 'star' },
    { title: 'Secondary Button', btnKind: 'outlined', variant: 'secondary', size: 'md', description: 'This is a secondary button', trailingIcon: 'check' },
    { title: 'Success Button', btnKind: 'rounded', variant: 'success', size: 'md', description: 'This is a success button', leadingIcon: 'thumb-up', trailingIcon: 'thumb-down' },
    { title: 'Danger Button', btnKind: 'outlined', variant: 'danger', size: 'md', description: 'This is a danger button', leadingIcon: 'warning' },
    { title: 'Warning Button', btnKind: 'rounded', variant: 'warning', size: 'md', description: 'This is a warning button', trailingIcon: 'error' },
    { title: 'Info Button', btnKind: 'outlined', variant: 'info', size: 'md', description: 'This is an info button', leadingIcon: 'info' },
];

const ButtonListComponent = () => {
    const screenWidth = Dimensions.get('window').width;

    const renderItem = ({ item }) => (
        <View style={[styles.item, { width: screenWidth - 20 }]}>
            <Text style={styles.description}>{item.description}</Text>
            <CustomButton
                title={item.title}
                btnKind={item.btnKind}
                variant={item.variant}
                size={item.size}
                onPress={() => alert(`${item.title} Pressed`)}
                leadingIcon={item.leadingIcon}
                trailingIcon={item.trailingIcon}
            />
        </View>
    );

    return (
        <FlatList
            data={buttonData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
        marginTop: 40,
    },
    item: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
        flex: 1,
    },
});

export default ButtonListComponent;
