import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../Shared/Colors';

const Card = ({ title, imageSource, onPress, descricao, icon, iconColor }) => (
  <View style={styles.card}>
    <Image source={imageSource} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.descricao}>{descricao}</Text>
    <View style={styles.containerButton}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {/* <Text style={styles.buttonText}>Ver Mais</Text> */}
        <AntDesign  name={icon} size={20} color={iconColor} />
      </TouchableOpacity>

    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: '90%',
    margin: 10,
    backgroundColor: Colors.greenDarkSolid,
    borderColor: Colors.greenSolid,
    borderWidth: 1,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    //padding: 8,
    //justifyContent: "center",
    //alignItems: "center",
  },
  image: {
    width: "100%",
    height: 50,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
    //justifyContent:"center",
    //alignItems: "baseline",
    color: Colors.whiteSolid,
  },
  descricao: {
    fontSize: 10,
    fontWeight: 'bold',
    margin: 8,
    //justifyContent:"center",
    //alignItems: "baseline",
    color: Colors.whiteSolid,
  },
  containerButton: {
    width: "90%",
    height: 50,
    top: 10,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    //backgroundColor: "red",
  },
  button: {
    //width:"100%",
  },
  buttonText: {
    color: Colors.greenNeon,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "400",
  },
});

export default Card;