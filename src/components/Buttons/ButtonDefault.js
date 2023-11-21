import { AntDesign } from "@expo/vector-icons";
import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import Colors from '../../Shared/Colors';
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function ButtonDefault({ onPress, title, variant }) {
  const buttonStyle = variant === 'cancel' ? {
    backgroundColor: Colors.greenSolid,
    borderColor: Colors.greenSolid,
  } : variant === 'litler' ? {
    width: "20%",
    borderRadius: 15,
    top:-6,
    borderColor: "#89FFDB",
    borderWidth: 1,
    backgroundColor: Colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  } : {
    backgroundColor: Colors.button,
    borderColor: "rgba(137, 255, 219, 0.51)",
  };

  const textStyles = variant === 'calendar' ? {
    color: Colors.placeColor,
  } : {};

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 50,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        padding: 5,
        margin: 20,
        alignSelf: 'center',
        borderRadius: 10,
        fontSize: 18,
        ...buttonStyle, // Adiciona as propriedades específicas do estilo da variante
      }}
    >
      <Text
        style={{
          color: Colors.whiteSolid,
          fontSize: 18,
          textTransform: "uppercase",
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
      {variant === 'litler' && <AntDesign name="search1" size={20} color={Colors.whiteSolid} style={{justifyContent:"center", alignItems:"center"}} />}
    </TouchableOpacity>
  );
}

export const CalendarButton = ({ onPress, title, selectedDate }) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 50,
        width: "80%",
        justifyContent: 'center',
        borderWidth: 1,
        margin: 20,
        alignSelf: 'center',
        borderRadius: 15,
        paddingHorizontal: 10,
        borderColor: "#89FFDB",
        backgroundColor: "#ffffff",
      }}
    >
      <Text
        style={{
          color: Colors.placeColor,
          fontSize: 14,
          textTransform: "none",
        }}
      >
        {selectedDate !== null ? selectedDate.toLocaleDateString('pt-BR') : title}
      </Text>
    </TouchableOpacity>
  );
}
