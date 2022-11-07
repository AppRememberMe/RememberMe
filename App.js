import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/Login'
import Cadastro from './views/Cadastro'
import MainPrincipal from './views/MainPrincipal';
import Calendario from './views/Calendario';
import MainPrioridadeBaixa from './views/MainPrioridadeBaixa';
import MainPrioridadeMedia from './views/MainPrioridadeMedia';
import MainPrioridadeAlta from './views/MainPrioridadeAlta';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="MainPrincipal" component={MainPrincipal} />
        <Stack.Screen name="Calendario" component={Calendario} />
        <Stack.Screen name="MainPrioridadeBaixa" component={MainPrioridadeBaixa} />
        <Stack.Screen name="MainPrioridadeMedia" component={MainPrioridadeMedia} />
        <Stack.Screen name="MainPrioridadeAlta" component={MainPrioridadeAlta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
