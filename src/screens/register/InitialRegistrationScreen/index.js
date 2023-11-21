import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, ScrollView, Text, ToastAndroid, View } from 'react-native';
import ButtonDefault from '../../../components/buttons/ButtonDefault';
import InputDefault from '../../../components/Input/InputDefault';
import FontGoogle from '../../../components/font/FontGoogle';
import { styles } from "./styles";


const InitialRegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmacaoEmail, setConfirmacaoEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmacaoPassword, setConfirmacaoPassword] = useState('');

  const mostrarToast = (mensagem) => {
    ToastAndroid.showWithGravityAndOffset(
      mensagem,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      50,
    );
  };

  const goToNextScreen = () => {
    if (name === "") {
      mostrarToast('O nome é obrigatório');
    } else if (email === "") {
      mostrarToast('O e-mail é obrigatório');
    } else if (confirmacaoEmail === "") {
      mostrarToast('A confirmação do e-mail é obrigatória');
    } else if (email !== confirmacaoEmail) {
      mostrarToast('Os campos de e-mail devem coincidir');
    } else if (password === "") {
      mostrarToast('A senha é obrigatória');
    } else if (confirmacaoPassword === "") {
      mostrarToast('A confirmação da senha é obrigatória');
    } else if (password !== confirmacaoPassword) {
      mostrarToast('Os campos de senha devem coincidir');
    } else if (password.length < 8) {
      mostrarToast('A senha deve ter pelo menos 8 caracteres');
    } else {
      navigation.navigate('PersonalInfoRegistre', { name, email, password });
    }
    console.log(name, email, password);
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
            <InputDefault
              placeholder="Digite o Nome"
              value={name}
              onChangeText={setName}
              keyboardType="default"
            />

            <InputDefault
              placeholder="Digite o e-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="default"
            />

            <InputDefault
              placeholder="Confirmar o e-mail"
              autoCompleteType="off"
              value={confirmacaoEmail}
              onChangeText={setConfirmacaoEmail}
              keyboardType="default"
            />

            <InputDefault
              placeholder="Digite sua senha"
              value={password}
              onChangeText={setPassword}
              keyboardType="default"
              secureTextEntry
            />

            <InputDefault
              placeholder="Confirmar sua senha"
              value={confirmacaoPassword}
              onChangeText={setConfirmacaoPassword}
              keyboardType="default"
              secureTextEntry
            />

            <ButtonDefault title="Próximo" onPress={goToNextScreen} />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default InitialRegistrationScreen;
