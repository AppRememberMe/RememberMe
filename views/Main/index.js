import React,{useState} from "react";
import { View, Text, TouchableOpacity, FlatList} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconeCalendario from "../../components/iconeCalendario";
import IconeOpcoes from "../../components/iconeOpcoes";
import BotaoAdicionar from "../../components/botaoAdicionar";
import style from  './style';
import moment from 'moment';
import 'moment/locale/pt-br';

moment().format();
moment.locale('pt-br');

var data1 = moment().format('MMM') + ', ' + moment().format('YYYY');   
var data2 = moment().format('dddd') + ', ' + moment().format('DD');  
 
export default function Main({navigation}){
    
  const DATA = [
    {tarefa: 'Dormir'},
    {tarefa: 'Tarefa 2'},
    {tarefa: 'Tarefa 3'},
    {tarefa: 'Tarefa 4'},
    {tarefa: 'Tarefa 5'},
    {tarefa: 'Tarefa 6'},
    {tarefa: 'Tarefa 7'},
    {tarefa: 'Tarefa 8'},
    {tarefa: 'Tarefa 9'},
    {tarefa: 'Tarefa 10'},
]
return(
        <SafeAreaView style={style.container}>
            <LinearGradient colors={['#65ebbe','#4458be']} style={style.background}/>

            <View>      
                <View style={style.view}>
                    <Text style={style.data1}>{data1[0].toUpperCase() + data1.substr(1)}</Text>
                    <Text style={style.data2}>{data2[0].toUpperCase() + data2.substr(1)}</Text>

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
                    
                    <FlatList
                        style={style.flatList}
                        data={DATA}
                        renderItem={({item}) => (
                            <View style={style.viewList}>
                                <Text style={style.textList}>{item.tarefa}</Text>
                            </View> 
                        )}
                    />
                    
                </View>

                <View style={style.menu}>
                    <View style={style.menuBranco}></View>
                    <View style={style.menuVerde}></View>
                    <View style={style.menuLaranja}></View>
                    <View style={style.menuVermelho}></View>
                </View>
            </View>
            
        </SafeAreaView>
    );
}
