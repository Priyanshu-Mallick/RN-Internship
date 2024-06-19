import React, { useState } from 'react';
import { View, Text, SectionList, StyleSheet, Dimensions } from 'react-native';

const data = [
    {
        title: 'Fruits',
        data: ['Apple', 'Banana', 'Orange', 'Strawberry'],
    },
    {
        title: 'Vegetables',
        data: ['Carrot', 'Potato', 'Tomato', 'Broccoli'],
    },
    {
        title: 'Dairy',
        data: ['Milk', 'Cheese', 'Yogurt', 'Butter'],
    },
];

const SectionListDemo = () => {
    const [sections, setSections] = useState(data);
    const [refreshing, setRefreshing] = useState(false);

    const screenWidth = Dimensions.get('window').width;

    const renderItem = ({ item }) => (
        <View style={[styles.item, { width: screenWidth - 20 }]}>
            <Text style={styles.itemText}>{item}</Text>
        </View>
    );

    const renderSectionHeader = ({ section }) => (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
        </View>
    );

    const ItemSeparator = () => <View style={styles.itemSeparator} />;
    const SectionSeparator = () => <View style={styles.sectionSeparator} />;

    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setSections(data);
            setRefreshing(false);
        }, 1500);
    };

    return (
        <SectionList
            sections={sections}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparator}
            SectionSeparatorComponent={SectionSeparator}
            refreshing={refreshing}
            onRefresh={handleRefresh}
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
        color: 'white',
    },
    sectionHeader: {
        padding: 10,
        backgroundColor: '#dcdcdc',
    },
    sectionHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemSeparator: {
        height: 1,
        backgroundColor: '#cccccc',
    },
    sectionSeparator: {
        height: 5,
        backgroundColor: '#eeeeee',
    },
});

export default SectionListDemo;
