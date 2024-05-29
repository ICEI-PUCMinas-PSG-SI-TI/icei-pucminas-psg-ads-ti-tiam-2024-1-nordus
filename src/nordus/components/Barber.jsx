import { Text, StyleSheet, View, Image } from "react-native";

export default function Barber({name, uri}) {
    return (
        <View style={styles.container}>
            <Image source={{uri: uri}} style={styles.image}></Image>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    image: {
        width: 70, 
        height:70, 
        borderRadius: 100
    },
    text: {
        color: '#fff'
    }
});
