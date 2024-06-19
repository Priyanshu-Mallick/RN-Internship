import { StatusBar } from 'expo-status-bar';
import { FlatListComponent, StyleSheet, Text, View } from 'react-native';
import FlatListDemo from './Components/FlastListComponent';
import SectionListDemo from './Components/SectionListComponent';
import CustomButton from './Components/CustomButtonComponent';
import ButtonListComponent from './Components/ButtonListComponent';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FlatListDemo /> */}
      {/* <SectionListDemo /> */}
      <ButtonListComponent />

      <StatusBar style="auto" />
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
