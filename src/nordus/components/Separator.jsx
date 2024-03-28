import { StyleSheet, View} from "react-native";

export default function Separator({color}) {
  return (
      <View style={[styles.separator, {borderColor: color}]}></View>
  );
}

const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: 1,
    }
});
