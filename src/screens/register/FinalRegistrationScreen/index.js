import React, { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, Text, View, ToastAndroid } from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../../shared/Colors';
import ButtonDefault from '../../../components/buttons/ButtonDefault';
import FontGoogle from '../../../components/font/FontGoogle';
import { styles } from "./styles";
import axios from 'axios';
import { Loading } from '../../../components/Loading/index';


const FinalRegistrationScreen = ({ route, navigation }) => {

  const { name, email, password, cpf, birthday, zipCode, number, street, neighborhood, city, state, ddd, phoneNumber } = route.params;

  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const finalizarCadastro = async () => {
    try {
      const userData = {
        name: name,
        cpf: cpf,
        birthday: birthday,
        email: email,
        password: password,
        address: {
          zipCode: zipCode,
          number: number,
          street: street,
          neighborhood: neighborhood,
          city: city,
          state: state
        },
        phone: {
          ddd: ddd,
          number: phoneNumber
        },
      };

      setIsLoading(true);
      console.log(JSON.stringify(userData, null, 2));

      const response = await axios.post('http://192.168.0.18:8080/api/user/signup', userData);

      if (response.status === 201) {
        setModalVisible(true);
      } else {
        mostrarToast('Erro ao finalizar o cadastro. ' + response.data.error);
      }
    } catch (error) {
      mostrarToast('Erro ao finalizar o cadastro. Tente novamente. ' + error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('Login');
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

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/HomeBackgraundLogin.png')}
        style={styles.backgroundImage}
      >
        <FontGoogle />

        <ScrollView style={styles.containerScroll} keyboardShouldPersistTaps="handled">
          <View style={styles.containerInput} >

            <View style={styles.textContainer}>
              <Text style={styles.textPrimary}>Dados do Cadastro:</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.textSecondary}>Nome:</Text>
                <Text style={styles.textTernary}>{name}</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.textSecondary}>CPF:</Text>
                <Text style={styles.textTernary}>{cpf}</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.textSecondary}>Data de Nascimento:</Text>
                <Text style={styles.textTernary}>{birthday}</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.textSecondary}>Email:</Text>
                <Text style={styles.textTernary}>{email}</Text>
              </View>


              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.textSecondary}>Telefone:</Text>
                <Text style={styles.textTernary}>{ddd}-{phoneNumber}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: "wrap" }}>
                <Text style={styles.textSecondary}>Endereço:</Text>
                <Text style={styles.textTernary}>{street} , {number} - {neighborhood}, {city}, {state} - CEP: {zipCode}</Text>
              </View>



            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <ButtonDefault title="Voltar" onPress={goBack} variant="secondary" />
              <ButtonDefault title="Confirmar" onPress={finalizarCadastro} />
            </View>


            {isLoading && <Loading />}

            <Modal isVisible={isModalVisible} style={{ justifyContent: 'center', alignItems: 'center' }} >
              <View style={{ backgroundColor: Colors.greenSolidTransparent, justifyContent: 'center', alignItems: 'center', width: '90%', height: '35%', borderRadius: 50 }}>
                <Text style={styles.textPrimary}>Parabéns! </Text>
                <Text style={styles.textTernary}>Cadastro realizado com sucesso</Text>
                <ButtonDefault title="Fechar" onPress={closeModal} />
              </View>
            </Modal>
          </View>

        </ScrollView>

      </ImageBackground>
    </SafeAreaView >
  );
};


export default FinalRegistrationScreen;

