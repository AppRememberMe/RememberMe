import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/Login'
import Cadastro from './views/Cadastro'
import Main from './views/Main';
import Calendario from './views/Calendario';
import teste from './views/teste';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Calendario" component={Calendario} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
