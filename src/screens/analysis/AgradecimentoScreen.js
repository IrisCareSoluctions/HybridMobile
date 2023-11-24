import React, { useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AgradecimentoScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.specsAI}>
        <Image
          source={require("../../../assets/HomeBackgraundLogin.png")}
          style={styles.specsAIImage}
        />
      </View>

      <View style={styles.logo}>
        <Image
          source={require("../../../assets/icon-logo-1.png")}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Obrigado por usar nosso aplicativo!</Text>
      </View>

      <View style={styles.fiapLogo}>
        <Image
          source={require("../../../assets/icon-logo-1.png")}
          style={styles.fiapLogoImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 100,
    backgroundColor: "#dbebf2",
  },
  specsAI: {
    width: "70%",
    aspectRatio: 1099 / 184,
    marginBottom: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  specsAIImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    width: "100%",
    paddingTop: "5%",
    aspectRatio: 958.077 / 188,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    color: "#274C9B",
    fontSize: windowHeight * 0.03,
    paddingVertical: windowHeight * 0.02,
    paddingHorizontal: windowWidth * 0.05,
    borderRadius: 10,
  },
  logo: {
    width: "100%",
    aspectRatio: 754 / 466,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  fiapLogo: {
    width: "15%",
    aspectRatio: 370 / 108,
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
  },
  fiapLogoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default AgradecimentoScreen;
