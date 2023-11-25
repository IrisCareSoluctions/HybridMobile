// import { Poppins_400Regular, Poppins_700Bold, Poppins_800ExtraBold, useFonts } from '@expo-google-fonts/poppins';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, Text, ToastAndroid, View, ScrollView } from 'react-native';
import Colors from '../../../Shared/Colors';
import ButtonDefault, { CalendarButton } from '../../../components/Buttons/ButtonDefault';
import InputDefault from '../../../components/Input/InputDefault';
import { styles } from "./styles";
import { isValidCPF } from "../../../Utils/cpfValidation"
import { formatToDDMMYYYY } from "../../../Utils/dataFormatting";
import FontGoogle from '../../../components/font/fontGoogle';

const PersonalInfoScreen = ({ route, navigation }) => {
  const { name, email, password } = route.params;
  const [cpf, setCPF] = useState('');
  const [birthday, setBirthday] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);


  const mostrarToast = (mensagem) => {
    ToastAndroid.showWithGravityAndOffset(
      mensagem,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      50,
    );
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);

    if (selectedDate) {
      setBirthday(selectedDate);
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  //Validações: Nascimento e CPF
  const goToNextScreen = () => {
    if (!birthday || isNaN(birthday.getTime())) {
      mostrarToast('Selecione uma data de nascimento válida');
      return;
    }

    const cleanedCPF = cpf.replace(/\D/g, '');
    const cpfRegex = /^[0-9]{11}$/;

    if (!cpfRegex.test(cleanedCPF) || !isValidCPF(cleanedCPF)) {
      mostrarToast('Digite um CPF válido');
      return;
    }

    const formattedDate = formatToDDMMYYYY(birthday);
    const formattedCPF = cleanedCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    console.log(formattedDate, formattedCPF);
    navigation.navigate('AddressRegistre', { name, email, password, cpf: formattedCPF, birthday: formattedDate });
  };


  const goBack = () => {
    navigation.goBack();
  };

  // const [fontsLoaded] = useFonts({
  //   PoppinsRegular: Poppins_400Regular,
  //   PoppinsBold: Poppins_700Bold,
  //   PoppinsExtraBold: Poppins_800ExtraBold,
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

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
              placeholder="Digite seu CPF"
              value={cpf}
              onChangeText={setCPF}
              keyboardType="number-pad"
              mask="cpf"
              format={'XXX.XXX.XXX-XX'}
            />

            <CalendarButton title="Selecione a data de nascimento" onPress={showDatePickerModal} selectedDate={birthday} />

            {showDatePicker && (
              <DateTimePicker
                value={birthday || new Date()}
                mode="date"
                display="inline"
                onChange={handleDateChange}
                textColor={Colors.greenNeon}
                renderText={(props) => (
                  <Text style={{ color: Colors.placeColor, fontSize: 14, textTransform: "uppercase" }}>
                    {birthday ? formatToDDMMYYYY(birthday) : "Selecione a data de nascimento"}
                  </Text>
                )}
              />
            )}
            <View style={{ flexDirection: "row", margin: 10 }}>
              <ButtonDefault title="Voltar" onPress={goBack} variant="secondary" />
              <ButtonDefault title="Próximo" onPress={goToNextScreen} />
            </View>

          </View>
        </ScrollView>

      </ImageBackground>
    </SafeAreaView>
  );
};

export default PersonalInfoScreen;
