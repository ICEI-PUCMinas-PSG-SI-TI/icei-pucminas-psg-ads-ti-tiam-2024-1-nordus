import { useState } from "react";

import { StyleSheet, View, Image, FlatList, useWindowDimensions} from "react-native";
import Paginator from "./Paginator";

export default function Slide({arr}) {
  const {width} = useWindowDimensions(); 

  const [index, setIndex] = useState(0);

  function changeIndex(event) {
    const contentOffsetOfView = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetOfView / width); //Se foi scrollado para a direita 2x e o width é 200, o offset é 400.
    setIndex(index);
  }

    return (
        <View style={styles.container}>
          
          <FlatList
            ListEmptyComponent={<Image source={{uri: 'https://lh3.googleusercontent.com/p/AF1QipP9wOq7tOiz8yQnbELs7riofrpTMoav5KJcAE6e=s680-w680-h510'}} style={{height: 230, width: width}} />}
            data={arr}
            horizontal
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={changeIndex}
            snapToStart={true}
            renderItem={({item}) => (  
                  <Image style={{width:width, height:230}} source={{uri:item.url}}/>  
            )}
          />

          <Paginator arr={arr} currentIndex={index} />
            
        </View>
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

})