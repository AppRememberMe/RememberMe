import React,{useState} from "react";
import { View, Text, TouchableOpacity, FlatList} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconeCalendario from "../../components/iconeCalendario";
import IconeOpcoes from "../../components/iconeOpcoes";
import BotaoAdicionar from "../../components/botaoAdicionar";
import style from  './style';



export default function MainPrioridadeBaixa({navigation}){
    
  const DATA = [
    {tarefa: 'Dormir'},
    {tarefa: 'Comer'},
    {tarefa: 'Banhar'},

]
return(
        <SafeAreaView style={style.container}>
            <LinearGradient colors={['#4458be', '#65ebbe']} style={style.background}/>

            <View>      
                <View style={style.view}>

                    <Text style={style.titulo}>Prioridade Baixa</Text>

                    <View style={style.view1}> 
                        <TouchableOpacity onPress={() => navigation.navigate('Calendario')}>
                            <IconeCalendario> </IconeCalendario>
                        </TouchableOpacity>

                        <TouchableOpacity style={{left:10}}onPress={() => navigation.navigate('teste')}>
                            <IconeOpcoes></IconeOpcoes>
                        </TouchableOpacity>
                    </View>

                    <Text> barra de progesso aqui</Text>

                    <TouchableOpacity style={style.botaoAdicionar} onPress={() => navigation.navigate('Login')}>
                        <BotaoAdicionar></BotaoAdicionar>
                    </TouchableOpacity>
                    
                    <View style={style.flatList}>
                        <FlatList
                        data={DATA}
                        renderItem={({item}) => (
                            <View style={style.viewList}>
                                <Text style={style.textList}>{item.tarefa}</Text>
                            </View> 
                        )}
                    />
                    </View>
                    
                </View>

                <View style={style.menu}>
                    <TouchableOpacity  onPress={() => navigation.navigate('MainPrincipal')}>
                        <View style={style.menuBranco}></View>
                    </TouchableOpacity>
                    <View style={style.menuVerde}></View>
                    <View style={style.menuLaranja}></View>
                    <View style={style.menuVermelho}></View>
                </View>
            </View>
            
        </SafeAreaView>
    );
}
