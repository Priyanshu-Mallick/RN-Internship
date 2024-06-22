import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomTabBar = (props) => {
    const { state, descriptors, navigation } = props;
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.tabBarContainer, { paddingBottom: insets.bottom }]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                let iconSource;
                if (route.name === 'Home') {
                    iconSource = require('../../assets/home.png');
                } else if (route.name === 'Favorites') {
                    iconSource = require('../../assets/heart.png');
                } else if (route.name === 'Cart') {
                    iconSource = require('../../assets/add-to-cart.png');
                } else if (route.name === 'Notifications') {
                    iconSource = require('../../assets/notification.png');
                } else if (route.name === 'Profile') {
                    iconSource = require('../../assets/user.png');
                }

                const isCart = route.name === 'Cart';

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={isCart ? styles.cartButton : styles.tabButton}
                    >
                        <Image
                            source={iconSource}
                            style={[styles.icon, isFocused && styles.focusedIcon, isCart && styles.cartIcon]}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30,
        elevation: 10,
        shadowColor: '#0D6EFD'
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: 'gray',
    },
    focusedIcon: {
        tintColor: '#007AFF',
    },
    cartIcon: {
        tintColor: '#fff',
    },
});

export default CustomTabBar;
