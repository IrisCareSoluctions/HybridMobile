import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon, { Icons } from '../icons/Icons';
import Colors from '../../shared/Colors';
import ColorScreen from '../../shared/ColorScreen';
import * as Animatable from 'react-native-animatable';
import HomePage from '../../screens/homePage/index';
import Drawer from '../../components/drawerNavigator/DrawerNavigation';
import Camera from '../../screens/analysis/CameraScreen/index';
import CameraScreen from '../../screens/analysis/CameraScreen/index';
import UserProfileScreen from '../../screens/user/UserProfileScreen';
import UserDetailsScreen from '../../screens/user/UserDetailsScreen/UserDetailsScreen';
import { useAuth } from '../../hooks/AuthContext';

const TabArr = [
  { route: 'HomePage', label: 'HomePage', type: Icons.Ionicons, activeIcon: 'home', inActiveIcon: 'home-outline', component: HomePage },
  { route: 'Camera', label: 'Camera', type: Icons.AntDesign, activeIcon: 'camera', inActiveIcon: 'camerao', component: CameraScreen },
  { route: 'Account', label: 'Account', type: Icons.FontAwesome, activeIcon: 'user-circle', inActiveIcon: 'user-circle-o', component: UserProfileScreen },
  { route: 'UserDetailsScreen', label: 'Account', type: Icons.FontAwesome, activeIcon: 'user-circle', inActiveIcon: 'user-circle-o', component: UserDetailsScreen },
];

// const TabArr = [
//   { route: 'Home', label: 'Home', type: Icons.Ionicons, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: ColorScreen },
//   { route: 'Like', label: 'Like', type: Icons.MaterialCommunityIcons, activeIcon: 'heart-plus', inActiveIcon: 'heart-plus-outline', component: ColorScreen },
//   { route: 'Search', label: 'Search', type: Icons.MaterialCommunityIcons, activeIcon: 'timeline-plus', inActiveIcon: 'timeline-plus-outline', component: ColorScreen },
//   { route: 'Account', label: 'Account', type: Icons.FontAwesome, activeIcon: 'user-circle', inActiveIcon: 'user-circle-o', component: ColorScreen },
// ];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { route, navigation } = props;
  const { id } = route.params?.user || {};
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({ 0: { scale: .5, rotate: '0deg' }, 1: { scale: 1.5, rotate: '360deg' } });
    } else {
      viewRef.current.animate({ 0: { scale: 1.5, rotate: '360deg' }, 1: { scale: 1, rotate: '0deg' } });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(item.route, { id });
      }}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? Colors.greenSolid : Colors.greenDarkSolid} />
      </Animatable.View>
    </TouchableOpacity>
  )
}

export default function TabNavigator({ route, navigation }) {
  const { authData } = useAuth();
  const { id } = authData;

  const [userData, setUserData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Lógica para obter dados do usuário a partir do ID
    const fetchUserData = async () => {
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
  }, [id]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
          backgroundColor: Colors.greenNeon,
        }
      }}
    >
      {TabArr.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={({ route, navigation }) => ({
            tabBarShowLabel: false,
            tabBarButton: (props) => (
              <TabButton {...props} item={item} route={route} navigation={navigation} />
            ),
          })}
        />
      ))}
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
