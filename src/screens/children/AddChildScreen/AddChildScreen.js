import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddChildScreen = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleAddChild = async () => {
    try {
      const response = await fetch(`http://192.168.0.18:8080/api/user/${route.params.id}/children`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          cpf,
          birthday,
        }),
      });
  
      if (response.ok) {
        fetchChildren(route.params.id);
        setName('');
        setCPF('');
        setBirthday('');
      } else {
        console.error('Error creating child:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating child:', error.message);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Child</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCPF(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Birthday"
        value={birthday}
        onChangeText={(text) => setBirthday(text)}
      />
      <Button title="Add Child" onPress={handleAddChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddChildScreen;
