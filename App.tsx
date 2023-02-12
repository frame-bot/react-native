import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutScreen from './screens/AboutScreen';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MenuScreen from './screens/MenuScreen';
import {NativeBaseProvider} from 'native-base';
import DetailScreen from './screens/DetailScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';

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
      <HomeStack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'เข้าระบบ'}}
      />
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="AboutUs" component={AboutScreen} />
    </HomeStack.Navigator>
  );
}

const ProductStack = createNativeStackNavigator();
function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'purple'},
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerTitleAlign: 'center',
      }}>
      <ProductStack.Screen name="Product" component={ProductScreen} />
      <ProductStack.Screen name="Detail" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Drawer.Navigator
          initialRouteName="HomeStack"
          drawerContent={props => <MenuScreen {...props}></MenuScreen>}
          screenOptions={{
            headerShown: false,
          }}>
          <Drawer.Screen
            name="HomeStack"
            component={HomeStackScreen}></Drawer.Screen>
          <Drawer.Screen
            name="ProductStack"
            component={ProductStackScreen}></Drawer.Screen>
        </Drawer.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
