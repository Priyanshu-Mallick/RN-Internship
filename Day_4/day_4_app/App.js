import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInputComponent, View } from 'react-native';
import Demo from './Components/TouchableDemo';
import TextInputC from './Components/TextInputComponet';

export default function App() {
  console.log("Hello");
  return (
    <View style={styles.container}>
      {/* <Demo /> */}
      <TextInputC />
      <TextInputC />
      <TextInputC />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
