import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Inputs from '../../components/inputs.js'
import InputsSenha from '../../components/inputsSenha.js'


export default function Login({navigation}) {
  return (
   
      <KeyboardAvoidingView style={style.container}>
        <StatusBar style="light" />
        <LinearGradient colors={['#65ebbe','#4458be']}  style={style.background} />

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <View style={style.view}>

            <Image style={style.Logo} source={require('../../assets/logoBranca.png')} />
            <View style={{top: 180}}> 

              <Inputs place='Usuário' > </Inputs>
              <InputsSenha place='Senha'> </InputsSenha>
            </View>

            <TouchableOpacity style={style.Botao} onPress={() => navigation.navigate('')}> 
                <Text style={{color:'#508ebe', fontSize:16, textAlign: 'center', letterSpacing: 2}} >LOGIN</Text> 
            </TouchableOpacity>
        
            <Text style={{color:'#fff', fontSize:10, textAlign: 'center', letterSpacing: 2, top: 180 }}>Esqueceu sua senha?</Text> 

            <Text 
              style={{color:'#fff', fontSize:12, textAlign: 'center', letterSpacing: 2, top: 220, textDecorationLine: 'underline'}} 
              onPress={() => navigation.navigate('Cadastro')}>Casdatre-se
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
    padding: '18%',
    top: 130,
  },
  Botao: {
    backgroundColor: '#fff',
    width: 250,
    borderRadius: 10,
    padding: 6,
    height: 40,
    top: 170 
  },
});
