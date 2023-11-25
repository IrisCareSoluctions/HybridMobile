import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const UserDetailsScreen = ({ route }) => {
  const [userData, setUserData] = useState(null);


  return (
    <View>
        <Text>Carregando...</Text>
     </View>
  );
  
};

export default UserDetailsScreen;
