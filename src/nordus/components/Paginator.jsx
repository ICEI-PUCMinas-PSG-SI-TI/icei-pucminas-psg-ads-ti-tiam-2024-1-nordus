
import { StyleSheet, View } from "react-native";
export default function Paginator({arr, currentIndex}) {
    return (
        <View style={styles.bulletIndicator}>
            {arr.map((_, indexMap) => (
                indexMap==currentIndex ?
                <View key={indexMap.toString()} style={[styles.dot, {backgroundColor:'#EA714C'}]}></View>
                :
                <View key={indexMap.toString()} style={[styles.dot]}></View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    dot: {
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: '#fff',
        zIndex: 55,
      },
      bulletIndicator: {
        gap: 8,
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'center',
        bottom: 20,
      }
})