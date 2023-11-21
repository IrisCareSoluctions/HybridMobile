import { Poppins_400Regular, Poppins_700Bold, Poppins_800ExtraBold, useFonts } from '@expo-google-fonts/poppins';
import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import FontGoogle from '../../components/font/fontGoogle';

export default function Home({ navigation }) {
  // font
  const [fontsLoaded] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    PoppinsBold: Poppins_700Bold,
    PoppinsExtraBold: Poppins_800ExtraBold,
  });

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 5000);

    return () => clearTimeout(redirectTimeout);
  }, [navigation]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require('../../../assets/HomeBackgraund.png')}
      style={styles.backgroundImage}
    >

      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textPrimary}>IrisCare</Text>
          <Text style={styles.textPrimary}>Solutions</Text>
          <Text style={styles.textSecondary}>Global Solution</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textContainer: {
    width: 205,
    height: 139,
    top: 80,
    left: -60,
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
});
