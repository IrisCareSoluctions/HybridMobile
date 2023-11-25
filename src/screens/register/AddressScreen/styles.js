import { StyleSheet } from "react-native";
import Colors from "../../../Shared/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.greenSolid,
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
});
