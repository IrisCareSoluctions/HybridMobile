import React, { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, View } from 'react-native';
import { Loading } from '../../components/Loading';
import Card from '../../components/cardDefault/CardDefault';
import FontGoogle from '../../components/font/FontGoogle';
import Header from '../../components/hearder/Header';
import { styles } from "./styles";
import { Text } from 'react-native';
import ButtonDefault from '../../components/buttons/ButtonDefault';
import Colors from '../../shared/Colors';

export default function HomePage({ route, navigation }) {
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


  const goToChildren = () => {
    navigation.navigate('Camera');
  };

  const cardsData = [
    {
      id: '1',
      title: 'Baú dos Olhinhos',
      descricao: "Um arquivo carinhoso que preserva as análises da IA, protegendo os registros visuais em busca de leucocoria.",
      imageSource: require('../../../assets/analisesOlhinhos2.png'),
      icon: "right",
      iconColor: Colors.greenNeon,
      onPress: openCreateChild,
    },
    {
      id: '2',
      title: 'Maps',
      descricao: 'Localize com facilidade um hospital ou o posto de saúde do SUS mais próximo, proporcionando acesso rápido e eficiente aos cuidados médicos necessários.',
      imageSource: require('../../../assets/analisesOlhinhos3.png'),
      onPress: openCreateChild,
    },
  ];

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }

  const openCreateChild = () => {
    const id = route.params?.id;

    if (id) {
      navigation.navigate('CreateChild', { id: id });
    } else {
      console.error("User data or ID not available");
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/HomeBackgraundLogin.png')}
        style={styles.backgroundImage}
      >
        <FontGoogle />

        <View style={styles.textContainer}>
          <Text style={styles.textSecondary}>Hello!</Text>
          <Text style={styles.textPrimary}>
            {(userData.name || 'Nome do usuário')}
          </Text>
          {/* <Text style={styles.textPrimary}>Cadastrados</Text> */}
        </View>

        <View style={styles.underlineContainer}>
          <View style={styles.underline} />
        </View>




        {/* <Header
          title="Hello!"
          titleSucundary={`${userData.name || 'Nome do usuário'}`}
          onPress={""}
        /> */}


        {/* <ScrollView style={styles.containerScroll} keyboardShouldPersistTaps="handled"> */}
        <ScrollView style={styles.containerScroll}
          vertical>
          <View style={styles.cardGrid}>
            {cardsData.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                descricao={card.descricao}
                imageSource={card.imageSource}
                icon={card.icon}
                iconColor={card.iconColor}
                onPress={card.onPress}
              />
            ))}
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <ButtonDefault onPress={openCreateChild}
              variant="litler"
              //title={"Adicione criança"}
              icon="adduser"
              iconColor={Colors.button}
              style={{ color: "white", borderColor: Colors.button, backgroundColor: "transparent", }}
            />

            <ButtonDefault onPress={openCreateChild}
              variant="litler"
              //title={"Adicione criança"}
              icon="adduser"
              iconColor={Colors.button}
              style={{ color: "white", borderColor: Colors.button, backgroundColor: "transparent", }}
            />

            <ButtonDefault onPress={openCreateChild}
              variant="litler"
              //title={"Adicione criança"}
              icon="adduser"
              iconColor={Colors.button}
              style={{ color: "white", borderColor: Colors.button, backgroundColor: "transparent", }}
            />
          </View>
        </ScrollView>




        <View style={styles.containerButton}>
        </View>



      </ImageBackground>
    </SafeAreaView>
  );
}
