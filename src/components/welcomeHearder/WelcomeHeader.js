import React from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { styles } from "./styles";
import FontGoogle from '../../components/font/fontGoogle';

export default function WelcomeHeader() {
    // const {userData, setUserData}=useContext(AuthCon)
    return (
        <SafeAreaView style={styles.container}>
            <Headers style={styles.containerInput}>
                    <Text style={styles.textPrimary}>Hello</Text>
                    <Text style={styles.textSecondary}> "NOME DO USUARIO"</Text>
            </Headers>
        </SafeAreaView >
    );
};