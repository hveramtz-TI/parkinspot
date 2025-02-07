import { enableScreens } from 'react-native-screens';
enableScreens();

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homeScreen';
import DetailsScreen from './src/screens/detailScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Oculta el encabezado para la pantalla Home
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ headerShown: false }} // Oculta el encabezado para la pantalla Details
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Oculta el encabezado para la pantalla Login
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;