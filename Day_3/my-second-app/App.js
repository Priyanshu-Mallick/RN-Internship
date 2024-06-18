import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ImageComponent from './Components/ImageComponent';
import Layout from './Components/Layout';

export default function App() {
  return (

    <View style={styles.container}>
      <Layout />
      <StatusBar style="auto" />
      <Layout />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
