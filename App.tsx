import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutScreen from './screens/AboutScreen';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MenuScreen from './screens/MenuScreen';

const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'purple'},
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerTitleAlign: 'center',
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="AboutUs" component={AboutScreen} />
    </HomeStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        drawerContent={(props) => <MenuScreen {...props}></MenuScreen>}
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen
          name="HomeStack"
          component={HomeStackScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
