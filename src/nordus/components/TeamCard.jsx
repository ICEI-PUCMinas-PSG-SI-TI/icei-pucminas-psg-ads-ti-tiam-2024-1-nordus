import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import Colors from "../assets/util/Colors";
import Instagram from "../assets/icons/icon-instagram-tangerine.svg";
import X from "../assets/icons/icon-x-tangerine.svg";

export default function TeamCard({ image, name, text }) {
  const openURL = async (url) => {
    const suporta = await Linking.canOpenURL(url);
    if(suporta) {
        await Linking.openURL(url);
    } else {
        Alert.alert('nao sei abrir')
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.avatarContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.iconContainer}>
          <Pressable
            onPress={() => openURL("https://www.instagram.com/barbearianordus/")}
            style={styles.icon}
          >
            <Instagram height={28} width={28} />
          </Pressable>
          <Pressable
            onPress={() => openURL("https://www.instagram.com/barbearianordus/")}
            style={styles.icon}
          >
            <X height={28} width={28} />
          </Pressable>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.descriptions}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: Colors.WHITE,
    padding: 8,
    width: 350,
    height: 160,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 5,
    paddingTop: 20,
  },
  avatarContainer: {
    overflow: "hidden",
    borderRadius: 60,
    width: 80,
    height: 80,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  icon: {
    marginHorizontal: 2,
  },
  separator: {
    width: 1,
    backgroundColor: Colors.SILVER,
    height: 120,
    alignSelf: "center",
  },
  textContainer: {
    flex: 2,
    paddingHorizontal: 15,
    alignSelf: "center",
  },
  title: {
    color: Colors.BLACK,
    fontSize: 17,
    fontWeight: "500",
    paddingBottom: 6,
  },
  descriptions: {
    fontSize: 12,
    textAlign: "left",
    fontWeight: "300",
  },
});
