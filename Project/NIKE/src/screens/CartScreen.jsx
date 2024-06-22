import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CartContext from '../services/CartContext';

const CartScreen = () => {
    const { cart, dispatch } = useContext(CartContext);

    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Cart</Text>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={item.image} style={styles.itemImage} />
                        <View style={styles.itemTextContainer}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemPrice}>₹{item.price}</Text>
                        </View>
                        <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.deleteIcon}>
                            <Image source={require('../../assets/delete.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F7F7F9',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 2,
        alignItems: 'center',
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 10,
    },
    itemTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 14,
        color: '#888',
    },
    deleteIcon: {
        padding: 10,
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: '#EB4335',
    },
});

export default CartScreen;
