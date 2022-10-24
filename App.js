import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import getNumeros from './src/Components/PhoneNbrs/getNumeros';
import ScanQrCode from './src/Components/QRCode/ScanQrCode';
export default function App() {
  // getNumeros()
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!!</Text>
      <Button
        title="Perel"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <ScanQrCode/>
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
