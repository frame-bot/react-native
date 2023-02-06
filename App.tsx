import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutScreen from './screens/AboutScreen';

function App() {
  const HomeStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

export default App;
