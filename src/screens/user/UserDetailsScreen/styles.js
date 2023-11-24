import { StyleSheet } from "react-native";

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
    containerScroll:{
        flex: 1,
        marginTop: 90,
    },
    containerInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#900f81',
        marginTop: 40,
        padding: 20,
      },
      textContainer: {
        width: '100%',
        //height: '100%',
        top: 20,
        left: 10,
    },
    textPrimary: {
        color: '#ffffff',
        fontSize: 25,
        //fontFamily: 'PoppinsExtraBold',
        lineHeight: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSecondary: {
        color: '#89FFDB',
        fontSize: 20,
        //fontFamily: 'PoppinsRegular',
        //lineHeight: 30,
    },
    textTernary: {
        padding: 10,
        color: '#ffffff',
        fontSize: 20,
        //fontFamily: 'PoppinsExtraBold',
        //lineHeight: 30,
        left: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
