import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import CartContext from '../services/CartContext';

export default function PopularShoeCard({ id, image, title, price, isFavorite }) {
    const { cart, dispatch } = useContext(CartContext);

    const inCart = cart.some(item => item.id === id);

    const handleAddToCart = () => {
        if (inCart) {
            Alert.alert(
                "Remove Item",
                "Are you sure you want to remove this item from the cart?",
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                    {
                        text: "Yes",
                        onPress: () => dispatch({ type: 'REMOVE_FROM_CART', payload: { id } })
                    }
                ]
            );
        } else {
            dispatch({ type: 'ADD_TO_CART', payload: { id, image, title, price } });
        }
    };

    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.favoriteIcon}>
                <Image
                    source={isFavorite ? require('../../assets/fevorite-filled.png') : require('../../assets/fevorite-outlined.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <Image source={image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.label}>BEST SELLER</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>₹{price}</Text>
            </View>
            <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                <Image
                    source={inCart ? require('../../assets/tick.png') : require('../../assets/add-to-cart.png')}
                    style={styles.addToCartIcon}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: ScreenWidth * 0.42,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 10,
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    favoriteIcon: {
        position: 'absolute',
        top: 15,
        left: 10,
        zIndex: 1,
    },
    icon: {
        width: 24,
        height: 24,
    },
    image: {
        width: '100%',
        height: 120,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    textContainer: {
        marginBottom: 10,
    },
    label: {
        fontSize: 12,
        color: '#007AFF',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2B2B2B',
    },
    price: {
        fontSize: 14,
        color: '#2B2B2B',
    },
    addToCartButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addToCartIcon: {
        width: 16,
        height: 16,
        tintColor: '#FFFFFF',
    },
});
