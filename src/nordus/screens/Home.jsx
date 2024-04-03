import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Pressable } from "react-native";
import Colors from "../assets/util/Colors";

import Divider from "../components/Divider";
import Slide from "../components/Slide";

import Clock from '../assets/icons/icon-clock'
import Location from '../assets/icons/icon-location.svg'

import Instagram from '../assets/icons/icon-instagram.svg'
import Website from '../assets/icons/icon-website.svg'
import Whatsapp from '../assets/icons/icon-whatsapp.svg'
import Email from '../assets/icons/icon-email.svg'


export default function Home() {
  const [index, setIndex] = useState([0]);
  const [slider, setSlider] = useState([
    {id:0, url: 'https://plus.unsplash.com/premium_photo-1677444546739-21b8aad351d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:1, url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:2, url: 'https://images.unsplash.com/photo-1536520002442-39764a41e987?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:3, url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:4, url: 'https://images.unsplash.com/photo-1596728325488-58c87691e9af?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  ]);

  function changeIndex() {
    var i = index;
    var newIndex = (i+1) % slider.length;
     setIndex(newIndex);
  }

  loop(4000, changeIndex);

  function loop(time, func) {
    setTimeout(func, time)
  }

  return (
    <SafeAreaView style={styles.container}>

      <Slide index={index} arr={slider}/>

      <View style={styles.contentInformation}>
        <Text style={styles.title}>Sobre Nós</Text>
        <Text style={styles.text}>A Barbearia Nordus oferece cortes excepcionais, constrói conexões genuínas com clientes e se destaca como um local icônico no bairro, incluindo o Clube Nordus, um serviço de corte e barba por assinatura.</Text>
        
        <Divider color={Colors.DARKER_GRAY}/>

        <View style={styles.shortText}>
            <Clock height={20} width={20}/>
            <Text style={styles.text}>Segunda a Sábado: 08:00 às 23:00{'\n'}Domingos e Feriados: 08:00 às 12:00</Text>
        </View>

        <View style={styles.shortText}>
            <Location height={20} width={20}/>
            <Text style={styles.text}>Rua Doresópolis, 480 - Fernão Dias, Belo Horizonte - MG, 31910-442</Text>
        </View>

        <Divider color={Colors.DARKER_GRAY}/>

        <View style={styles.icons}>
            <Instagram height={24} width={24}/>
            <Website height={24} width={24}/>
            <Whatsapp height={24} width={24}/>
            <Email height={26} width={26}/>
        </View>

      </View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>Agendar</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "top",
        paddingBottom: 60,
    },
    contentInformation: {
        flex: 1, 
        width: "100%",
        backgroundColor: Colors.BLACK,
        paddingHorizontal: 22,
        paddingTop: 18,
        gap: 18,
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: Colors.WHITE
    },
    text: {
        fontSize: 17,
        fontWeight: "300",
        color: Colors.WHITE
    },
    shortText: {
        flexDirection: "row",
        alignItems: "center",
        gap: 18,
    },
    icons: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 18,
    },
    button: {
        backgroundColor: Colors.TANGERINE,
        height: 50,
        width:'50%',
        borderRadius: 20,
        position: 'absolute',
        bottom: 90,
        zIndex: 50,
        flex: 1,
        justifyContent: "center"
    },
    buttonText:{
        fontWeight: '400',
        fontSize: 20,
        textAlign: 'center',
    }
});
