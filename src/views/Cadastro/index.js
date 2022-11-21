import React, {useState} from 'react';
import { Text, View, TextInput, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Inputs from '../../components/inputs.js';
import InputsSenha from '../../components/inputsSenha.js';
import { MaterialIcons } from '@expo/vector-icons';
import style from  './style';

export default function Cadastro({navigation}) {

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const[login, setLogin] = useState(null);


  //envio do formulario de cadastro
  async function cadastro(){

    let res = await fetch('http://192.168.0.15:3000/usuarios/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user,
        email: email,
        senha: senha,
      })
    });
  }

  return (
    
    <KeyboardAvoidingView style={style.container}>
      <StatusBar style="light" />
      <LinearGradient colors={['#65ebbe','#4458be']}  style={style.background} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView >
          <View style={style.view}>
            <Image style={style.logo} source={require('../../assets/logoBranca.png')} />

            <View style={{top: 150}}> 
                <Inputs place='Usuário' onChangeText={(text) => setUser(text)}> </Inputs>
                
                <TextInput style={style.input} placeholder='Email' placeholderTextColor="rgba(255, 255, 255, 0.68)" onChangeText={(text) => setEmail(text)}/>

                <View style={style.icon}> 
                    <MaterialIcons name="email" size={20} color="#fff" />            
                </View>
                <View style={{bottom:20}}>
                    <InputsSenha place='Senha' > </InputsSenha>
                </View>
                <View style={{bottom:30}}>
                    <InputsSenha place='Confirmar senha' onChangeText={(text) => setSenha(text)}> </InputsSenha>
                </View>
            </View>

            <TouchableOpacity style={style.botao} onPress={() => cadastro()}> 
                <Text style={style.textCadastrar}>CADASTRAR</Text> 
            </TouchableOpacity>
            <Text 
                style={style.textEntrar} 
                onPress={() => navigation.navigate('Login')}>Entrar
            </Text>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
