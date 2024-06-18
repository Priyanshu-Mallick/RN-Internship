import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageComponent = () => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <Image
                    source={require('../assets/icon.png')}
                    style={styles.image}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 20,
    },
});

export default ImageComponent;
