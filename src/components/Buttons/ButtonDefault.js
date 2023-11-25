import { AntDesign } from "@expo/vector-icons";
import React from 'react'
import { Text, TouchableOpacity, Dimensions } from 'react-native'; 
import Colors from '../../shared/Colors';
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const { width, height } = Dimensions.get('window'); 

export default function ButtonDefault({ onPress, title, variant, style, fontSize = 18, icon, iconColor }) {
  const buttonStyle = variant === 'secondary' ? {
    backgroundColor: Colors.greenSolid,
    borderColor: Colors.greenSolid,
  } : variant === 'cancel' ? {
    backgroundColor: "red",
    borderColor: "#C2000B",
    color: "#204144",
    justifyContent: 'center',
    alignItems: 'center',

  } : variant === 'dark' ? {
    backgroundColor: Colors.green,
    borderColor: Colors.greenSolid,
    color: "#204144",
    justifyContent: 'center',
    alignItems: 'center',

  } : variant === 'litler' ? {
    width: "20%",
    borderRadius: 15,
    top: -6,
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
        width: width * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        padding: 5,
        margin: 20,
        alignSelf: 'center',
        borderRadius: 10,
        fontSize: fontSize,
        ...buttonStyle,
        ...style,
      }}
    >
      <Text
        style={{
          color: Colors.whiteSolid,
          fontSize: fontSize, // Use the provided fontSize
          textTransform: "uppercase",
          fontWeight: 'bold',
          ...textStyles,
        }}
      >
        {title}
      </Text>
      {variant === 'litler'  && <AntDesign name={icon} size={20} color={iconColor} style={{ justifyContent: "center", alignItems: "center" }} />}
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
        width: width * 0.8, 
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
