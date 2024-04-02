import { StyleSheet, View} from "react-native";

export default function Divider({color}) {
  return (
      <View style={[styles.divider, {borderColor: color}]}></View>
  );
}

const styles = StyleSheet.create({
    divider: {
        borderBottomWidth: 1,
    }
});
