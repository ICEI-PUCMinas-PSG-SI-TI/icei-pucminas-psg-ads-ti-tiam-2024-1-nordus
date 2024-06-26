import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image, ActivityIndicator, RefreshControl } from "react-native";
import {
    collection,
    getDocs,
    query,
    where,
    addDoc,
    getFirestore,
    Timestamp,
} from "firebase/firestore";
import Dia from "../components/Dia";
import AgendamentoItem from '../components/AgendamentoItem'
import { ScrollView } from "react-native-gesture-handler";
import {getAppointments} from '../utils/AppointmentService'
import {getUserLoggedID} from '../utils/UserService'
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function Barber() {

    const [dias, setDias] = useState(null);
    const [diaSelecionado, setDiaSelecionado] = useState(null);
    const [agendamentos, setAgendamentos] = useState(null);

    const generateDays = (data) => {
        const limiteDias = 30;
        const slots = [];

        for (let i = 0; i < limiteDias; i++) {
            let newDate = new Date(data);
            newDate.setDate(data.getDate() + i);
            slots.push(newDate);
        }
        return slots;
    };

    useEffect(() => {
        receberAppointments();
        const data = new Date(); //data normal
        setDias(generateDays(data));
    }, []) 


    async function receberAppointments() {

        try {
            const STATICBARBERID = await getUserLoggedID() ; 

            let appointments = await getAppointments(STATICBARBERID);
            appointments.forEach((appointment) => {
                console.log("Existe um agendamento: ", appointment.date.toDate())
              });
            setAgendamentos(appointments);
        } catch (error) {
            console.log('Erro ao receber agendamentos: ', error)
        }
    }

    const verificaData = (data1, data2) => {
        const sameDate = data1.getDate() === data2.getDate();
        const sameMonth = data1.getMonth() === data2.getMonth();
        return sameDate && sameMonth;
    };
    

    const filtrarAgendamentos = (agendamentos, diaSelecionado) => {
        const resp = [];

        agendamentos.forEach(agendamento => {
            let agendamentoTemp = agendamento.date.toDate();
            if(verificaData(agendamentoTemp, diaSelecionado)) {
                resp.push(agendamento);
            }
        });

        return resp;
    };
    const formataData = (data) => {
        const dia = data.getDate();
        const mes = data.getMonth() + 1;
        const ano = data.getFullYear();
        
        return `${dia<10?'0'+dia:dia}/${mes<10?'0'+mes:mes}/${ano}`;
    };
    const [refreshing, setRefreshing] = useState(true);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.BLACK, padding: 20 }} >
            <Text style={{ fontSize: 28, color: '#fff' }}>Meus agendamentos</Text>
            <GestureHandlerRootView style={{}}>
            <View style={{}}>
                
                <ScrollView horizontal={true} style={{ height:'auto', marginVertical: 20 }}>
                {dias !== null ? 
                        dias.map((dia, index) => (
                            <Pressable key={index} onPress={() => setDiaSelecionado(dia)} style={{marginHorizontal: 4}} >
                                <Dia dataSTR={dia.toString()}></Dia>
                            </Pressable>
                        ))
                        : 
                        <></>
                    }
                </ScrollView>
                
            </View>
            </GestureHandlerRootView>
            <GestureHandlerRootView style={{flex:1}}>
            <View style={{flex:1}}>
                {diaSelecionado? <Text style={{color:'#fff', fontSize: 22}} >{formataData(diaSelecionado)}</Text> : <></>}
                
                <ScrollView style={{ height:'auto', marginVertical: 20}}>
                {(agendamentos !== null && diaSelecionado!= null)  ? 
                        filtrarAgendamentos(agendamentos, diaSelecionado).map((item, index) => (
                            <Pressable key={index} style={{marginVertical: 4}} >
                                <AgendamentoItem item={item}></AgendamentoItem>
                            </Pressable>
                        ))
                        : 
                        <></>
                    }
                </ScrollView>
                
                    
            </View>
            </GestureHandlerRootView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});