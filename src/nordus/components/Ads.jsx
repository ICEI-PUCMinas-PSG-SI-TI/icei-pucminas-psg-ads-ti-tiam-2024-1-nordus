import { StyleSheet, View, Text, TouchableHighlight} from "react-native";
import Colors from "../assets/util/Colors";

export default function Ads() {
  return (
      <View style={styles.container} >
        <Text style={styles.title}>
            Clube Nordus
        </Text>
        <Text style={styles.descriptions}>
        O Clube Nordus é uma opção interessante para aqueles que buscam economizar e desfrutar de um atendimento personalizado e de qualidade.
        </Text>
        <TouchableHighlight underlayColor="#C04D2A" style={styles.button}>
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
        gap: 12,
        padding: 8,
    },
    title: {
        color: Colors.TANGERINE,
        fontSize: 18,
    },
    descriptions: {
        fontSize: 14,
        paddingHorizontal: 4,
        textAlign: 'center',
    },
    button: {
        width: "60%",
        height: 36,
        backgroundColor: Colors.TANGERINE,
        alignSelf: 'center',
        borderRadius: 8,
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 16,
        color: Colors.WHITE,
        fontWeight: '300',
        textAlign: "center",
        textAlignVertical: "center",
    }
});
