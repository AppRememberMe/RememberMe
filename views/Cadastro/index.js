import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Inputs from '../../components/inputs.js';
import InputsSenha from '../../components/inputsSenha.js';
import { MaterialIcons } from '@expo/vector-icons';

export default function Cadastro({navigation}) {
  return (
    
    <KeyboardAvoidingView style={style.container}>
      <StatusBar style="light" />
      <LinearGradient colors={['#65ebbe','#4458be']}  style={style.background} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView>
            <View style={style.view}>
                <Image style={style.Logo} source={require('../../assets/logoBranca.png')} />

                <View style={{top: 150}}> 
                    <Inputs place='Usuário'> </Inputs>
                    
                    <TextInput style={style.input} 
                    placeholder='Email' 
                    placeholderTextColor="rgba(255, 255, 255, 0.68)"/>

                    <View style={style.icon}> 
                        <MaterialIcons name="email" size={20} color="#fff" />            
                    </View>
                    <View style={{bottom:20}}>
                        <InputsSenha place='Senha'> </InputsSenha>
                    </View>
                    <View style={{bottom:30}}>
                        <InputsSenha place='Senha'> </InputsSenha>
                    </View>
                </View>

                <TouchableOpacity style={style.Botao}> 
                    <Text style={{color:'#508ebe', fontSize:16, textAlign: 'center', letterSpacing: 2}}>CADASTRAR</Text> 
                </TouchableOpacity>
                <Text 
                    style={{color:'#fff', fontSize:12, textAlign: 'center', letterSpacing: 2, top: 150 , textDecorationLine: 'underline'}} 
                    onPress={() => navigation.navigate('Login')}>Entrar
                </Text>
            </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>


  );
}
const style = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    justifyContent: "space-around",
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  Logo: {
    padding: '15%',
    top: 120,
  },
  input: {
    width: 250,
    height: 50,
    marginBottom: 10,
    padding: 6,
    bottom: 20,
    borderRadius: 5,
    fontSize: 12,
    letterSpacing: 2,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center', 
    borderBottomColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth
    },
    icon:{
        bottom: 65, 
        left:12, 
        width: 20
    },
  Botao: {
    backgroundColor: '#fff',
    width: 250,
    borderRadius: 10,
    padding: 6,
    height: 40,
    top: 110 
  }
});
