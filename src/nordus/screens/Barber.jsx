import { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import {
    collection,
    addDoc,
    getFirestore,
    Timestamp,
} from "firebase/firestore";
import Dia from "../components/Dia";
import AgendamentoItem from '../components/AgendamentoItem'
import { ScrollView } from "react-native-gesture-handler";
import { getAppointments } from '../utils/AppointmentService'
import { getUserLoggedID } from '../utils/UserService'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { logoutUser } from "../utils/UserService";
import Exit from "../assets/icons/exit-icon.svg";
import { useNavigation } from "@react-navigation/native";


export default function Barber({ setIsUserLoggedIn }) {

    console.log("Props recebidas em Barber:", setIsUserLoggedIn);
    const [dias, setDias] = useState(null);
    const [diaSelecionado, setDiaSelecionado] = useState(null);
    const [agendamentos, setAgendamentos] = useState(null);
    const [mudancasAgendamentos, setMudancasAgendamentos] = useState(null);

    const navigation = useNavigation();

    useEffect(() => {
        console.log("Atualização de setIsUserLoggedIn:", setIsUserLoggedIn);
    }, [setIsUserLoggedIn]);

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
        console.log("Use effect")
        receberAppointments();
        const data = new Date(); //data normal
        setDias(generateDays(data));
    }, [mudancasAgendamentos])


    async function receberAppointments() {

        try {
            const STATICBARBERID = await getUserLoggedID();
            let appointments = await getAppointments(STATICBARBERID);
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


    const filtrarAgendamentos = (agendamentos, diaSelecionado)  => {
        const resp = [];

        agendamentos.forEach(agendamento => {
            let agendamentoTemp = agendamento.date.toDate();
            if (verificaData(agendamentoTemp, diaSelecionado)) {
                resp.push(agendamento);
            }
        });

        return resp;
    };
    const formataData = (data) => {
        const dia = data.getDate();
        const mes = data.getMonth() + 1;
        const ano = data.getFullYear();

        return `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${ano}`;
    };

    const handleSubmit = async () => {
        const barberId = await getUserLoggedID();
        console.log("Id Barbeiro" + barberId)
        if (diaSelecionado && barberId) {


            let dayOff = Timestamp.fromDate(new Date(diaSelecionado));

            try {
                await addDoc(collection(getFirestore(), "daysOff"), {
                    barberID: barberId,
                    date: dayOff,
                });
            } catch (error) {
                console.error("Erro adicionar folga:", error);
            }
        } else {
            console.log("Selecione um dia.");
        }
    };
    const handleLogout = useCallback(async () => {
        console.log("Iniciando o logout");
        console.log("Tipo de setIsUserLoggedIn:", typeof setIsUserLoggedIn);
        await logoutUser(setIsUserLoggedIn);
        console.log("Logout concluído");
        navigation.navigate("Login");
    }, [setIsUserLoggedIn]);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.BLACK, paddingTop: "12%", paddingLeft: "5%", paddingRight: "5%" }} >
            <Text style={{ fontSize: 28, color: '#fff' }}>Meus agendamentos</Text>
            <GestureHandlerRootView style={{}}>
                <View style={{}}>

                    <ScrollView horizontal={true} style={{ height: 'auto', marginVertical: 20 }}>
                        {dias !== null ?
                            dias.map((dia, index) => (
                                <Pressable key={index} onPress={() => setDiaSelecionado(dia)} style={{ marginHorizontal: 4 }} >
                                    <Dia dataSTR={dia.toString()}></Dia>
                                </Pressable>
                            ))
                            :
                            <></>
                        }
                    </ScrollView>

                </View>
            </GestureHandlerRootView>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {diaSelecionado ? <Text style={{ color: '#fff', fontSize: 22 }} >{formataData(diaSelecionado)}</Text> : <></>}

                    <ScrollView style={{ height: 'auto', marginVertical: 20 }}>
                        {(diaSelecionado && filtrarAgendamentos(agendamentos, diaSelecionado).length > 0) ?
                            filtrarAgendamentos(agendamentos, diaSelecionado).map((item, index) => (
                                <Pressable key={index} style={{ marginVertical: 4 }} >
                                    <AgendamentoItem item={item} setMudancasAgendamentos={setMudancasAgendamentos}></AgendamentoItem>
                                </Pressable>
                            ))
                            :
                            <View>
                                <Text style={styles.title}>Não há agendamentos para o dia selecionado</Text>
                                <Text style={styles.title}></Text>
                                <View style={{ alignItems: "center" }} >
                                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>

                                        <Text style={styles.textButton}>Folgar no dia selecionado</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                    </ScrollView>


                </View>
            </GestureHandlerRootView>
            <Pressable style={{ paddingBottom: "15%", paddingLeft: "85%" }} onPressIn={() => handleLogout()}>
                <Exit />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    textButton: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "500",
    },
    button: {
        backgroundColor: Colors.TANGERINE,
        width: "50%",
        padding: 20,
        borderRadius: 25,
    }, title: {
        fontSize: 24,
        fontWeight: "300",
        color: "#fff",
        marginBottom: 10,
    }
});