import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useEffect, useState } from "react";
import CircleCheck from '../assets/icons/circleCheck.svg'
import CircleChecked from '../assets/icons/circleChecked.svg'
import { finishAppointment } from "../utils/AppointmentService";
export default function AgendamentoItem({item, setMudancasAgendamentos}) {

    const data = item.date.toDate().toString();
    const [pressed, setPressed] = useState(false);
    
    const dia = data.substring(4,15);
    const horario = data.substring(16,21);

   useEffect(() => {
    if(item.status == 'concluido') {
        setPressed(true);
    }
    if(item.status == 'agendado') {
        setPressed(false);
    }
   })

    function handlePress() {
        setMudancasAgendamentos(prev=> !prev)
        if(pressed==false) {
            setPressed(true)
            finishAppointment(item.date);
        }
    }
    

    return (
        <View style={item.status=='agendado'? styles.containerValid: styles.invalid}>
        <View style={{gap:4}}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>{item.clientName.substring(0, 20)}</Text>
            <View >
                <Text style={{color: '#fff'}}>Serviço: {item.serviceName}</Text>
                <Text style={{color: '#fff'}}>Data: {dia}</Text>
                <Text style={{color: '#fff'}}>Horario: {horario}</Text>
            </View>
        </View>
        <Pressable onPress={handlePress} style={{flex:1, justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal: 20 }}>
            {
                pressed
                ? 
                <CircleChecked height={48} width={48}/>
                :
                <CircleCheck height={48} width={48}/>
            }
        </Pressable>
    </View>
    );
}

const styles = StyleSheet.create({
    containerValid: {
        backgroundColor:Colors.DARKER_GRAY,
         flexDirection: 'row',
         padding: 20,
         borderRadius: 20
    },
    invalid: {
        backgroundColor:Colors.DARKER_GRAY,
        flexDirection: 'row',
        padding: 20,
        borderRadius: 20,
        opacity: 0.5
    }
});