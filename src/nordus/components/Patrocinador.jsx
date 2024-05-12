import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  Pressable,
} from "react-native";

export default function Patrocinador({ imageURL, name, description }) {
  const openURL = async (url) => {
    const suporta = await Linking.canOpenURL(url);
    if (suporta) {
      await Linking.openURL(url);
    } else {
      Alert.alert("nao sei abrir");
    }
  };
  return (
    <Pressable onPress={() => openURL(externalURL)}>
      <View style={styles.patrocinador}>
        <View style={styles.patrocinadorImage}>
          <Image source={{ uri: imageURL }} style={styles.image}></Image>

          <View style={styles.imageShadow}></View>
        </View>
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.patrocinadorName}
          >
            {name}
          </Text>
          <Text style={styles.patrocinadorDescription}>{description}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  patrocinador: {
    height: 190,
    width: 300,
    gap: 8,
  },
  patrocinadorImage: {
    position: "relative",
  },
  image: {
    height: 150,
    width: 300,
    zIndex: 1,
  },
  imageShadow: {
    height: 150,
    width: 300,
    backgroundColor: Colors.DARKER_GRAY,
    position: "absolute",
    left: 7,
    top: 5,
  },
  patrocinadorName: {
    color: "#fff",
    fontSize: 14,
  },
  patrocinadorDescription: {
    color: "#fff",
    fontSize: 12,
    fontStyle: "italic",
  },
});
