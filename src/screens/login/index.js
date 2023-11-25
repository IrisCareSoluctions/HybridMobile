// import { Poppins_400Regular, Poppins_700Bold, Poppins_800ExtraBold, useFonts } from '@expo-google-fonts/poppins';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Colors from '../../shared/Colors';
import ButtonDefault from '../../components/buttons/ButtonDefault';
import { styles } from "./styles";
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from "@react-native-async-storage/async-storage"
import FontGoogle from '../../components/font/FontGoogle';
import * as WebBrowser from "expo-web-browser"
import InputDefault from "../../components/Input/InputDefault";
import { useAuth } from "../../hooks/AuthContext";

WebBrowser.maybeCompleteAuthSession();

export default function Login({ navigation }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeEmail = (value) => {
    setUser((prevState) => ({
      ...prevState,
      email: value,
    }));
  };

  const changeSenha = (value) => {
    setUser((prevState) => ({
      ...prevState,
      password: value,
    }));
  };

  const mostrarToast = (mensagem) => {
    ToastAndroid.showWithGravityAndOffset(
      mensagem,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      50
    );
  };

  const [acesso, setAcesso] = useState({
    id: "",
    token: "",
  });

  const goToNextScreen = async () => {
    // Email validation using regex
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(user.email)) {
    //   mostrarToast("O e-mail deve ser válido");
    //   return;
    // }

    if (user.email === "") {
      mostrarToast("O e-mail é obrigatório");
      return;
    }

    if (user.password === "") {
      mostrarToast("A password é obrigatória");
      return;
    }

    try {
      const data = {
        email: user.email,
        password: user.password,
      };

      const response = await fetch("http://192.168.0.18:8080/api/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseBody = await response.json();

      if (responseBody.active === false) {
        mostrarToast("Usuário excluído");
        navigation.navigate('Login');
        return;
      }

      if (response.status === 200) {
        setAcesso(responseBody.id, responseBody.token);
        console.log("User Info:", responseBody);
        setAcesso((prevAcesso) => ({
          ...prevAcesso,
          id: responseBody.id,
          token: responseBody.token,
        }));

        console.log("User ID:", responseBody.id);
        console.log("TabNavigator", { id: responseBody.id });

        mostrarToast("Login realizado com sucesso!");
        navigation.navigate('TabNavigator', {
          screen: 'UserDetailsScreen',
          params: { id: responseBody.id },
        },
        {
          screen: 'HomePage',
          params: { id: responseBody.id },
        });


      } else if (response.status === 400) {
        mostrarToast("Cadastro não encontrado");
      } else if (response.status === 404) {
        mostrarToast("E-mail ou password inválidos");
      }
    } catch (error) {
      mostrarToast("Erro ao fazer login. Tente novamente.");
      console.error(error);
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/HomeBackgraundLogin.png')}
        style={styles.backgroundImage}
      >

        <FontGoogle />

        <View style={styles.containerLogin}>
          <View style={styles.backgraundLogin}>

            <View style={styles.inputWrapper}>
              <InputDefault
                placeholder="Digite seu e-mail"
                value={user.email}
                onChangeText={changeEmail}
                icon="person"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputWrapper}>
              <InputDefault
                placeholder="Digite sua senha"
                value={user.password}
                onChangeText={changeSenha}
                icon="lock"
                keyboardType="default"
                secureTextEntry
              />
            </View>
            <ButtonDefault title="Entrar" onPress={goToNextScreen} />

            <View style={styles.underlineContainer}>
              <View style={styles.underline} />
              <Text style={{ color: "#89FFDB" }}>
                or
              </Text>
              <View style={styles.underline} />
            </View>

             <View style={styles.underlineContainer}>
              <TouchableOpacity style={styles.touchableOpacity} onPress={() => { promptAsync() }}>
                <Ionicons name="logo-google" size={25} color="white" style={{ marginRight: 10 }} />
                <Text style={{ color: Colors.whiteSolid }}>ENTRE COM GOOGLE</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.containerCadastro}>
              <Text style={styles.textoRodape}>
                Não possui conta?
                <Text
                  style={styles.textoLink}
                  onPress={() => navigation.navigate("InitialRegistrationRegistre")}
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

