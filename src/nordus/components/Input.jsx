import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../assets/util/Colors";

const Input = ({ placeholder, placeholderTextColor, secureTextEntry, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor || Colors.SILVER}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 54,
    borderRadius: 18,
    fontSize: 16,
    backgroundColor: Colors.DARKER_GRAY,
    paddingLeft: 25,
    marginBottom: 3,
  },
});

export default Input;
