import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { AuthProvider } from './src/hooks/AuthContext';

import Home from './src/screens/home';
import Login from './src/screens/login';

import DrawerNavigation from './src/components/drawerNavigator/DrawerNavigation';
import TabNavigator from './src/components/tabNavigator/TabNavigator';

import HomePage from './src/screens/homePage/index';

//User
import UserDetail from './src/screens/user/UserDetailsScreen/UserDetailsScreen';
import UserProfileScreen from './src/screens/user/UserProfileScreen'
import UserUpdateForm from './src/screens/user/UserUpdateForm';

//Children
import CreateChild from './src/screens/children/CreateChildScreen/CreateChildScreen';

//Analise-Leucocoria
import AnalysisLeucocoria from './src/screens/analysis/AnalysisLeucocoriaScreen';
import Camera from './src/screens/analysis/CameraScreen';
import Resultado from './src/screens/analysis/ResultadoScreen';
import AgradecimentoScreen from './src/screens/analysis/AgradecimentoScreen';

//Regiter
import InitialRegistrationRegistre from './src/screens/register/InitialRegistrationScreen';
import PersonalInfoRegistre from './src/screens/register/PersonalInfoScreen';
import AddressRegistre from './src/screens/register/AddressScreen';
import ContactRegistre from './src/screens/register/ContactScreen';
import FinalRegistrationRegistre from './src/screens/register/FinalRegistrationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: true }}
        >
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{ headerShown: false }} />
          <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />

          <Stack.Screen name="CreateChild" component={CreateChild} options={{ headerShown: false }} />

          <Stack.Screen name="UserDetail" component={UserDetail} options={{ headerShown: false }} />
          <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="UserUpdateForm" component={UserUpdateForm} options={{ headerShown: false }} />
          <Stack.Screen name="AnalysisLeucocoria" component={AnalysisLeucocoria} options={{ headerShown: false }} />
          <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
          <Stack.Screen name="Resultado" component={Resultado} options={{ headerShown: false }} />
          <Stack.Screen name="AgradecimentoScreen" component={AgradecimentoScreen} options={{ headerShown: false }} />

          <Stack.Screen name="InitialRegistrationRegistre" component={InitialRegistrationRegistre} options={{ headerShown: false }} />
          <Stack.Screen name="PersonalInfoRegistre" component={PersonalInfoRegistre} options={{ headerShown: false }} />
          <Stack.Screen name="AddressRegistre" component={AddressRegistre} options={{ headerShown: false }} />
          <Stack.Screen name="ContactRegistre" component={ContactRegistre} options={{ headerShown: false }} />
          <Stack.Screen name="FinalRegistrationRegistre" component={FinalRegistrationRegistre} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020B19',
  },
});
