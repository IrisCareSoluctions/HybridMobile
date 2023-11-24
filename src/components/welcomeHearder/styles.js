import { StyleSheet } from "react-native";
import Colors from "../../shared/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#ae0d0d",
        width: "100%",
        height: 50,
    },
    containerInput: {
        flex: 1,
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:50,
        
      },
      textPrimary: {
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'PoppinsExtraBold',
        fontWeight:"bold",
    },
    textSecondary: {
        color: '#89FFDB',
        fontSize: 18,
        fontFamily: 'PoppinsRegular',
        lineHeight: 25,
    },
});