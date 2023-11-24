import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; 
import Colors from '../../shared/Colors';

const Header = ({ title, profileImage }) => {
 const navigation = useNavigation(); 

 const openDrawer = () => {
   navigation.navigate('Camera');
 };

 return (
   <SafeAreaView style={styles.container}>
     <View style={styles.nav}>
       <TouchableOpacity onPress={openDrawer}>
         <Image source={profileImage} style={styles.profileImage} />
       </TouchableOpacity>
       <Text style={styles.title}>{title}</Text>
     </View>
   </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: Colors.greenSolid,
   padding: 10,
 },
 nav: {
   marginTop: 25,
   alignItems: 'center',
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: Colors.greenSolid,
 },
 profileImage: {
   width: 50,
   height: 50,
   borderRadius: 20,
   marginRight: 10,
 },
 title: {
   fontSize: 18,
   color: '#fff',
   fontWeight: 'bold',
   justifyContent: 'center',
 },
});

export default Header;
