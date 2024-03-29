import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../../assets/util/Colors"

export default function InputForm({ text, placeholder }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{text}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={Colors.lightGray}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: Colors.SILVER,
  },
  input: {
    width: 281,
    height: 54,
    borderRadius: 18,
    padding: 10,
    fontSize: 16,
    color: "white",
    backgroundColor: Colors.DARKER_GRAY
  },
});
