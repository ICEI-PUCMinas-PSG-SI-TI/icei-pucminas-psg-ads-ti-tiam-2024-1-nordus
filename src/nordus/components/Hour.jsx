import { Text, StyleSheet, View, FlatList, Pressable } from "react-native";
import { useState } from "react";
export default function Hour() {

    const arr = [
        '09:00', '09:10', '09:20', '09:30', '09:40', '09:50',
        '10:00', '10:10', '10:20', '10:30', '10:40', '10:50',
        '11:00', '11:10', '11:20', '11:30', '11:40', '11:50',
        '12:00', '12:10', '12:20', '12:30', '12:40', '12:50',
        '13:00', '13:10', '13:20', '13:30', '13:40', '13:50',
        '14:00', '14:10', '14:20', '14:30', '14:40', '14:50',
        '15:00', '15:10', '15:20', '15:30', '15:40', '15:50',
        '16:00', '16:10', '16:20', '16:30', '16:40', '16:50',
        '17:00', '17:10', '17:20', '17:30', '17:40', '17:50',
        '18:00', '18:10', '18:20', '18:30', '18:40'
    ];

    const [hour, setHour] = useState(null);

    return (
        <View style={styles.container}>
            <FlatList
                data={arr}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                <Pressable onPress={() => setHour(item)} style={styles.item}>
                    <Text style={[{fontSize:28, color:'#9F9F9F', paddingVertical: 4}, item===hour && {color: '#fff', fontSize:32} ]}>{item}</Text>
                </Pressable>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#353535',
        height: 130,
        borderRadius: 20
    },
    image: {
        width: 70, 
        height:70, 
        borderRadius: 100
    },
    text: {
        color: '#fff',
    },
    item: {
        justifyContent:'center',
    }
});
