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
    const [viewable, setViewble] = useState('');

    function verificaHour() {
        if( hour==viewable[0]?.item ||
            hour==viewable[1]?.item ||
            hour==viewable[2]?.item) {
                return false;
        }
        return true;
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={{width:200, height: 50}}
                contentContainerStyle={{justifyContent: 'center'}}
                horizontal={false}
                onViewableItemsChanged={({viewableItems, changed}) => {
                    setViewble(viewableItems);
                }}
                data={arr}
                windowSize={5}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                <Pressable onPress={() => setHour(item)} style={styles.item}>
                    <Text style={[
                        styles.text,
                        item===hour && [styles.text, styles.textSelected],
                        (viewable[1]?.item==item && verificaHour()) && [styles.text, styles.textActive]
                        ]}>{item}</Text>
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
        height: 140,
        borderRadius: 20,
        paddingVertical: 14
    },
    image: {
        width: 70, 
        height:70, 
        borderRadius: 100
    },
    text: {
        fontSize:22, 
        color:'#9F9F9F', 
        paddingVertical: 4,
        width: '100%',
        textAlign: 'center',
    },
    textSelected: {
        color: '#EA714C', 
        fontSize:26,
    },
    textActive: {
        color: '#FFF', 
        fontSize:26
    },
    item: {
        justifyContent:'center',
        alignItems: 'center',
    }
});
