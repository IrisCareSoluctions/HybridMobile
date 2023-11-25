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
    containerLogin: {
        width: "90%",
        //justifyContent: 'center',
        alignSelf: "center",
        backgroundColor: '#900f81',
    },
    backgraundLogin: {
        marginTop: 120,
        width: "100%",
        alignSelf: "center",
        borderRadius: 15,
        padding: 20,
        //backgroundColor: "rgba(15, 32, 42, 1)",
        position: 'absolute',
    },
    icon: {
        width: 56,
        height: 56,
        alignSelf: "center",
        marginBottom: 10,
    },
    inputWrapper: {
        flexDirection: "row",
        justifyContent: "center",
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
        backgroundColor:  "#ffffff",
    },
    InputIcon: {
        left: "-8%",
    },
    underlineContainer:{
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
        alignItems: 'center',
        margin: 2,
    },
    underline: {
        height: 1,
        width: "40%",
        backgroundColor: '#89FFDB',
        marginVertical: 10,
        alignSelf: "center",
      },   
      loginSocial: {
        height: 100,
        width: '80%',
        justifyContent: 'center',
        marginVertical: 10,
      },
      touchableOpacity: {
        backgroundColor: Colors.button ,
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
      iconLoginSocial:{
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
        backgroundColor: 'white', // Cor de fundo do card
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 50, // Para uma imagem redonda, se desejar
        marginBottom: 8,
      },
      text: {
        color: 'black', // Cor do texto
        marginBottom: 8,
      },
});

