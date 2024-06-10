import { Text, StyleSheet, Image, View } from "react-native";

export default function Barber({name, uri, escolhido}) {
    return (
        <View style={styles.container}>
            <Image source={{uri: uri}} style={escolhido ? [styles.image, {borderColor: '#EA714C', borderWidth: 4, borderRadius: 100 }] : styles.image}></Image>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center',
        gap:4
    },
    image: {
        width: 65, 
        height:65, 
        borderRadius: 100
    },
    text: {
        color: '#fff'
    }
});
