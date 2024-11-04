import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/RegisterScreen';
import HomeApp from './screens/HomeScreen';
import { UserProvider } from './UserContext';
import ProductList from './screens/ProductList';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Register' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeApp} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Product' component={ProductList} />
        <Stack.Screen name="Register" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
    
  );
}

export default App;