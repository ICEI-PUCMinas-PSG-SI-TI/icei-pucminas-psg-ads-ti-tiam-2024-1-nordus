import {StyleSheet } from "react-native";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";

export default function Calendar({setData}) {

    var month = new Date().getMonth()+1;
    var year = new Date().getFullYear();
    var todaysDate = new Date(2024, month, 0);
    var qntDays =  todaysDate.toString().split(' ')[2];

    function handleDate(dataSelecionada) {
        let dataArr = dataSelecionada.split('/');
        let ano = dataArr[0];
        let mes = dataArr[1];
        let dia = dataArr[2];
  
        let stringData = ano+'-'+mes+'-'+dia;
        let data = new Date(stringData);

        setData(data);
        console.log(data);
    }

    return (
        <DatePicker
            mode='calendar'
            minimumDate={year+"/"+month+"/01"}
            maximumDate={year+"/"+month+"/"+qntDays}
            style={{borderRadius: 20}}
            onDateChange={handleDate}
            onDisabledDayError={() => console.log("hey")}
            options={{
                backgroundColor: '#353535',
                textHeaderColor: '#fff',
                textDefaultColor: '#fff',
                selectedTextColor: '#fff',
                mainColor: '#EA714C',
                textSecondaryColor: '#909090',
                borderColor: 'rgba(122, 146, 165, 0.1)',
            }}
        /> 
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#353535',
        height: 130,
        borderRadius: 20
    },
    image: {
        width: 70, 
        height:70, 
        borderRadius: 100
    },
    text: {
        color: '#fff',
    },
    item: {
        justifyContent:'center',
    }
});
