import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from "react-native";
import { AppContext } from "../../../hooks/context";
import Colors from "../../../shared/Colors";
import ButtonDefault from "../../../components/buttons/ButtonDefault";

export default CameraScreen = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCameraMode, setIsCameraMode] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const { setDistancia } = useContext(AppContext);

  useEffect(() => {
    const requestPermissions = async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      const { status: galleryStatus } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasCameraPermission(cameraStatus === "granted");
      setHasGalleryPermission(galleryStatus === "granted");
    };

    requestPermissions();
  }, []);

  const [lista, setLista] = useState([]);

  const ImageRequest = async (uri) => {
    try {
      const formData = new FormData();
      formData.append("image", {
        uri,
        name: "image.jpg",
        type: "image/jpg",
      });

      const response = await axios.post(
        "http://172.20.10.5:5000/analise",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setDistancia(response?.data);
        const temp = lista.push([...lista, response?.data]);
        setLista(temp);
        console.log(lista);
      }
    } catch (error) {
      console.log("Erro ao enviar a imagem", error);
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      setCapturedImage(uri);
      setIsCameraMode(false);
      setOpenModal(true);
    }
  };

  useEffect(() => {
    if (capturedImage) {
      ImageRequest(capturedImage);
    }
  }, [capturedImage]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setCapturedImage(result.uri);
      setIsCameraMode(false);
      setOpenModal(true);
    }
  };

  const switchCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const retakePicture = () => {
    setCapturedImage(null);
    setIsCameraMode(true);
  };

  const navigateToResultadoScreen = async () => {
    navigation.navigate("ResultadoScreen", {
      image: capturedImage,
    });
    setOpenModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraContainer}>
        {hasCameraPermission === null || hasGalleryPermission === null ? (
          <Text>Verificando permissões da câmera e galeria...</Text>
        ) : capturedImage && !isCameraMode ? (
          <View style={styles.photoContainer0}>
            {/* <TouchableOpacity
              style={styles.containerRowBack}
              onPress={retakePicture}
            >
              <MaterialIcons name="arrow-back" size={24} color="#84279b" />
            </TouchableOpacity> */}
            <Image source={{ uri: capturedImage }} style={styles.image} />
          </View>
        ) : (
          <Camera style={styles.camera} type={cameraType} ref={cameraRef}>
            <View style={styles.cameraButtonsContainer}>
              {/* Ícone de Virar a Câmera */}
              <TouchableOpacity
                style={styles.cameraButtonIconTop}
                onPress={switchCamera}
              >
                <MaterialIcons name="flip-camera-ios" size={24} color="#204144" />
              </TouchableOpacity>
              {/* Ícone da Câmera */}
              <TouchableOpacity
                style={styles.cameraButtonCenter}
                onPress={takePicture}
              >
                <MaterialIcons name="camera" size={48} color="#89FFDB" />
              </TouchableOpacity>
              {/* Ícone da Galeria */}
              <TouchableOpacity
                style={styles.cameraButtonIconTop}
                onPress={pickImage}
              >
                <MaterialIcons name="image" size={24} color="#204144" />
              </TouchableOpacity>
            </View>
          </Camera>
        )}
      </View>

      {capturedImage && (
        <Modal
          style={{ backgroundColor: "#204144" }}
          animationType="slide"
          transparent={false}
          visible={openModal}
        >
          <TouchableOpacity
            style={styles.containerRowBack}
            onPress={retakePicture}
          >
            <MaterialIcons name="arrow-back" size={24} color="#89FFDB" style={{margin: 20, }}/>
          </TouchableOpacity>

          <View style={styles.photoContainer}>
            <Image style={styles.modalImage} source={{ uri: capturedImage }} />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonDefault title="Ver resultado " onPress={navigateToResultadoScreen} />
            {/* <TouchableOpacity
              style={styles.cameraButton}
              onPress={navigateToResultadoScreen}
            >
              <Text style={styles.buttonText}>Ver resultado</Text>
            </TouchableOpacity> */}
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.greenSolid,
    //padding: 10,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    //borderRadius: 10,
    //marginTop: 50,
    paddingHorizontal: 20,
    height: "100%",
  },
  buttonsContainer: {
    //flex: 1,
    //flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: "100%",
    backgroundColor: "#204144",
  },
  photoContainer: {
    flex: 1,
    width: "100%",
    //height: "90%",
    backgroundColor: "#204144",
    justifyContent: "center",
    alignItems: "center",
    //paddingTop: 10,
  },
  containerRowBack: {
    justifyContent:'center',
    width: "100%",
    //height: 35,
    //position: "absolute",
    //top: 10,
    //left: 10,
    //zIndex: 1,
    backgroundColor: "#204144",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#3fbe26",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#89FFDB",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#204144",
    textAlign: "center",
  },
  camera: {
    width: "100%",
    aspectRatio: 10 / 15,
    justifyContent: "center",
  },
  cameraButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "transparent",
  },
  cameraButton: {
    borderWidth: 2,
    borderColor: "#204144",
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
    flex: 1,
  },
  cameraButtonCenter: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
    flex: 1,
  },
  cameraButtonIconTop: {
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  cameraButtonText: {
    fontSize: 18,
    color: "#89FFDB",
    textAlign: "center",
  },
  modalImage: {
    width: "90%",
    height: "90%",
    borderRadius: 20,
    backgroundColor: "#204144",
  },
});

