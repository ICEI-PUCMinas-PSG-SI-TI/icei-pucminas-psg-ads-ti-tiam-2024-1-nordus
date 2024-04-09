import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { SvgUri } from 'react-native';
import { Header } from "react-native/Libraries/NewAppScreen";
import IconProfile from "../assets/icons/icon-profile.svg"
import IconHome from "../assets/icons/icon-home.svg"
import IconHomePressed from "../assets/icons/icon-home-tangerine.svg"
import Colors from "../assets/util/Colors";
const Tab = createBottomTabNavigator();

export default function TabRoutes(){
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
            name="Profile"
            component={Profile}
            />
        </Tab.Navigator>
    )
}