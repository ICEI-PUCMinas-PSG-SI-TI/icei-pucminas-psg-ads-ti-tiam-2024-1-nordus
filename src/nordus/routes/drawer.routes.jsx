import { DrawerContentScrollView, createDrawerNavigator, DrawerItem, navigation } from '@react-navigation/drawer';
import { Linking, Alert, View, Text, Pressable, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import Colors from '../assets/util/Colors';
import Header from '../components/Header';

import Spotify from '../assets/icons/icon-spotify-dark.svg';
import Instagram from '../assets/icons/icon-instagram-dark.svg';
import Website from '../assets/icons/icon-website-dark.svg';
import Whatsapp from '../assets/icons/icon-whatsapp-dark.svg';
import Email from '../assets/icons/icon-email-dark.svg';
import Logo from '../assets/nordus-horizontal.png'
import Close from '../assets/icons/icon-close.svg';
import { TabRoutes } from './tab.routes';


import React from 'react';
import { StackRoutes } from './stack.routes';
import MeusDados from '../screens/others/MeusDados';


const Drawer = createDrawerNavigator();

const openURL = async (url) => {
    const suporta = await Linking.canOpenURL(url);
    if(suporta) {
        await Linking.openURL(url);
    } else {
        Alert.alert('nao sei abrir')
    }
}

export function DrawerRoutes({setIsUserLoggedIn}) {
    const [screenAtual, setScreenAtual] = useState('Home');

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                  width: Dimensions.get('window').width / 1.3,
                },
              }}
            drawerContent={(props) => (<CustomDrawer {...props} screenAtual={screenAtual} setScreenAtual={setScreenAtual} />)}>

            <Drawer.Screen name='Tab'
            options={{
                header: ({ navigation }) => <Header navigation={navigation} />,
            }}>
            {() => <TabRoutes setIsUserLoggedIn={setIsUserLoggedIn} />}
            </Drawer.Screen>

            <Drawer.Screen name='Stack' component={StackRoutes}
            options={{
                header: ({ navigation }) => <Header navigation={navigation} />,
            }} />

            <Drawer.Screen name='MeusDados' component={MeusDados}
            options={{
                header: ({ navigation }) => <Header navigation={navigation} />,
            }} />


{/* 
        <Tab.Screen
                name="Profile"
                options={{
                tabBarIcon: ({ focused }) => {
                    if (focused) {
                    return <IconProfilePressed />;
                    }
                    return <IconProfile />;
                },
                }}
            >
            {() => <Profile setIsUserLoggedIn={setIsUserLoggedIn} />}
            </Tab.Screen>

*/}

        </Drawer.Navigator>
    );
}

