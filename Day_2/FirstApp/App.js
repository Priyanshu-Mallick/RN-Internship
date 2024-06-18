import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UserProfile from './Screens/commonComponents/UserProfile';
import Car from './Screens/commonComponents/Car';

export default function App() {
  const cars = [
    { brand: 'Toyota', color: 'Red', year: 2021 },
    { brand: 'Honda', color: 'Blue', year: 2020 },
    { brand: 'Ford', color: 'Black', year: 2019 },
    { brand: 'Toyota', color: 'Red', year: 2021 },
    { brand: 'Honda', color: 'Blue', year: 2020 },
    { brand: 'Ford', color: 'Black', year: 2019 },
    { brand: 'Toyota', color: 'Red', year: 2021 },
    { brand: 'Honda', color: 'Blue', year: 2020 },
    { brand: 'Ford', color: 'Black', year: 2019 },
    { brand: 'Toyota', color: 'Red', year: 2021 },
    { brand: 'Honda', color: 'Blue', year: 2020 },
  ];

  const handler = () => {
    console.log("Handler called");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.appBarLeft}>
          <MaterialCommunityIcons name="menu" size={24} color="white" />
          <UserProfile isLoggedIn={false} handler={handler} />
        </View>
        <MaterialCommunityIcons name="circle" size={24} color="white" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.body}>
          <View style={styles.cardList}>
            {cars.map((car, index) => (
              <View key={index} style={styles.card}>
                <Car car={car} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 8,
  },
  appBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appBarTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 12,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  body: {
    flex: 1,
    padding: 16,
  },
  cardList: {
    flexDirection: 'column',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
});
