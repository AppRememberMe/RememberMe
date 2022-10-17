import React from "react";
import { StyleSheet, View } from "react-native";
import {Calendar , CalendarList , Agenda} from 'react-native-calendars';
import moment from 'moment';
import 'moment/locale/pt-br';

moment().format();
moment.locale('pt-br');

//https://www.npmjs.com/package/react-native-calendars

export default function CalendárioC(){
    return(
        <View style={style.view} >
            < Calendar 
                // Mês inicialmente visível. Default = now 
                initialDate = {moment().format()} 
                onDayPress={day => {console.log( day);}}
                monthFormat = { 'MMMM, yyyy' } 

                theme = { { 
                    todayTextColor : 'red' , 
                    dayTextColor : '#4771b3' , 
                    arrowColor : '#4771b3' , 
                    monthTextColor : '#4771b3' ,
                    textmontmontsize : ' bold ' ,                    
                } } 
                    
            / >
        </View>
    )
}
const style = StyleSheet.create({
    view:{
        width:'80%',
        top: 250,
        left: 70,
        position: 'absolute',
        borderColor : 'gray'
    }
})
