import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export type RootStackParamList = {
  Home: undefined,
  Details: { productId: string }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={Home} options={{ title: "Home Screen" }} />
          <Stack.Screen name="Details" component={Details} options={{ headerTitle: "Details Screen" }} />
        </Stack.Navigator>

      </NavigationContainer>
   
  )
}

export default App