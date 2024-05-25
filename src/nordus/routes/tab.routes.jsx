import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Assinaturas from '../screens/others/Assinaturas'
import Agendamento from '../screens/others/Agendamento'
import { SvgUri } from 'react-native';
import { Header } from "react-native/Libraries/NewAppScreen";

import IconProfile from "../assets/icons/icon-profile.svg"
import IconProfilePressed from "../assets/icons/icon-profile-tangerine.svg"
import IconCalender from "../assets/icons/icon-calendar-black.svg"
import IconCalenderPressed from "../assets/icons/icon-calendar-tangerine.svg"
import IconDiamond from "../assets/icons/icon-diamond-black.svg"
import IconDiamondPressed from "../assets/icons/icon-diamond-tangerine.svg"
import IconHome from "../assets/icons/icon-home.svg"
import IconHomePressed from "../assets/icons/icon-home-tangerine.svg"

import Colors from "../assets/util/Colors";
const Tab = createBottomTabNavigator();

export function TabRoutes({setIsUserLoggedIn}){
    return(
        <Tab.Navigator  
        screenOptions={{
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarStyle:{
                backgroundColor: Colors.WHITE_SMOKE,
                borderTopWidth: 0,
                
            }
            }}>
            
            
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon:({focused}) => {
                    if(focused){
                        return <IconHomePressed/>
                    }
                    return <IconHome/>
                }
            }}
            />
             <Tab.Screen
            name="Agendamento"
            component={Agendamento}
            options={{
                tabBarIcon:({focused}) => {
                    if(focused){
                        return <IconCalenderPressed/>
                    }
                    return <IconCalender/>
                }
            }}
            />

<Tab.Screen
            name="Assinaturas"
            component={Assinaturas}
            options={{
                tabBarIcon:({focused}) => {
                    if(focused){
                        return <IconDiamondPressed/>
                    }
                    return <IconDiamond/>
                }
            }}
            />
            

            

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
            {() => <Profile setIsUserLoggedIn={setIsUserLoggedIn}/>}
            </Tab.Screen>
        </Tab.Navigator>
    )
}


/*
      <Screen 
        name="Login" 
        options={{ headerShown: false }} 
      >
        {() => <Login setIsUserLoggedIn={setIsUserLoggedIn} />}
      </Screen>

*/