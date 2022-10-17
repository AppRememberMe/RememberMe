import React from "react";
import { View, Text, } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from  './style';
import CalendárioC from "../../components/calendario";
import IconeCalendario from "../../components/iconeCalendario";

export default function Calendario({navigation}){
    return(

        <SafeAreaView style={style.container}>
            <LinearGradient colors={['#65ebbe','#4458be']} style={style.background}/>

            <View style={style.view}>
              <Text style={style.textAgenda}>Agenda</Text>
            </View>
            
            <CalendárioC></CalendárioC>
            
            <View style={style.menuBranco}></View>
            <View style={style.menuVerde}></View>
            <View style={style.menuLaranja}></View>
            <View style={style.menuVermelho}></View>
            
        </SafeAreaView>
    );
}
