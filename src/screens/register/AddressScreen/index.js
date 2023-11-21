import React, { useState } from 'react'

import { ImageBackground, SafeAreaView, Text, TextInput, ToastAndroid, View, Button, ScrollView } from 'react-native';
import ButtonDefault from '../../../components/buttons/ButtonDefault';
import InputDefault from '../../../components/Input/InputDefault';
import { styles } from "./styles";
import FontGoogle from '../../../components/font/FontGoogle';
import ApiCep from '../../../service/ApiCep'


const AddressScreen = ({ route, navigation }) => {
  const { name, email, password, cpf, birthday } = route.params;
  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("Brasil");

  
  async function buscarCEP() {
    if (zipCode === "") {
      mostrarToast("CEP inválido");
      return;
    }

    try {
      const response = await ApiCep.get(`/${zipCode}/json/`);
      const { logradouro, bairro, localidade, uf } = response.data;
      setStreet(logradouro);
      setNeighborhood(bairro);
      setCity(localidade);
      setState(uf);
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  const goToNextScreen = () => {
    if (zipCode === "") {
      mostrarToast('O CEP é obrigatório');
      return;
    }
    if (street === "") {
      mostrarToast('O endereço é obrigatório');
      return;
    }
    if (number === "") {
      mostrarToast('O número é obrigatório');
      return;
    }
    if (neighborhood === "") {
      mostrarToast('O bairro é obrigatório');
      return;
    }
    if (city === "") {
      mostrarToast('A cidade é obrigatória');
      return;
    }
    if (state === "") {
      mostrarToast('O estado é obrigatório');
      return;
    }
    if (country === "") {
      mostrarToast('O país é obrigatório');
      return;
    }

    console.log(zipCode, street, number, neighborhood, city, state, country);
    navigation.navigate('ContactRegistre', { name, email, password, cpf, birthday, zipCode, number, street, neighborhood, city, state });
  };


  const goBack = () => {
    navigation.goBack();
  };

  const mostrarToast = (mensagem) => {
    ToastAndroid.showWithGravityAndOffset(
      mensagem,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      50,
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/HomeBackgraundLogin.png')}
        style={styles.backgroundImage}
      >
        <FontGoogle />

        <ScrollView style={styles.containerScroll} keyboardShouldPersistTaps="handled">
          <View style={styles.containerInput}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '68%' }}>
              <InputDefault
                placeholder="Busque o CEP"
                value={zipCode}
                onChangeText={setZipCode}
                keyboardType="number-pad"
                format={'XXXXX-XXX'}
              />
              <ButtonDefault onPress={buscarCEP} variant="litler" />
            </View>

            <InputDefault
              placeholder="Endereço:"
              value={street}
              onChangeText={setStreet}
              keyboardType="number-pad"
            />
            <InputDefault
              placeholder="Numero: "
              value={number}
              onChangeText={setNumber}
              keyboardType="number-pad"
            />
            <InputDefault
              placeholder="Bairro:"
              value={neighborhood}
              onChangeText={setNeighborhood}
              keyboardType="number-pad"
            />
            <InputDefault
              placeholder="Cidade:"
              value={city}
              onChangeText={setCity}
              keyboardType="number-pad"
            />
            <InputDefault
              placeholder="Estado:"
              value={state}
              onChangeText={setState}
              keyboardType="number-pad"
            />

            <View style={{ flexDirection: 'row', margin: 10 }}>
              <ButtonDefault title="Voltar" onPress={goBack} variant="cancel" />
              <ButtonDefault title="Próximo" onPress={goToNextScreen} />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default AddressScreen;