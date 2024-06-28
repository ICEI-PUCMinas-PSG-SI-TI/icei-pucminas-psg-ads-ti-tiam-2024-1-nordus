import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, StyleSheet, View } from "react-native";
import Colors from "../../assets/util/Colors";
import Patrocinador from "../../components/Patrocinador";

import { FIREBASE_DB } from "../../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function Patrocinadores() {
  const [sponsors, setSponsors] = useState([]);

  const getSponsors = async () => {
    console.log("Buscando patrocinadores.");
    const query = await getDocs(collection(FIREBASE_DB, "sponsors"));
    const sponsorsData = [];

    query.forEach((s) => {
      sponsorsData.push(s.data());
    });
    console.log("Pesquisa concluída.");
    setSponsors(sponsorsData);
  };

  useEffect(() => {
    getSponsors();
  }, []);

  return (
    <View style={styles.container}>
      <Pressable onPress={getSponsors}>
        <Text style={styles.title}>Patrocinadores</Text>
      </Pressable>

      <ScrollView contentContainerStyle={styles.sponsorsList}>
        {sponsors.map((sponsor, index) => (
          <Patrocinador
            key={index}
            imageURL={sponsor.URL}
            name={sponsor.name}
            description={sponsor.description}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "300",
    color: "#fff",
    marginTop: 10,
    paddingVertical: 20,
  },
  sponsorsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 25,
    justifyContent: "center",
  },
});
