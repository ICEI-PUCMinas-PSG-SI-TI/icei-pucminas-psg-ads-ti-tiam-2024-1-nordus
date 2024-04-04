import { useState } from "react";
import { StyleSheet, View, Image, FlatList, Pressable, Text } from "react-native";

export default function Slide({index, arr}) {

    return (
        <Pressable style={styles.container}>
          <FlatList
          ListEmptyComponent={<Image style={{width:430, height:230}} source={{uri:'https://cdn5.vectorstock.com/i/1000x1000/73/49/404-error-page-not-found-miss-paper-with-white-vector-20577349.jpg'}}/>}
          keyExtractor={(item) => item.id}
          data={arr}
          renderItem={({item}) => (
            item.id == index 
            ?
              <View key={item.id} style={styles.slider}>
                <Image style={{width:430, height:230}} source={{uri:item.url}}/>
              </View>
            :
              null
          )}
          />
                    <View style={styles.bulletIndicator}>
            {arr.map((item, indexMap) => (
              index==indexMap?
              <View  style={[styles.dot, {backgroundColor:'#EA714C'}]}></View>
              :
              <View  style={styles.dot}></View>
            ))}
          </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 230,
    width:'100%',
  },
  slider: {
    backgroundColor: "#ff58",
    height: 230,
    width:'100%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: '#fff',
    zIndex: 55,
  },
  bulletIndicator: {
    gap: 8,
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
  }
})