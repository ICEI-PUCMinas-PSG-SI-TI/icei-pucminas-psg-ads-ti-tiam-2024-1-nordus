import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Register from "../screens/Register";


import IconCalendar from "../assets/icons/icon-calendar-black.svg"
import IconCalendarPressed from "../assets/icons/icon-calendar-tangerine.svg"
import IconDiamond from "../assets/icons/icon-diamond-black.svg"
import IconDiamondPressed from "../assets/icons/icon-diamond-tangerine.svg"
import IconProfile from "../assets/icons/icon-profile.svg"
import IconProfilePressed from "../assets/icons/icon-profile-tangerine.svg"
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
            name="Login"
            component={Login}
            options={{
                tabBarIcon:({focused}) => {
                    if(focused){
                        return <IconCalendarPressed/>
                    }
                    return <IconCalendar/>
                }
            }}
            />
             <Tab.Screen
            name="Register"
            component={Register}
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
            component={Profile}
            options={{
                tabBarIcon:({focused}) => {
                    if(focused){
                        return <IconProfilePressed/>
                    }
                    return <IconProfile/>
                }
            }}
            />
        </Tab.Navigator>
    )
}