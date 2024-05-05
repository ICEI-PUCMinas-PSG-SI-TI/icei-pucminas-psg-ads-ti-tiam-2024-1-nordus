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
          <ProductItem name="Pomada Capilar King" price="20,00"></ProductItem>

      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
 
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    color: '#fff',
    marginTop: 90,
    paddingVertical: 30,
    paddingLeft: 55,
    alignSelf: 'flex-start'
  },
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 25,
    flex: 1,
    justifyContent: 'center'
  },

})
 
