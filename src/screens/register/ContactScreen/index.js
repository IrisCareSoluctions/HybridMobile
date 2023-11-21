// import { Poppins_400Regular, Poppins_700Bold, Poppins_800ExtraBold, useFonts } from '@expo-google-fonts/poppins';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, Text, TextInput, Button, ToastAndroid, View, ScrollView } from 'react-native';
import Colors from '../../../shared/Colors';
import ButtonDefault, { CalendarButton } from '../../../components/buttons/ButtonDefault';
import InputDefault from '../../../components/Input/InputDefault';
import { styles } from "./styles";
import { isValidCPF } from "../../../utils/cpfValidation"
import { formatToDDMMYYYY } from "../../../utils/dataFormatting";
import FontGoogle from '../../../components/font/FontGoogle';

const ContactScreen = ({ route, navigation }) => {
  const { name, email, password, cpf, birthday, zipCode, number, street, neighborhood, city, state } = route.params;
  const [ddd, setDDD] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const goToNextScreen = () => {
    if (ddd === "") {
      mostrarToast('O DDD é obrigatório');
    } else if (phoneNumber === "") {
      mostrarToast('O telefone é obrigatório');
    } else {
      navigation.navigate('FinalRegistrationRegistre', { name, email, password, cpf, birthday, zipCode, number, street, neighborhood, city, state, ddd, phoneNumber });
    }
    console.log(name, email, password, cpf, birthday, zipCode, number, street, neighborhood, city, state, ddd, phoneNumber);
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
            <InputDefault
              placeholder="Digite seu DDD"
              value={ddd}
              onChangeText={(text) => {
                if (text.length <= 2) {
                  setDDD(text);
                }
              }}
              keyboardType="number-pad"
              format={'XX'}
            />

            <InputDefault
              placeholder="Digite seu numero"
              value={phoneNumber}
              onChangeText={(text) => {
                if (text.length <= 9) {
                  setPhoneNumber(text);
                }
              }}
              keyboardType="number-pad"

            />

            <View style={{ flexDirection: "row", margin: 10 }}>
              <ButtonDefault title="Voltar" onPress={goBack} variant="cancel" />
              <ButtonDefault title="Próximo" onPress={goToNextScreen} />
            </View>
          </View>

        </ScrollView>

      </ImageBackground>
    </SafeAreaView>
  );
};

export default ContactScreen;
