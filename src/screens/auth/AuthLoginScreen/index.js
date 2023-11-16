import { Poppins_400Regular, Poppins_700Bold, Poppins_800ExtraBold, useFonts } from '@expo-google-fonts/poppins';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  // Estado para o nome de usuário
  const [username, setUsername] = useState('');

  // Função para atualizar o nome de usuário
  const changeUsername = (text) => {
    setUsername(text);
  };

  // Carregamento de fontes
  const [fontsLoaded] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    PoppinsBold: Poppins_700Bold,
    PoppinsExtraBold: Poppins_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null; // Aguarda o carregamento da fonte
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/backgraund-analytic-1.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.textContainer}>
          <Text style={styles.textPrimary}>IrisCare</Text>
          <Text style={styles.textPrimary}>Solutions</Text>
          <Text style={styles.textSecondary}>Global Solution</Text>
        </View>

        <View style={styles.containerLogin}>
          <View style={styles.backgraundLogin}>
            <ImageBackground source={require('../../../../assets/icon-logo-1.png')} style={styles.icon} />
            
            
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={changeUsername}
              cursorColor="#ffffff"
              keyboardType="email-address"
              placeholder="Digite seu e-mail"
            />

            <TextInput
              style={styles.input}
              value={username}
              onChangeText={changeUsername}
              cursorColor="#ffffff"
              keyboardType="email-address"
              placeholder="Digite seu e-mail"
            />
          </View>



        </View>

        <View style={styles.rodape}>
          <Text style={styles.rodapeText}>CADASTRE-SE</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: 205,
    height: 139,
    top: 20,
    left: 35,
  },
  textPrimary: {
    color: '#ffffff',
    fontSize: 35,
    fontFamily: 'PoppinsExtraBold',
    lineHeight: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSecondary: {
    color: '#89FFDB',
    fontSize: 18,
    fontFamily: 'PoppinsRegular',
    lineHeight: 25,
  },
  containerLogin: {
    width: 340,
    height: 450,
    justifyContent: 'center',
    alignItems: 'center',
    top: 35,
    left: 10,
  },
  backgraundLogin: {
    width: 290,
    height: 350,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  icon: {
    width: 100,
    height: 100,
    top: -115,
  },
  input: {
    backgroundColor: '#93A29E',
    width: 250,
    borderRadius: 20,
    padding: 8,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    //justifyItems: 'center',
    alignItems: 'center',
  },
  rodape: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rodapeText: {
    color: '#89FFDB',
    fontSize: 18,
    fontFamily: 'PoppinsRegular',
    lineHeight: 25,
  },

});