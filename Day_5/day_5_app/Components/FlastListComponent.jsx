import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';

const data = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

const FlatListDemo = () => {
    const [items, setItems] = useState(data);
    const [refreshing, setRefreshing] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);

    const screenWidth = Dimensions.get('window').width;

    const renderItem = ({ item }) => (
        <View style={[styles.item, { width: screenWidth - 20 }]}>
            <Text style={styles.itemText}>{item}</Text>
        </View>
    );

    const ItemSeparator = () => <View style={styles.separator} />;

    const ListHeader = () => (
        <View style={styles.headerFooter}>
            <Text style={styles.headerFooterText}>List header</Text>
        </View>
    );

    const ListFooter = () => (
        <View style={styles.headerFooter}>
            <Text style={styles.headerFooterText}>List footer</Text>
            {loadingMore && <ActivityIndicator size="small" color="#0000ff" />}
        </View>
    );

    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setItems(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
            setRefreshing(false);
        }, 1500);
    };

    const handleLoadMore = () => {
        if (!loadingMore) {
            setLoadingMore(true);
            setTimeout(() => {
                setItems((prevItems) => [
                    ...prevItems,
                    ...Array.from({ length: 10 }, (_, i) => `Item ${prevItems.length + i + 1}`),
                ]);
                setLoadingMore(false);
            }, 1500);
        }
    };

    return (
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={ListHeader}
            ListFooterComponent={ListFooter}
            refreshing={refreshing}
            onRefresh={handleRefresh}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            initialNumToRender={10}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 10,
    },
    item: {
        padding: 20,
        backgroundColor: 'red',
        marginVertical: 8,
        alignSelf: 'center',
    },
    itemText: {
        fontSize: 18,
    },
    separator: {
        height: 1,
        backgroundColor: '#cccccc',
    },
    headerFooter: {
        padding: 20,
        backgroundColor: '#dcdcdc',
        alignItems: 'center',
    },
    headerFooterText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default FlatListDemo;
