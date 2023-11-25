import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, Text, ToastAndroid, View } from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../../Shared/Colors';
import ButtonDefault from '../../../components/Buttons/ButtonDefault';
import InputDefault from '../../../components/Input/InputDefault';
import { Loading } from '../../../components/Loading/index';
import { styles } from "./styles";

const UserDetailsScreen = ({ route, navigation }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({
    name: '',
    cpf: '',
    birthday: '',
    email: '',
    password: '',
  });

  const mostrarToast = (mensagem) => {
    ToastAndroid.showWithGravityAndOffset(
      mensagem,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      50
    );
  };


  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  function formatToDDMMYYYY(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mês é base 0, então somamos 1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  

  //CRUD USER - GET (esta listando os dados do usuario  por ID)
  useEffect(() => {
    const fetchUserData = async () => {
      const id = route.params?.id;

      if (id) {
        try {
          const apiUrl = `http://192.168.0.18:8080/api/user/${id}`;
          const response = await fetch(apiUrl);

          if (response.ok) {
            const userJson = await response.json();
            setUserData(userJson);
            setLoading(false);
            console.log("User Data:", userJson);
          } else {
            console.error("Error fetching user data:", response.statusText);
            setLoading(false);
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [route.params?.id]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Loading/>
      </View>
    );
  }

  if (!userData) {
    return (
      <View>
        <Text style={styles.textPrimary}>Error loading user data.</Text>
      </View>
    );
  }


  //CRUD USER - PUT (por id)
  const handleUpdateUserDetails = async () => {
    try {
      const birthdayDate = new Date(userData.birthday);
  
      // Objeto para enviar no corpo da solicitação
      const requestData = {
        name: updatedUserData.name || userData.name,
        cpf: updatedUserData.cpf || userData.cpf,
        birthday: formatToDDMMYYYY(birthdayDate),
        email: updatedUserData.email || userData.email,
        password: updatedUserData.password || userData.password,
      };
  
      // Objeto para exibir no console (mantendo a data no formato original)
      const updatedData = {
        name: updatedUserData.name || userData.name,
        cpf: updatedUserData.cpf || userData.cpf,
        birthday: userData.birthday,
        email: updatedUserData.email || userData.email,
        password: updatedUserData.password || userData.password,
      };
  
      console.log("Updated Data:", updatedData);
  
      if (
        Object.keys(updatedData).some((key) => updatedData[key] !== userData[key])
      ) {
        const apiUrl = `http://192.168.0.18:8080/api/user/${userData.id}`;
  
        console.log("Making PUT request with data:", requestData);
  
        const headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        };
  
        const response = await axios.put(apiUrl, requestData, { headers });
  
        console.log("Response from server:", response);
  
        if (response.status === 200) {
          setUpdateModalVisible(false);
          mostrarToast("Dados do usuário atualizados com sucesso!");
          fetchUserData();
        } else {
          console.error("Error updating user details:", response.statusText);
        }
      } else {
        console.log("No changes to update.");
      }
    } catch (error) {
      console.error("Error updating user details:", error.message);
    }
  };
  
   

//CRUD USER - DELETE (por id) -> EXCLUINDO TAMBEM O crud do LOGIN
  const handleDeleteAccount = async () => {
    const id = route.params?.id;

    try {
      const apiUrl = `http://192.168.0.18:8080/api/user/${id}`;
      const response = await axios.delete(apiUrl);

      if (response.status === 204) {
        navigation.navigate('Login');
        mostrarToast("Usuário excluído");
        setDeleteModalVisible(false); 
      } else {
        console.error("Error deleting user account:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting user account:", error.message);
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/HomeBackgraundLogin.png')}
        style={styles.backgroundImage}
      >
        {/* <FontGoogle /> */}

        <ScrollView style={styles.containerScroll} keyboardShouldPersistTaps="handled">
          <View style={styles.containerInput} >

            <View style={styles.textContainer}>

              <Text style={styles.textPrimary}>Dados</Text>
              <Text style={styles.textPrimary}>Cadastrados</Text>
              <View style={styles.underlineContainer}>
                <View style={styles.underline} />
              </View>


              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.textSecondary}>Nome:</Text>
                <Text style={styles.textTernary}>{userData.name}</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.textSecondary}>CPF:</Text>
                <Text style={styles.textTernary}>{userData.cpf}</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.textSecondary}>Data de Nascimento:</Text>
                <Text style={styles.textTernary}>{userData.birthday}</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.textSecondary}>Email:</Text>
                <Text style={styles.textTernary}>{userData.email}</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.textSecondary}>Telefone:</Text>
                <Text style={styles.textTernary}>{userData.phone.ddd}-{userData.phone.number}</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: "wrap" }}>
                <Text style={styles.textSecondary}>Endereço:</Text>
                <Text style={styles.textTernary}>{userData.address.street} , {userData.address.number} - {userData.address.neighborhood}, {userData.address.city}, {userData.address.state} - CEP: {userData.address.zipCode}</Text>
              </View>

            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <ButtonDefault title="Atualizar" onPress={() => setUpdateModalVisible(true)} variant="secondary" />
              <ButtonDefault title="Excluir" onPress={() => setDeleteModalVisible(true)} variant="cancel" />
            </View>


            {isLoading && <Loading />}

            {/* Modal para atualizar */}
            <Modal isVisible={isUpdateModalVisible} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor: Colors.greenSolidTransparent, justifyContent: 'center', alignItems: 'center', width: '90%', height: '60%', borderRadius: 50 }}>
                <Text style={styles.textPrimary}>Atualizar Dados</Text>
                <InputDefault
                  style={styles.input}
                  placeholder={userData.name}
                  value={updatedUserData.name}
                  onChangeText={(text) => setUpdatedUserData((prevData) => ({ ...prevData, name: text }))}
                />


                <InputDefault
                  style={styles.input}
                  placeholder={userData.cpf}
                  value={updatedUserData.cpf}
                  mask="cpf"
                  format={'XXX.XXX.XXX-XX'}
                  keyboardType="number-pad"
                  onChangeText={(text) => setUpdatedUserData((prevData) => ({ ...prevData, cpf: text }))}
                />

                <InputDefault
                  style={styles.input}
                  placeholder={userData.email}
                  value={updatedUserData.email}
                  onChangeText={(text) => setUpdatedUserData((prevData) => ({ ...prevData, email: text }))}
                />

                <InputDefault
                  style={styles.input}
                  placeholder="Digite uma nova senha"
                  value={updatedUserData.password}
                  onChangeText={(text) => setUpdatedUserData((prevData) => ({ ...prevData, password: text }))}
                />

                <View style={{ flexDirection: "row" }}>
                  <ButtonDefault title="Cancelar" onPress={() => setUpdateModalVisible(false)} variant="secondary" style={{ width: '40%' }} />
                  <ButtonDefault title="Confirmar" onPress={handleUpdateUserDetails} style={{ width: '40%' }} />
                </View>
              </View>
            </Modal>

            <Modal isVisible={isDeleteModalVisible} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor: Colors.greenSolidTransparent, justifyContent: 'center', alignItems: 'center', width: '90%', height: '40%', borderRadius: 50 }}>
                <Text style={styles.textPrimary}>Confirma que deseja cancelar sua conta?! </Text>
                <View style={{ flexDirection: "row" }}>
                  <ButtonDefault title="Cancelar" onPress={() => setDeleteModalVisible(false)} variant="secondary" style={{ width: '40%' }} />
                  <ButtonDefault title="Confirmar" onPress={handleDeleteAccount} variant="cancel" style={{ width: '40%' }} />
                </View>
              </View>
            </Modal>
          </View>

        </ScrollView>

      </ImageBackground>
    </SafeAreaView >
  );
};

export default UserDetailsScreen;
