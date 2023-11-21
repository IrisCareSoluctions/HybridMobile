import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import Home from './src/screens/home';
import Login from './src/screens/login';

//Regiter
import InitialRegistrationRegistre from './src/screens/register/InitialRegistrationScreen';
import PersonalInfoRegistre from './src/screens/register/PersonalInfoScreen';
import AddressRegistre from './src/screens/register/AddressScreen';
import ContactRegistre from './src/screens/register/ContactScreen';
import FinalRegistrationRegistre from './src/screens/register/FinalRegistrationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="InitialRegistrationRegistre" component={InitialRegistrationRegistre} options={{ headerShown: false }} />
        <Stack.Screen name="PersonalInfoRegistre" component={PersonalInfoRegistre} options={{ headerShown: false }} />
        <Stack.Screen name="AddressRegistre" component={AddressRegistre} options={{ headerShown: false }} />
        <Stack.Screen name="ContactRegistre" component={ContactRegistre} options={{ headerShown: false }} />
        <Stack.Screen name="FinalRegistrationRegistre" component={FinalRegistrationRegistre} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020B19',
  },
});
