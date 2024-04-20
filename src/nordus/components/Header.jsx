import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Menu from '../assets/icons/icon-menu.svg'
import Logo from '../assets/nordus-horizontal.svg'
import Colors from '../assets/util/Colors';

const Header = ({ navigation }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openMenu} style={styles.icon}>
        <Menu height={14} width={22}/>
      </TouchableOpacity>
      <View style={styles.headerImage}>
        <Logo style={{width: 120, height: 40}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 18,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.WHITE_SMOKE
  },
  headerImage: {
    alignSelf: 'center'
  },
  icon: {
    left: 16,
    alignSelf: 'center',
    position: 'absolute',
    paddingLeft: 4,
  }
});

export default Header;