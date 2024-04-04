import { useState } from "react";

import { StyleSheet, View, Image, FlatList} from "react-native";
import NordusIcon from '../assets/icons/icon-nordus-white.svg'

export default function Slide({timing, arr}) {
  const [index, setIndex] = useState([0]);

  function changeIndex() {
    var i = index;
    var newIndex = (i+1) % arr.length;
     setIndex(newIndex);
  }

  loop(timing, changeIndex);

  function loop(timing, func) {
    if(timing==0)
    return;
    setTimeout(func, timing)
  }

    return (
        <View style={styles.container}>
          
          <FlatList
            ListEmptyComponent={<NordusIcon height={230} width={430}/>}
            data={arr}
            renderItem={({item}) => ( item.id == index 
              ? <View key={item.id} style={styles.slider}>
                  <Image style={{width:430, height:230}} source={{uri:item.url}}/>
                </View>
              : null
          )}/>
            
          <View style={styles.bulletIndicator}>
            {arr.map((item, indexMap) => (
              index==indexMap
              ? <View  style={[styles.dot, {backgroundColor:'#EA714C'}]}></View>
              : <View  style={styles.dot}></View>
            ))}
          </View>

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