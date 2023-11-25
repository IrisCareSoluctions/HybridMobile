import { createDrawerNavigator } from '@react-navigation/drawer';
import Camera from '../../screens/analysis/CameraScreen/index';
import HomePage from '../../screens/homePage/index';
import Colors from '../../Shared/Colors';
import { ImageBackground, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Loading } from '../Loading';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ route, navigation }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const mostrarToast = (mensagem) => {
    ToastAndroid.showWithGravityAndOffset(
      mensagem,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      50
    );
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

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Loading/>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Loading />
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

  const openPerfil = () => {
    const id = route.params?.id;
  
    if (id) {
      navigation.navigate('DrawerNavigator', { id: id });
    } else {
      console.error("User data or ID not available");
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/HomeBackgraundLogin.png')}
      style={{ width: '100%', height: '110%' }}
      resizeMode="cover"
    >

      <Drawer.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          drawerStyle: {
            backgroundColor: Colors.greenSolid,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            width: "60%",
            height: "60%",
            top: 40,
            justifyContent: "center",
            alignContent: "center",
          },
          drawerLabelStyle: {
            color: Colors.greenNeon,
          },
        }}
        initialParams={{ id: route.params?.id }}
      >
        <Drawer.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: `Hello ${userData.name || 'Nome do usuário'}`,
            headerStyle: {
              backgroundColor: Colors.greenSolid,
            },
            headerTitleStyle: {
              color: Colors.whiteSolid,
            },
            drawerLabelStyle: {
              color: Colors.greenSolid,
            },
            headerTintColor: Colors.whiteSolid,
            drawerActiveBackgroundColor: Colors.greenNeon,
            drawerActiveTintColor: Colors.greenSolid,
          }}
        />
        <Drawer.Screen name="Camera" component={Camera} />
      </Drawer.Navigator>
    </ImageBackground>
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
    containerScroll:{
        flex: 1,
        marginTop: 30,
    },
    containerInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#900f81',
        //marginTop: 40,
        padding: 20,
      },
      textContainer: {
        width: '100%',
        height: '80%',
        //top: 50,
        left: 10,
    },
    textPrimary: {
        color: '#ffffff',
        fontSize: 25,
        fontFamily: 'PoppinsExtraBold',
        lineHeight: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSecondary: {
        color: '#89FFDB',
        fontSize: 20,
        //fontFamily: 'PoppinsRegular',
        //lineHeight: 30,
    },
    textTernary: {
        padding: 10,
        color: '#ffffff',
        fontSize: 20,
        //fontFamily: 'PoppinsExtraBold',
        //lineHeight: 30,
        left: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    underlineContainer:{
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
        width: "140%",
        backgroundColor: '#89FFDB',
        marginVertical: 10,
        alignSelf: "center",
      },
});


export default DrawerNavigator;

