import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

const Layout = () => {

    const onPressLearnMore = () => {
        console.log("onpress handler is calling");
    }
    return (
        <View style={styles.outerContainer}>
            <View style={[styles.content, { backgroundColor: "red" }]}  >

            </View>
            <View style={[styles.content, { backgroundColor: "blue" }]}  >

            </View>
            <View style={[styles.content, { backgroundColor: "grey" }]}  >

            </View>
            <View style={[styles.content, { backgroundColor: "black" }]}  >

            </View>
            <Button onPress={onPressLearnMore} title="My Button" accessibilityLabel="Learn more about this purple button" />
        </View>

    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 40,
        flexWrap: 'wrap'
    },
    content: {
        height: 160,
        width: 160,
        marginHorizontal: 10,
        marginVertical: 10,
    }
});

export default Layout;
