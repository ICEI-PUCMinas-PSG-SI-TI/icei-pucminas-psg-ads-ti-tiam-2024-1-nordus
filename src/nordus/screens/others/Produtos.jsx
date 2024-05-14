import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, StyleSheet, Image, View } from "react-native";
import Colors from "../../assets/util/Colors";
import ProductItem from "../../components/ProductItem";

import {FIREBASE_DB} from '../../FirebaseConfig'
import {collection, getDocs} from 'firebase/firestore'

export default function Produto() {
  const [products, setProducts] = useState([]); 

  const getProducts = async () => {
    console.log("Pesquisando produtos.")
    const query = await getDocs(collection(FIREBASE_DB, "products"));
    const productsData = [];

    query.forEach((p) => {
      productsData.push(p.data());
    });
    console.log("Pesquisa concluída.")
    setProducts(productsData); 
  }

  useEffect(()=> {
    getProducts();
  },[])

  return (
    <View style={styles.container} >
     <Pressable onPress={getProducts}>
        <Text style={styles.title}>Produtos</Text>
      </Pressable>
      
      <ScrollView contentContainerStyle={styles.productsList}>
        {
          products.map((product, index) => (
            <ProductItem key={index} name={product.name} price={product.price} imageURL={product.URL} externalURL={product.externalURL} />
          ))
        }
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
    color: '#fff',
    marginTop: 10,
    paddingVertical: 20,
    paddingLeft:12,
  },
  productsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 25,
    justifyContent: "center",
  },

})
 
