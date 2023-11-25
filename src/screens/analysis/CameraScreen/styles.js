import { StyleSheet } from "react-native";
import Colors from "../../../Shared/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dbebf2",
    padding: 10,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
    paddingHorizontal: 20,
    height: "100%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: "100%",
    backgroundColor: "#dbebf2",
  },
  photoContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#dbebf2",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  containerRowBack: {
    position: "absolute",
    top: 10,
    left: 20,
    zIndex: 1,
    backgroundColor: "#dbebf2",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#dbebf2",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.greenSolid,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.greenSolid,
    textAlign: "center",
  },
  camera: {
    width: "100%",
    aspectRatio: 9 / 16,
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
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  cameraButton: {
    borderWidth: 2,
    borderColor: Colors.greenSolid,
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
    color: Colors.greenSolid,
    textAlign: "center",
  },
  modalImage: {
    width: "90%",
    height: "90%",
    borderRadius: 20,
    backgroundColor: "#dbebf2",
  },
});