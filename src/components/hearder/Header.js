import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../Shared/Colors';
import Icon from '../../components/icons/Icons';
import FontGoogle from '../font/FontGoogle';

const Header = ({ title, titleSucundary, profileImage, onPress }) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.navigate('UserDetail');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.textSecondary}>{titleSucundary}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Image source={require("../../../assets/icon-logo-1.png")} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent:"center",
    backgroundColor: Colors.greenSolid,
    alignItems: 'center',
    //padding: 10,
  },
  nav: {
    //marginTop: 10,
    flexDirection: 'row',
    justifyContent:"space-between",
    //left:100,
    alignItems: 'center',
    //padding: 10,
    backgroundColor: Colors.greenSolid,
  },
  profileImage: {
    width: 40,
    height: 40,
    //margin: 10,
    borderRadius: 20,
    //backgroundColor: "red",
    marginLeft: 10,
  },
  button:{
    //marginTop: 10,
    //flexDirection: 'row',
    //justifyContent:"space-between",
    alignItems: 'center',
    padding: 10,
    //backgroundColor: "red",
    //backgroundColor: Colors.greenSolid,

  },
  title: {
    color: Colors.whiteSolid,
    fontSize: 18,
    fontFamily: 'PoppinsRegular',
    lineHeight: 25,
    //backgroundColor: "red",
  },
  textSecondary: {
    color: '#89FFDB',
    fontSize: 18,
    fontFamily: 'PoppinsRegular',
    marginLeft: 10,
    //backgroundColor: "red",
  },
});

export default Header;
