import { StyleSheet, View, Text, TouchableHighlight} from "react-native";
import Colors from "../assets/util/Colors";

export default function Ads({navigation}) {
  return (
      <View style={styles.container} >
        <Text style={styles.title}>
            Clube Nordus
        </Text>
        <Text style={styles.descriptions}>
        O Clube Nordus é uma opção interessante para aqueles que buscam economizar e desfrutar de um atendimento personalizado e de qualidade.
        </Text>
        <TouchableHighlight underlayColor="#DA5F39" onPress={()=> navigation.navigate('Assinaturas')} style={styles.button}>
            <Text style={styles.buttonText}>Conferir agora!</Text>
        </TouchableHighlight>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: Colors.TANGERINE,
        backgroundColor: Colors.WHITE,
        gap: 8,
        paddingHorizontal: 14,
        paddingVertical: 8,
    },
    title: {
        color: Colors.TANGERINE,
        fontSize: 18,
    },
    descriptions: {
        fontSize: 14,
        paddingHorizontal: 8,
        textAlign: 'justify',
    },
    button: {
        width: "60%",
        height: 36,
        backgroundColor: Colors.TANGERINE,
        alignSelf: 'center',
        borderRadius: 8,
        justifyContent: "center",
        elevation: 5
    },
    buttonText: {
        fontSize: 14,
        color: Colors.WHITE,
        fontWeight: '300',
        textAlign: "center",
        textAlignVertical: "center",
    }
});
