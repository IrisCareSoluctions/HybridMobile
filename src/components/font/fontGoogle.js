import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Poppins_400Regular, Poppins_700Bold, Poppins_800ExtraBold, useFonts } from '@expo-google-fonts/poppins';

export default function FontGoogle() {

    const [fontsLoaded] = useFonts({
        PoppinsRegular: Poppins_400Regular,
        PoppinsBold: Poppins_700Bold,
        PoppinsExtraBold: Poppins_800ExtraBold,
    });

    if (!fontsLoaded) {
        return null;
    }


    return (
        <View style={styles.textContainer}>
            <Text style={styles.textPrimary}>IrisCare</Text>
            <Text style={styles.textPrimary}>Solutions</Text>
            <Text style={styles.textSecondary}>Global Solution</Text>
        </View>

    )
}
export const styles = StyleSheet.create({
    textContainer: {
        width: '100%',
        //height: '100%',
        top: 50,
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
});