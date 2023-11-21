import React from 'react';
import { View, TextInput } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { TextInputMask } from 'react-native-masked-text';
import Colors from '../../Shared/Colors';

export default function InputDefault({
  onChangeText,
  secureTextEntry,
  onPress,
  value,
  icon,
  keyboardType,
  placeholder,
  autoCompleteType,
  mask,
  format,
}) {
  const isMaskedInput = !!mask;

  return (
    <View style={{ flexDirection: "row", alignItems: "center", width: "80%", marginBottom: 15 }}>
      <MaterialIcons
        name={icon}
        size={20}
        color={Colors.greenSolid}
        style={{ marginLeft: -10, marginRight: 5 }}
      />

      {isMaskedInput ? (
        <TextInputMask
          style={inputStyles}
          value={value}
          onChangeText={onChangeText}
          cursorColor={Colors.greenSolid}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          placeholder={placeholder}
          onPress={onPress}
          autoCompleteType={autoCompleteType}
          type={mask} 
          options={{ format: format }}
        />
      ) : (
        <TextInput
          style={inputStyles}
          value={value}
          onChangeText={onChangeText}
          cursorColor={Colors.greenSolid}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          placeholder={placeholder}
          onPress={onPress}
          autoCompleteType={autoCompleteType}
        />
      )}
    </View>
  );
}

const inputStyles = {
  flex: 1,
  paddingHorizontal: 10,
  height: 50,
  borderRadius: 15,
  borderColor: Colors.greenSolid,
  borderWidth: 2,
  fontSize: 14,
  backgroundColor: "#ffffff",
};
