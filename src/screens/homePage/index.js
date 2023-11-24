import { View, Text, SafeAreaView, ImageBackground, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FontGoogle from '../../components/font/FontGoogle';
import ButtonDefault from '../../components/buttons/ButtonDefault';
import Card from '../../components/cardDefault/CardDefault';
import Colors from '../../shared/Colors';

export default function HomePage() {

  const goToChildren = () => {
    navigation.navigate('Camera');
  };



  const cardsData = [
    {
      id: '1',
      title: 'Baú dos Olhinhos',
      descricao: "Um arquivo carinhoso que preserva as análises da IA, protegendo os registros visuais em busca de leucocoria.",
      imageSource: require('../../../assets/analisesOlhinhos2.png'),
      onPress: goToChildren,
    },
    {
      id: '2',
      title: 'Maps',
      descricao: 'Localize com facilidade um hospital ou o posto de saúde do SUS mais próximo, proporcionando acesso rápido e eficiente aos cuidados médicos necessários.',
      imageSource: require('../../../assets/analisesOlhinhos3.png'),
      onPress: goToChildren,
    },
    // {
    //   id: '2',
    //   title: 'Alertinhas carinhosos',
    //   descricao: 'Esconde-Esconde com a Leucocoria',
    //   imageSource: require('../../../assets/icon-logo-1.png'),
    //   onPress: goToChildren,
    // },
  ];


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/HomeBackgraundLogin.png')}
        style={styles.backgroundImage}
      >
        <FontGoogle />

        <ScrollView style={styles.containerScroll} keyboardShouldPersistTaps="handled"> 

          {/* <ButtonDefault onPress={""} variant="litler" />

                <ButtonDefault title="Próximo" onPress={""}/> */}


          <ScrollView
            vertical
          >
            <View style={styles.cardGrid}>
              {cardsData.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  descricao={card.descricao}
                  imageSource={card.imageSource}
                  onPress={card.onPress}
                />
              ))}
            </View>
          </ScrollView>



          {/* 
                <InputDefault
              placeholder="Confirmar sua senha"
              value={confirmacaoPassword}
              onChangeText={setConfirmacaoPassword}
              keyboardType="default"
              secureTextEntry
            />

            <ButtonDefault title="Próximo" onPress={goToNextScreen} />

             */}

          <View style={styles.containerInput}>
            

          </View>

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  containerScroll: {
    flex: 1,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#900f81',
    marginTop: 40,
    padding: 20,
  },
  containerSearch: {
    //backgroundColor: Colors.button,
    marginTop: "10%",
    height: "100%",
  },
  search: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  containerScroll: {
    width: "100%",
    //backgroundColor: "rgba(32, 65, 68, 0.30)",
    //marginTop: 10,
    //height:"100%",
    //backgroundColor: Colors.whiteSolid,
    padding: 4,
  },
  scroll: {
    //flex: 1,
    width: "100%",
    //marginTop: 10,
    backgroundColor: Colors.whiteSolid,
  },
  backgraundLogin: {
    //marginTop: 120,
    //width: "100%",
    //alignSelf: "center",
    //borderRadius: 15,
    //padding: 20,
    //backgroundColor: "rgba(15, 32, 42, 1)",
    //position: 'absolute',
  },
  textPrimary: {
    color: Colors.greenSolid,
    fontSize: 15,
    fontFamily: 'PoppinsExtraBold',
  },
  textSecondary: {
    color: '#89FFDB',
    fontSize: 18,
    fontFamily: 'PoppinsRegular',
    lineHeight: 25,
  },
  icon: {
    width: 56,
    height: 56,
    alignSelf: "center",
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 15,
    borderColor: "#89FFDB",
    borderWidth: 2,
    fontSize: 18,
    backgroundColor: "#ffffff",
  },
  InputIcon: {
    left: "-8%",
  },
  underlineContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    alignItems: 'center',
    margin: 2,
  },
  underline: {
    height: 1,
    width: "40%",
    backgroundColor: '#89FFDB',
    marginVertical: 10,
    alignSelf: "center",
  },
  loginSocial: {
    height: 100,
    width: '80%',
    justifyContent: 'center',
    marginVertical: 10,
  },
  touchableOpacity: {
    backgroundColor: Colors.button,
    padding: 10,
    //marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '',
    marginLeft: 5,
  },
  iconLoginSocial: {
    width: 30,
    height: 30,
    alignSelf: "center",
    marginBottom: 10,
  },
  containerCadastro: {
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 30,
  },
  textoRodape: {
    color: "#8F8A8A",
    marginTop: 20,
    fontSize: 15,
  },
  textoLink: {
    color: '#89FFDB',
    marginTop: 20,
    fontSize: 15,
    letterSpacing: 1,
  },
  card: {
    padding: 5,
    //margin: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  text: {
    color: 'black',
    marginBottom: 8,
  },
  widget: {
    //backgroundColor: 'lightblue',
    padding: 50,
    marginBottom: 10,
  },
  scroll: {
    flexDirection: 'row',
    padding: 2,
    marginTop: 20,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 2,
  },
  cardGrid: {
    flex: 1,
    //flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    padding: 16,
  },
  geo: {
    width: '100%', // Ocupa a largura total da tela
    height: 100,   // Define a altura desejada
    marginTop: 390,
    //backgroundColor: 'red',
  },



});
