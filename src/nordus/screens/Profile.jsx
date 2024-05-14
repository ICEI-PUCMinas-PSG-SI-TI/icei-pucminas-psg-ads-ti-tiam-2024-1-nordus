import React from "react";
import Colors from "../assets/util/Colors";
import Divider from '../components/Divider'
import Ads from '../components/Ads'

import { View, TextInput, SafeAreaView, Text, TouchableHighlight, StyleSheet, } from "react-native";
import Exit from '../assets/icons/exit-icon.svg'

export default function Profile() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.BLACK}} >
      <View style={styles.container}>
      <Ads></Ads>
      <View style={styles.options}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Felipe Silva
          </Text>
          <TouchableHighlight>
            <Exit/>
          </TouchableHighlight>
        </View>
        <Divider color={"#353535"}/>
        <View>
          <Text style={styles.subtitle}>
            Meus dados
          </Text>
          <Text style={styles.description}>
            Acesse informações pessoais, como e-mail, nome...
          </Text>
        </View>
        <Divider color={"#353535"}/>
        <View>
          <Text style={styles.subtitle}>
          Minha assinatura
          </Text>
          <Text style={styles.description}>
          Acesse para entender os preços e os beneficios
          </Text>
        </View>
        <Divider color={"#353535"}/>
        <View>
          <Text style={styles.subtitle}>
          Histórico
          </Text>
          <Text style={styles.description}>
          Veja seus agendamentos
          </Text>
        </View>
        <Divider color={"#353535"}/>
        <View>
          <Text style={styles.subtitle}>
          Avaliar o app
          </Text>
          <Text style={styles.description}>
          Comente sua opinião ou informe possiveis bugs
                    </Text>
        </View>
        <Divider color={"#353535"}/>

      </View>
      </View>

      <View style={styles.aboutApp}>
        <Text style={styles.aboutAppText}>
          Desenvolvido por Triad Software.
        </Text>
        <View>
        <Text style={styles.aboutAppText}>
            Nordus app
          </Text>
          <Text style={styles.aboutAppText}>
            Versão: 1.3
          </Text>
        </View>

      </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.BLACK,
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 20,
    position: 'relative'
  },
  header: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },  
  options: {
    gap: 16,
    paddingHorizontal: 20,
  },
  aboutApp:{
    color: '#fff',
    bottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    bottom: 10,
    backgroundColor: Colors.BLACK,
  },  
  aboutAppText: {
    color: '#fff', 
    fontWeight: '100', 
    fontSize: 12,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    paddingBottom: 4
  },
  description: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '300'

  }
})
  