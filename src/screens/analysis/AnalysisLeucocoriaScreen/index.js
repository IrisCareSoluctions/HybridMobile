import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function AnalysisLeucocoria({ navigation }) {
  const goToCamera = () => {
    navigation.navigate("Cam");
  };

  return (
    <View style={styles.container}>
      <View style={styles.specsAI}>
        <Image
          source={require("../../../../assets/icon-logo-1.png")}
          style={styles.specsAIImage}
        />
      </View>

      <View style={styles.logo}>
        <Image
          source={require("../../../../assets/icon-logo-1.png")}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToCamera}>
          <Text style={styles.buttonText}>Ir para a Câmera</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.fiapLogo}>
        <Image
          source={require("../../../../assets/icon-logo-1.png")}
          style={styles.fiapLogoImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 100,
    backgroundColor: "#dbebf2",
    //padding: windowHeight * 0.1, // Ajusta o preenchimento de acordo com a altura da tela
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
  buttonContainer: {
    width: "100%",
    paddingTop: "1%",
    aspectRatio: 958.077 / 188,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#274C9B",
    paddingVertical: windowHeight * 0.02,
    paddingHorizontal: windowWidth * 0.05,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: windowHeight * 0.03,
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
