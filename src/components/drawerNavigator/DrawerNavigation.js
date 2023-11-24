import { createDrawerNavigator } from '@react-navigation/drawer';
import Camera from '../../screens/analysis/CameraScreen/index';
import HomePage from '../../screens/homePage/index';
import Colors from '../../shared/Colors';
import { ImageBackground } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <ImageBackground
      source={require('../../../assets/HomeBackgraundLogin.png')}
      style={{width: '100%', height: '110%'}}
      resizeMode="cover" 
    >

      <Drawer.Navigator screenOptions={{
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
      >
        <Drawer.Screen
          name="HomePage"
          component={HomePage}
          //title="test"
          options={({ route }) => ({
            title: `Hello ${route.params?.userName || 'Nome do usuario'}`,
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
          })}
        />
        <Drawer.Screen name="Camera" component={Camera} />

      </Drawer.Navigator>
    </ImageBackground>
  );
}


export default DrawerNavigator;

