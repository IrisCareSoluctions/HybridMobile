import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UpdateProfileScreen = ({ route, navigation }) => {
  const [updatedData, setUpdatedData] = useState(route.params.userData);

  const handleUpdate = () => {
    // Implemente a lógica para atualizar os dados do usuário
    // Após a atualização, navegue de volta para a tela de perfil
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={updatedData.name}
        onChangeText={(text) => setUpdatedData({ ...updatedData, name: text })}
      />

      <Text style={styles.label}>CPF:</Text>
      <TextInput
        style={styles.input}
        value={updatedData.cpf}
        onChangeText={(text) => setUpdatedData({ ...updatedData, cpf: text })}
      />

      {/* Adicione mais campos conforme necessário */}

      <Button title="Salvar" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});

export default UpdateProfileScreen;
