import { StyleSheet } from "react-native";
import Colors from "../../Shared/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  containerScroll: {
    flex: 1,
    //marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#900f81'
  },
  containerButton: {
    //flex: 1,
    flexDirection:"row",
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#900f81',
    //marginTop: 40,
    //padding: 20,
  },
  containerSearch: {
    //backgroundColor: Colors.button,
    //marginTop: "10%",
    height: "100%",
  },
  search: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    //marginTop: 10,
  },
  containerScroll: {
    width: "100%",
    //backgroundColor: "rgba(32, 65, 68, 0.30)",
    marginTop: 40,
    height:"50%",
    //backgroundColor: Colors.whiteSolid,
    //padding: 4,
  },
  scroll: {
    //flex: 1,
    width: "100%",
    //marginTop: 10,
    backgroundColor: Colors.whiteSolid,
  },
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    //height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    top: 90,
    left: 10,
},
  backgraundLogin: {
    //marginTop: 120,
    //width: "100%",
    //alignSelf: "center",
    //borderRadius: 15,
    //padding: 20,
    //backgroundColor: "rgba(15, 32, 42, 1)",
    //position: 'absolute',
  },
  textPrimary: {
    color: '#89FFDB',
    fontSize: 18,
    fontFamily: 'PoppinsExtraBold',
  },
  textSecondary: {
    color: Colors.green,
    fontSize: 18,
    fontFamily: 'PoppinsRegular',
    //lineHeight: 25,
    marginRight: 10,
  },
  icon: {
    width: 56,
    height: 56,
    alignSelf: "center",
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 15,
    borderColor: "#89FFDB",
    borderWidth: 2,
    fontSize: 18,
    backgroundColor: "#ffffff",
  },
  InputIcon: {
    left: "-8%",
  },
  underlineContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    //gap: 30,
    alignItems: 'center',
    //margin: 20,
  },
  underline: {
    height: 1,
    width: "100%",
    backgroundColor: '#89FFDB',
    //marginVertical: 10,
    alignSelf: "center",
  },
  loginSocial: {
    height: 100,
    width: '80%',
    justifyContent: 'center',
    marginVertical: 10,
  },
  touchableOpacity: {
    backgroundColor: Colors.button,
    padding: 10,
    //marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '',
    marginLeft: 5,
  },
  iconLoginSocial: {
    width: 30,
    height: 30,
    alignSelf: "center",
    marginBottom: 10,
  },
  containerCadastro: {
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 30,
  },
  textoRodape: {
    color: "#8F8A8A",
    marginTop: 20,
    fontSize: 15,
  },
  textoLink: {
    color: '#89FFDB',
    marginTop: 20,
    fontSize: 15,
    letterSpacing: 1,
  },
  card: {
    padding: 5,
    //margin: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  text: {
    color: 'black',
    marginBottom: 8,
  },
  widget: {
    //backgroundColor: 'lightblue',
    padding: 50,
    marginBottom: 10,
  },
  scroll: {
    flexDirection: 'row',
    padding: 2,
    marginTop: 20,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 2,
  },
  cardGrid: {
    flex: 1,
    //flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: 10,
    padding: 8,
  },
  geo: {
    width: '100%', // Ocupa a largura total da tela
    height: 100,   // Define a altura desejada
    marginTop: 390,
    //backgroundColor: 'red',
  },

});
