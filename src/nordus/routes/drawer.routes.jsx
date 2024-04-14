import { DrawerContentScrollView, createDrawerNavigator, DrawerItem, navigation } from '@react-navigation/drawer';
import { Linking, Alert, View, Text, Pressable, StyleSheet, Image } from 'react-native';
import Colors from '../assets/util/Colors';

import Login from '../screens/Login'
import Home from '../screens/Home'
import { Dimensions } from 'react-native';

import Spotify from '../assets/icons/icon-spotify-dark.svg';
import Instagram from '../assets/icons/icon-instagram-dark.svg';
import Website from '../assets/icons/icon-website-dark.svg';
import Whatsapp from '../assets/icons/icon-whatsapp-dark.svg';
import Email from '../assets/icons/icon-email-dark.svg';
import Close from '../assets/icons/icon-close.svg';
import Logo from '../assets/nordus-horizontal.png'

import Header from '../components/Header';


const Drawer = createDrawerNavigator();
export function DrawerRoutes () {

    const openURL = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if(isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert('nao sei abrir')
        }
    }

    return (
        <Drawer.Navigator 
        screenOptions={{
            drawerStyle: {
              width: Dimensions.get('window').width / 1.3,
            },
          }}
           initialRouteName='Login'
           contentContainerStyle={styles.drawerContainer}
        
           drawerContent={props => {
            const {routeNames, index } = props.state;
            const focused = routeNames[index];
            const closeMenu = () => {
                props.navigation.closeDrawer();
              };

            return(
            <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>

                <View style={styles.drawerHeader}>
                    <Image source={Logo}  style={{width: 110, height: 30}} />
                    <Pressable style={styles.drawerCloseIcon} onPress={closeMenu}>
                        <Close height={18} width={18}/>
                    </Pressable>
                </View>

                <DrawerItem 
                    label={'Serviços'} 
                    onPress={()=> {props.navigation.navigate("Serviços")}}
                    activeTintColor={Colors.TANGERINE} 
                    inactiveTintColor={Colors.BLACK}
                    activeBackgroundColor={Colors.WHITE_SMOKE} 
                    focused={focused == 'Serviços'}
                    style={styles.drawerItemWrapper}
                    labelStyle={styles.drawerItem}
                    
                 />

                <DrawerItem 
                    label={'Patrocinadores'} 
                    onPress={()=> {props.navigation.navigate("Patrocinadores")}}
                    activeTintColor={Colors.TANGERINE} 
                    inactiveTintColor={Colors.BLACK}
                    activeBackgroundColor={Colors.WHITE_SMOKE} 
                    focused={focused == 'Patrocinadores'}
                    style={styles.drawerItemWrapper}
                    labelStyle={styles.drawerItem}
                 />

                <DrawerItem 
                    label={'Produtos'} 
                    onPress={()=> {props.navigation.navigate("Produtos")}}
                    activeTintColor={Colors.TANGERINE} 
                    inactiveTintColor={Colors.BLACK}
                    activeBackgroundColor={Colors.WHITE_SMOKE} 
                    focused={focused == 'Produtos'}
                    style={styles.drawerItemWrapper}
                    labelStyle={styles.drawerItem}
                 />
                <DrawerItem 
                    label={'Assinaturas'} 
                    onPress={()=> {props.navigation.navigate("Assinaturas")}}
                    activeTintColor={Colors.TANGERINE} 
                    inactiveTintColor={Colors.BLACK}
                    activeBackgroundColor={Colors.WHITE_SMOKE} 
                    focused={focused == 'Assinaturas'}
                    style={styles.drawerItemWrapper}
                    labelStyle={styles.drawerItem}
                 />
                <DrawerItem 
                    label={'Equipe'} 
                    onPress={()=> {props.navigation.navigate("Equipe")}}
                    activeTintColor={Colors.TANGERINE} 
                    inactiveTintColor={Colors.BLACK}
                    activeBackgroundColor={Colors.WHITE_SMOKE} 
                    focused={focused == 'Equipe'}
                    style={styles.drawerItemWrapper}
                    labelStyle={styles.drawerItem}
                 />

                <View style={styles.contactGroup}>
                   
                   <Pressable 
                        style={styles.contactItem}
                        onPress={() => openURL('https://open.spotify.com/intl-pt/artist/3ayMqcjEBli5NSwumXll2e')}>
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
           }}
           
        >   
            <Drawer.Group>
                <Drawer.Screen name='Serviços' component={Home}  
                options={{
                    header: ({ navigation }) => <Header title="Tela 1" navigation={navigation} />,
                }} />
                <Drawer.Screen name='Patrocinadores' component={Home}  
                options={{
                    header: ({ navigation }) => <Header title="Tela 1" navigation={navigation} />,
                }} />
                <Drawer.Screen name='Produtos' component={Home}  
                options={{
                    header: ({ navigation }) => <Header title="Tela 1" navigation={navigation} />,
                }} />
                <Drawer.Screen name='Assinaturas' component={Home}  
                options={{
                    header: ({ navigation }) => <Header title="Tela 1" navigation={navigation} />,
                }} />
                <Drawer.Screen name='Equipe' component={Login}  
                options={{
                    header: ({ navigation }) => <Header title="Tela 1" navigation={navigation} />,
                }} />
            </Drawer.Group>

        </Drawer.Navigator>
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