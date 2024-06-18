import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function UserProfile({ isLoggedIn, handler }) {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const name = "Priyanshu";

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <View>
            <Text style={styles.appBarTitle} >Hello, {isLoggedIn ? name : "Guest"}!</Text>

            {/* <Button
                title={isLoggedIn ? "Log out" : "Log in"}
                onPress={toggleLogin}
            /> */}

            {
                !isLoggedIn && (
                    <View>
                        <Text onPress={handler}>Logged out</Text>
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({

    appBarTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 12,
    },
});