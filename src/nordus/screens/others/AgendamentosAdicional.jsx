import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";

import Barber from "../../components/Barber";
import DatePicker from "react-native-modern-datepicker";
import Hour from "../../components/Hour";

export default function AgendamentoAdicional() {

        var month = new Date().getMonth()+1;
        var year = new Date().getFullYear();
        var todaysDate = new Date(2024, month, 0);
        var qntDays =  todaysDate.toString().split(' ')[2];

        const [data, setData] = useState(null);

        function handleDate(dataSelecionada) {
            setData(dataSelecionada);
            console.log(dataSelecionada);
        }

  return (
    <SafeAreaView style={styles.container} >
      <View>
        <Text style={{color: '#fff', fontSize: 24}}>Escolha um profissional:</Text>

        <View style={{flexDirection: 'row', gap: 20, paddingVertical: 20}}>
            <Barber name='Tiel' uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fVcE4WxMXIqqndR0VGaDZMpDWNZqblRtjL3rIpLAnA&s" />
            <Barber name='Cabral' uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fVcE4WxMXIqqndR0VGaDZMpDWNZqblRtjL3rIpLAnA&s" />
            <Barber name='Emanuel' uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fVcE4WxMXIqqndR0VGaDZMpDWNZqblRtjL3rIpLAnA&s" />
        </View>

        <View>
            <View>
                <Text style={{color: '#fff', fontSize: 20}}>Escolha uma data: </Text>
                <DatePicker
                mode='calendar'
                minimumDate={year+"/"+month+"/01"}
                maximumDate={year+"/"+month+"/"+qntDays}
                style={{borderRadius: 20}}
                onDateChange={handleDate}
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
            </View>

            <View>
                <Text style={{color: '#fff', fontSize: 20}}>Escolha uma horario: </Text>
                <Hour></Hour>
            </View>
  
        </View>
    
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1E21',
    flex: 1,
    alignItems: "left",
    paddingTop: 10,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 42,
    color: '#fff'
  }
})
 
