import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
export default function Dia({dataSTR}) {

    const arrDataSTR = dataSTR.split(' ');
    const diaSemana = arrDataSTR[0];
    const diaSemanaNumerico = arrDataSTR[2];


    return (
        <View style={{backgroundColor: Colors.DARKER_GRAY, width: 72, padding: 8, borderRadius: 10}} >
            <Text style={{ fontSize: 28, color: '#fff', fontWeight:'800', textAlign: 'center'}}>
                {diaSemanaNumerico}
            </Text>
            <Text style={{ fontSize: 22, color: '#fff', textAlign: 'center' }}>
                {diaSemana}
            </Text>
        </View>
    )
}