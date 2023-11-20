import { Poppins_400Regular, Poppins_700Bold, Poppins_800ExtraBold, useFonts } from '@expo-google-fonts/poppins';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../../Shared/Colors';
import ButtonDefault from '../../components/Buttons/ButtonDefault';
import { styles } from "./styles";


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
        source={require('../../../assets/HomeBackgraundLogin.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.textContainer}>
          <Text style={styles.textPrimary}>IrisCare</Text>
          <Text style={styles.textPrimary}>Solutions</Text>
          <Text style={styles.textSecondary}>Global Solution</Text>
        </View>

        <View style={styles.containerLogin}>
          <View style={styles.backgraundLogin}>

            <View style={styles.inputWrapper}>
              <MaterialIcons
                name="person"
                size={20}
                color={"#89FFDB"}
                style={styles.InputIcon}
              />
              <TextInput
                style={styles.input}
                value={""} //user.email
                onChangeText={""} //changeEmail
                cursorColor={"#FFFFFF"}
                keyboardType="email-address"
                placeholder=" Digite seu e-mail"
              />
            </View>

            <View style={styles.inputWrapper}>
              <MaterialIcons
                name="lock"
                size={20}
                color={"#89FFDB"}
                style={styles.InputIcon}
              />
              <TextInput
                style={styles.input}
                value={""} //user.senha
                onChangeText={""} //changeSenha
                cursorColor={"#FFFFFF"}
                keyboardType="number-pad"
                placeholder=" Digite sua senha"
              />

            </View>
            <ButtonDefault title="Entrar" onPress="" />

            <View style={styles.underlineContainer}>
              <View style={styles.underline} />
              <Text style={{ color: "#89FFDB" }}>
                or
              </Text>
              <View style={styles.underline} />
            </View>

            <View style={styles.underlineContainer}>
              <TouchableOpacity style={styles.touchableOpacity} onPress={""}>
                <Ionicons name="logo-google" size={25} color="white" style={{ marginRight: 10 }} />
                <Text style={{ color: Colors.whiteSolid }}>ENTRE COM GOOGLE</Text>
              </TouchableOpacity>


            </View>

            <View style={styles.containerCadastro}>
              <Text style={styles.textoRodape}>
                Não possui conta?
                <Text
                  style={styles.textoLink}
                  onPress={() => navigation.navigate("PersonalInfo")}
                >
                  {" "}
                  Criar conta
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

