import React,{useState} from "react";
import { View, Text, TouchableOpacity, FlatList} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconeOpcoes from "../../components/iconeOpcoes";
import BarraProgresso from "../../components/barraProgresso";
import BotaoAdicionar from "../../components/botaoAdicionar";
import style from  './style';



export default function MainPrioridadeMedia({navigation}){
    
  const DATA = [
    {tarefa: 'Tarefa 10'},
    {tarefa: 'Tarefa 11'},
    {tarefa: 'Tarefa 12'},
    {tarefa: 'Tarefa 13'},
    {tarefa: 'Tarefa 14'},
]
return(
        <SafeAreaView style={style.container}>
            <LinearGradient colors={['#4458be', '#65ebbe']} style={style.background}/>

            <View>      
                <View style={style.view}>

                    <Text style={style.titulo}>Prioridade Média</Text>

                    <View style={style.view1}> 
                        

                        <TouchableOpacity style={{left:10}}onPress={() => navigation.navigate('teste')}>
                            <IconeOpcoes></IconeOpcoes>
                        </TouchableOpacity>
                    </View>

                    <BarraProgresso color={'#ffe3a0'} calculo={1/5}></BarraProgresso>

                    <TouchableOpacity style={style.botaoAdicionar}>
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
                    <TouchableOpacity onPress={()=> navigation.navigate('MainPrincipal')}>
                        <View style={style.menuBranco}></View>
                    </TouchableOpacity>  
                                      
                    <TouchableOpacity  onPress={() => navigation.navigate('MainPrioridadeBaixa')}>
                        <View style={style.menuVerde}></View>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={() => navigation.navigate('MainPrioridadeMedia')}>
                        <View style={style.menuLaranja} ></View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('MainPrioridadeAlta')}>
                        <View style={style.menuVermelho} ></View>
                    </TouchableOpacity>
                </View>
            </View>
            
        </SafeAreaView>
    );
}
