import React from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet, Image, View } from "react-native";
import Colors from "../../assets/util/Colors";
import ProductItem from "../../components/ProductItem";
export default function Produto() {
  return (
    <ScrollView style={styles.container} >
      <Text style={styles.title}>Produtos</Text>
      
      <View style={styles.products}>
          <ProductItem name="Pomada Capilar King" price="20,00"></ProductItem>
          <ProductItem name="Pomada Capilar King" price="20,00"></ProductItem>
          <ProductItem name="Pomada Capilar King" price="20,00"></ProductItem>
          <ProductItem name="Pomada Capilar King" price="20,00"></ProductItem>
          <ProductItem name="Pomada Capilar King" price="20,00"></ProductItem>
          <ProductItem name="Pomada Capilar King" price="20,00"></ProductItem>

      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
    paddingHorizontal: 30
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
    color: '#fff',
    marginTop: 10,
    paddingVertical: 20,
    paddingLeft:12,
  },
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 25,
    justifyContent: 'center'
  },

})
 
