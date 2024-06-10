import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useState } from "react";
import CircleCheck from '../assets/icons/circleCheck.svg'
import CircleChecked from '../assets/icons/circleChecked.svg'

export default function AgendamentoItem({item}) {

    const data = item.date.toDate().toString();
    const [pressed, setPressed] = useState(false);
    
    const dia = data.substring(4,15);
    const horario = data.substring(16,21);

    function handlePress() {
        setPressed(true)
    }
    

    return (
        <View style={item.status=='valid'? styles.container: [styles.containerValid, styles.invalid]}>
        <View style={{gap:4}}>
            <Text style={{color: '#fff', fontSize: 18}}>Cliente: {item.clientID.substring(0, 10)}...</Text>
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
    container: {
        backgroundColor:Colors.DARKER_GRAY,
         flexDirection: 'row',
         padding: 20,
         borderRadius: 20
    },
    invalid: {
        opacity: 0.5
    }
});