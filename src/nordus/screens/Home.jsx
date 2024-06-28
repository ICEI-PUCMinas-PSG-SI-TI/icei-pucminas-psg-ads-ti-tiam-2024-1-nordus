import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Linking, Pressable, TouchableHighlight} from "react-native";

import Colors from "../assets/util/Colors";

import Divider from "../components/Divider";
import Slide from "../components/Slide";

import Clock from "../assets/icons/icon-clock";
import Location from "../assets/icons/icon-location.svg";
import Instagram from "../assets/icons/icon-instagram.svg";
import Website from "../assets/icons/icon-website.svg";
import Whatsapp from "../assets/icons/icon-whatsapp.svg";
import Email from "../assets/icons/icon-email.svg";

export default function Home() {
  const navigation = useNavigation();

  const slider = [
    {
      id: 0,
      url: require("../assets/slider/1.jpg"),
    },
    {
      id: 1,
      url: require("../assets/slider/2.jpg"),
    },
    {
      id: 2,
      url: require("../assets/slider/3.jpg"),
    },
    {
      id: 3,
      url: require("../assets/slider/4.jpg"),
    },
    {
      id: 4,
      url: require("../assets/slider/5.jpg"),
    },
    {
      id: 5,
      url: require("../assets/slider/6.jpg"),
    },
    {
      id: 6,
      url: require("../assets/slider/7.jpg"),
    },
    {
      id: 7,
      url: require("../assets/slider/8.jpg"),
    },
  ];

  const openURL = async (url) => {
    const suporta = await Linking.canOpenURL(url);
    if(suporta) {
        await Linking.openURL(url);
    } else {
        Alert.alert('nao sei abrir')
    }
}

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Slide arr={slider}/>

      <View style={styles.contentInformation}>
        <Text style={styles.title}>Sobre a Nordus</Text>
        <Text style={styles.text}>
          A Barbearia Nordus oferece cortes excepcionais, constrói conexões
          genuínas com clientes e se destaca como um local icônico no bairro,
          incluindo o Clube Nordus, um serviço de corte e barba por assinatura.
        </Text>

        <Divider color={Colors.DARKER_GRAY} />

        <View style={styles.shortText}>
          <Clock height={20} width={20} />
          <Text style={styles.text}>
            Segunda a Sábado: 08:00 às 23:00{"\n"}Domingos e Feriados: 08:00 às
            12:00
          </Text>
        </View>

        <View style={styles.shortText}>
          <Location height={20} width={20} />
          <Text style={styles.text}>
            Rua Doresópolis, 480 - Fernão Dias, Belo Horizonte - MG, 31910-442
          </Text>
        </View>

        <Divider color={Colors.DARKER_GRAY} />

        <View style={styles.icons}>
          <Pressable onPress={() => openURL('https://www.instagram.com/barbearianordus/')}>
            <Instagram height={24} width={24}/>
          </Pressable>
          <Pressable onPress={() => openURL('https://barbearianordus.com.br/')}>
            <Website height={24} width={24}/>
          </Pressable>
          <Pressable onPress={() => openURL('https://wa.me/553131916557?text=Estou+afim+de+marcar+um+hor%C3%A1rio+para+dar+um+trato+no+cabelo%2Fbarba.+Cheguei+at%C3%A9+voc%C3%AAs+pelo+app+e+t%C3%B4+bem+empolgado+pra+conhecer+de+perto%21')}>
            <Whatsapp height={24} width={24}/>
          </Pressable>
          <Pressable onPress={ () => openURL('mailto:barbearianordus@gmail.com?subject=Marcar%20um%20hor%C3%A1rio&body=Estou%20afim%20de%20marcar%20um%20hor%C3%A1rio%20para%20dar%20um%20trato%20no%20cabelo%2Fbarba.%20Cheguei%20at%C3%A9%20voc%C3%AAs%20pelo%20app%20e%20t%C3%B4%20bem%20empolgado%20pra%20conhecer%20de%20perto!%0D%0A%0D%0A')}>
            <Email height={26} width={26}/>
          </Pressable>
        </View>



      </View>
      <TouchableHighlight underlayColor='#d96541' style={styles.button} onPress={()=> {navigation.navigate('Tab', { screen: 'Agendamento' })}}>
        <Text style={styles.buttonText}>Agendar</Text>
      </TouchableHighlight>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start", 
    backgroundColor: Colors.BLACK,
    paddingBottom: 27,
  },
  contentInformation: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.BLACK,
    paddingHorizontal: 22,
    paddingTop: 12,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.WHITE,
  },
  text: {
    fontSize: 17,
    fontWeight: "300",
    color: Colors.WHITE,
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
    paddingTop: 5,
  },
  button: {
    backgroundColor: Colors.TANGERINE,
    height: 50,
    width: "50%",
    borderRadius: 20,
    justifyContent: "center",
    marginTop: 20
  },
  buttonText: {
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    color: Colors.BLACK
  },
});
