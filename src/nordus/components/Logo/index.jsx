import React from "react";
import { View, StyleSheet } from "react-native";
import NordusLogo from "../../assets/icons/icon-nordus-white";

const LogoComponent = ({ size }) => {
  let width, height;

  switch (size) {
    case "lg":
      width = 171;
      height = 167;
      break;
    case "md":
      width = 152;
      height = 149;
      break;
    case "sm":
      width = 100;
      height = 100;
      break;
    default:
      width = 152;
      height = 149;
  }

  return (
    <View style={styles.container}>
      <NordusLogo width={width} height={height} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default LogoComponent;
