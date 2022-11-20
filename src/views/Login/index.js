import * as React from 'react';
import { Text, View, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Inputs from '../../components/inputs.js';
import InputsSenha from '../../components/inputsSenha.js';
import style from  './style';

export default function Login({navigation}) {

  return (
   
      <KeyboardAvoidingView style={style.container}>
        <StatusBar style="light" />
        <LinearGradient colors={['#65ebbe','#4458be']}  style={style.background} />

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <SafeAreaView>
          <View style={style.view}>

            <Image style={style.logo} source={require('../../assets/logoBranca.png')} />
            <View style={{top: 180}}> 

              <Inputs place='User' > </Inputs>
              <InputsSenha place='Senha'> </InputsSenha>
            </View>

            <TouchableOpacity style={style.botao} onPress={() => navigation.navigate('MainPrincipal')}> 
              <Text style={style.textLogin} >LOGIN</Text> 
            </TouchableOpacity>
        
            <Text style={style.textEsqueceuSenha}>Esqueceu sua senha?</Text> 

            <Text 
              style={style.textCadastro} 
              onPress={() => navigation.navigate('Cadastro')}>Cadastre-se
            </Text> 
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
