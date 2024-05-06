import { StyleSheet, View, Text, Image} from "react-native";

export default function ProductItem({imageURL, externalURL, name, price }) {
  
  return (
    <View >
      <View style={styles.productItem}>
        <View style={styles.productImage}>

            <Image source={{uri: imageURL}} style={styles.image}></Image>

          <View style={styles.imageShadow}></View>
        </View>
        <View>
          <Text  numberOfLines={1} ellipsizeMode="tail" style={styles.productName}>{name}</Text>            
          <Text style={styles.productPrice}>R$ {price}</Text>            
        </View>
      </View>  
  </View>
  );
}

const styles = StyleSheet.create({
    productItem: {
        height: 190,
        width: 150,
        gap: 8,
      },
      productImage: {
        position: 'relative'
      },
      image: {
        height: 145,
        width: 145,
        zIndex: 1
      },
      imageShadow: {
        height: 145,
        width: 145,
        backgroundColor: Colors.DARKER_GRAY,
        position: 'absolute',
        left: 7,
        top: 5,
      },
      productName: {
        color: '#fff',
        fontSize: 14
    
      },
      productPrice: {
        color: '#fff',
        fontSize: 12,
        fontStyle: 'italic'
      },
});