const CustomDrawer = ({navigation, screenAtual, setScreenAtual}) => {

    const closeMenu = () => {
        navigation.closeDrawer();
    };

    return(
        <DrawerContentScrollView {...navigation} contentContainerStyle={styles.drawerContent}>
            <View style={styles.drawerHeader}>
                <Pressable onPress={()=> {navigation.navigate('Tab', { screen: 'Home' }); setScreenAtual('Home'); }}>
                    <Image source={Logo} style={{width: 110, height: 30}}/>
                </Pressable>
                <TouchableHighlight style={styles.drawerCloseIcon} onPress={closeMenu} underlayColor='#fff'>
                    <Close height={18} width={18}/>
                </TouchableHighlight>
            </View>

            <DrawerItem 
                label={'Serviços'} 
                onPress={()=> {navigation.navigate('Tab', { screen: 'Agendamento' }); setScreenAtual('Agendamento'); }}
                activeTintColor={Colors.BLACK} 
                inactiveTintColor={Colors.BLACK}
                activeBackgroundColor={Colors.WHITE_SMOKE} 
                focused={screenAtual == 'Agendamento'}
                style={styles.drawerItemWrapper}
                labelStyle={styles.drawerItem}
             />
            <DrawerItem 
                label={'Patrocinadores'} 
                onPress={()=> {navigation.navigate('Stack', { screen: 'Patrocinadores' }); setScreenAtual('Patrocinadores'); }}
                activeTintColor={Colors.BLACK} 
                inactiveTintColor={Colors.BLACK}
                activeBackgroundColor={Colors.WHITE_SMOKE} 
                focused={screenAtual == 'Patrocinadores'}
                style={styles.drawerItemWrapper}
                labelStyle={styles.drawerItem}
             />
            <DrawerItem 
                label={'Produtos'} 
                onPress={()=> {navigation.navigate('Stack', { screen: 'Produtos' }); setScreenAtual('Produtos'); }}
                activeTintColor={Colors.BLACK} 
                inactiveTintColor={Colors.BLACK}
                activeBackgroundColor={Colors.WHITE_SMOKE} 
                focused={screenAtual == 'Produtos'}
                style={styles.drawerItemWrapper}
                labelStyle={styles.drawerItem}
             />
            <DrawerItem 
                label={'Assinaturas'} 
                onPress={()=> {navigation.navigate('Tab', { screen: 'Assinaturas' }); setScreenAtual('Assinaturas'); }}
                activeTintColor={Colors.BLACK} 
                inactiveTintColor={Colors.BLACK}
                activeBackgroundColor={Colors.WHITE_SMOKE} 
                focused={screenAtual == 'Assinaturas'}
                style={styles.drawerItemWrapper}
                labelStyle={styles.drawerItem}
             />
            <DrawerItem 
                label={'Equipe'} 
                onPress={()=> {navigation.navigate('Stack', { screen: 'Equipe' }); setScreenAtual('Equipe'); }}
                activeTintColor={Colors.BLACK} 
                inactiveTintColor={Colors.BLACK}
                activeBackgroundColor={Colors.WHITE_SMOKE} 
                focused={screenAtual == 'Equipe'}
                style={styles.drawerItemWrapper}
                labelStyle={styles.drawerItem}
             />

            <View style={styles.contactGroup}>
               <Pressable 
                    style={styles.contactItem}
                    onPress={() => openURL('https://open.spotify.com/playlist/0V5h0aQrVEJ6AGmsmdDZLy?si=5bebf95ec53448f3&nd=1&dlsi=546065a093d847a1')}>
                    <Spotify height={22} width={22}/>
                    <Text style={styles.contactText}>NordusPlay</Text>
                </Pressable> 
                <Pressable 
                    style={styles.contactItem}
                    onPress={() => openURL('https://www.instagram.com/barbearianordus/')}>
                    <Instagram height={22} width={22}/>
                    <Text style={styles.contactText}>@barbearianordus</Text>
                </Pressable> 
                <Pressable 
                    style={styles.contactItem}
                    onPress={() => openURL('https://barbearianordus.com.br/')}>
                    <Website height={22} width={22}/>
                    <Text style={styles.contactText}>barbearianordus.com.br</Text>
                </Pressable> 
                <Pressable 
                    style={styles.contactItem}
                    onPress={ () => openURL('https://wa.me/553131916557?text=Estou+afim+de+marcar+um+hor%C3%A1rio+para+dar+um+trato+no+cabelo%2Fbarba.+Cheguei+at%C3%A9+voc%C3%AAs+pelo+app+e+t%C3%B4+bem+empolgado+pra+conhecer+de+perto%21')}>
                    <Whatsapp height={22} width={22}/>
                    <Text style={styles.contactText}>(31) 3191-6557</Text>
                </Pressable> 
                <Pressable 
                    style={styles.contactItem}
                    onPress={ () => openURL('mailto:barbearianordus@gmail.com?subject=Marcar%20um%20hor%C3%A1rio&body=Estou%20afim%20de%20marcar%20um%20hor%C3%A1rio%20para%20dar%20um%20trato%20no%20cabelo%2Fbarba.%20Cheguei%20at%C3%A9%20voc%C3%AAs%20pelo%20app%20e%20t%C3%B4%20bem%20empolgado%20pra%20conhecer%20de%20perto!%0D%0A%0D%0A')}>
                    <Email height={22} width={22}/>
                    <Text style={styles.contactText}>barbearianordus@gmail.com</Text>
                </Pressable> 
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },  
    drawerCloseIcon: {
        position:'absolute',
        right: 20,
    },  
    drawerContainer: {
        backgroundColor: '#353535',
        width: 800,
    },
    drawerContent: {
        flex:1,
        backgroundColor: Colors.WHITE_SMOKE,
        padding: 0,
        margin: 0,
        width: '100%',
        gap: -8
    },
    drawerItem: {
        fontWeight: '400',
        fontSize: 20,
        padding: 0,
        margin: 0,
    },
    drawerItemWrapper: {
        color: '#12AE34',
        paddingStart: 15,
        margin: 0,
    },
    contactText: {
        fontSize: 14,
        color: Colors.DARKER_GRAY,
        fontWeight: '300'
    },
    contactItem: {
        flexDirection: "row", 
        gap: 10
    },
    contactGroup: {
        flex: 1,
        justifyContent: 'flex-end',
        gap: 12,
        paddingStart: 30,
        paddingBottom: 25
    }
})