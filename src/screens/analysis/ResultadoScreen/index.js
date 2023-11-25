import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppContext } from "../../../hooks/context";
import Colors from "../../../Shared/Colors";

const ResultadoScreen = ({ navigation, route }) => {
  const { image } = route.params;
  const [dpDistance, setDpDistance] = useState(undefined);
  const [dnpDistanceLeft, setDnpDistanceLeft] = useState(undefined);
  const [dnpDistanceRight, setDnpDistanceRight] = useState(undefined);

  const { distancia } = useContext(AppContext);

  useEffect(() => {
    if (distancia) {
      setDpDistance(distancia?.DP);
      setDnpDistanceLeft(distancia?.DNPLeft);
      setDnpDistanceRight(distancia?.DNPRight);
    }
  }, [distancia]);

  const navigateToNav = () => {
    navigation.navigate("Agradecimento");
  };

  const onShare = async () => {
    try {
      await Share.share({
        message:
          `Distancia pupilar: ` +
          dpDistance +
          `\n` +
          `Distancia naso-pupilar esquerda: ` +
          dnpDistanceLeft +
          `\n` +
          `Distancia naso-pupilar direita: ` +
          dnpDistanceRight,
      });
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.text}>Nenhuma imagem disponível</Text>
        )}
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Distancia pupilar: {dpDistance}</Text>
        <Text style={styles.resultText}>
          Distancia naso-pupilar esquerda: {dnpDistanceLeft}
        </Text>
        <Text style={styles.resultText}>
          Distancia naso-pupilar direita: {dnpDistanceRight}
        </Text>
      </View>

      <View style={styles.buttonsContainerShared}>
        <TouchableOpacity style={styles.cameraButtonShared} onPress={onShare}>
          <Text style={styles.cameraButtonTextShared}>
            Compartilhar Resultado
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.cameraButton} onPress={navigateToNav}>
          <Text style={styles.buttonText}>Ir para Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#dbebf2",
  },
  photoContainer: {
    width: 400,
    height: 400,
    top: 25,
    backgroundColor: "#c9dfe7",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#dbebf2",
  },
  text: {
    fontSize: 18,
    color: "gray",
  },
  resultContainer: {
    top: 25,
    marginTop: 20,
    width: "100%",
    height: "30%",
    alignItems: "flex-start",
    backgroundColor: Colors.greenSolid,
    padding: 20,
  },
  resultText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#FFFF",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dbebf2",
  },
  buttonsContainerShared: {
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#dbebf2",
  },
  cameraButton: {
    backgroundColor: Colors.greenSolid,
    padding: 25,
    borderRadius: 15,
    flex: 1,
    alignItems: "center",
    marginTop: "10%",
  },
  cameraButtonShared: {
    borderWidth: 2,
    borderColor: Colors.greenSolid,
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
    flex: 1,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  cameraButtonTextShared: {
    fontSize: 18,
    color: Colors.greenSolid,
    textAlign: "center",
  },
});

export default ResultadoScreen;
