import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import getNumeros from './src/Components/PhoneNbrs/getNumeros';
import ScanQrCode from './src/Components/QRCode/ScanQrCode';
export default function App() {
  // getNumeros()
  const Stack = createNativeStackNavigator();

  return (


    <NavigationContainer> {/* REACT NAVIGATION */}
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!!</Text>
      <Button
        title="Perel"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <ScanQrCode/>
      <StatusBar style="auto" />
    </View>
    <Stack.Navigator>
        <Stack.Screen name="ScanQrCode" component={ScanQrCode} />
      </Stack.Navigator>
{/* REACT NAVIGATION */}
    </NavigationContainer>
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
