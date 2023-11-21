// import { Poppins_400Regular, Poppins_700Bold, Poppins_800ExtraBold, useFonts } from '@expo-google-fonts/poppins';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../../Shared/Colors';
import ButtonDefault from '../../components/Buttons/ButtonDefault';
import { styles } from "./styles";
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from "@react-native-async-storage/async-storage"
import FontGoogle from '../../components/font/fontGoogle';
import * as WebBrowser from "expo-web-browser"

WebBrowser.maybeCompleteAuthSession();

export default function Login({ navigation }) {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "207752264497-5kqp4jmvg7f3rleh7t03nj9cu7dg3kk0.apps.googleusercontent.com",
    iosClientId: "207752264497-4v3qf4b8ij5iji15l0q4367lajnslqsu.apps.googleusercontent.com",
    webClientId: "207752264497-5hoo4da4o6fu81jlijv597g0gppqpbs2.apps.googleusercontent.com"
  });

  React.useEffect(() => {
    handleSingInWithGoogle();
  }, [response, token]);

  async function handleSingInWithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (response?.type === "success") {
        setToken(response.authentication.accessToken)
        await getUserInfo(response.authentication.accessToken);
        console.log(token);
        console.log(userInfo);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
    }
  };



  // Estado para o nome de usuário
  const [username, setUsername] = useState('');

  // Função para atualizar o nome de usuário
  const changeUsername = (text) => {
    setUsername(text);
  };

  // // Carregamento de fontes
  // const [fontsLoaded] = useFonts({
  //   PoppinsRegular: Poppins_400Regular,
  //   PoppinsBold: Poppins_700Bold,
  //   PoppinsExtraBold: Poppins_800ExtraBold,
  // });

  // if (!fontsLoaded) {
  //   return null; // Aguarda o carregamento da fonte
  // }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/HomeBackgraundLogin.png')}
        style={styles.backgroundImage}
      >

        <FontGoogle />

        {/* <View style={styles.textContainer}>
          <Text style={styles.textPrimary}>IrisCare</Text>
          <Text style={styles.textPrimary}>Solutions</Text>
          <Text style={styles.textSecondary}>Global Solution</Text>
        </View> */}

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
                //value={""} //user.email
                //onChangeText={""} //changeEmail
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
                //value={""} //user.senha
                //onChangeText={""} //changeSenha
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

            {/* <Text style={{ color: "white" }}>{JSON.stringify(userInfo)}</Text>
            <Text style={{ color: "red" }}>{JSON.stringify(token)}</Text> */}

            <View style={styles.underlineContainer}>
              <TouchableOpacity style={styles.touchableOpacity} onPress={() => { promptAsync() }}>
                <Ionicons name="logo-google" size={25} color="white" style={{ marginRight: 10 }} />
                <Text style={{ color: Colors.whiteSolid }}>ENTRE COM GOOGLE</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity style={styles.touchableOpacity} onPress={async () => await AsyncStorage.removeItem("@user")}>
                <Ionicons name="logo-google" size={25} color="white" style={{ marginRight: 10 }} />
                <Text style={{ color: Colors.whiteSolid }}>SAIR COM GOOGLE</Text>
              </TouchableOpacity> */}
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

