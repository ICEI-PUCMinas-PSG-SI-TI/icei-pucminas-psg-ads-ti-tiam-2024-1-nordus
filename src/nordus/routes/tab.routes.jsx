import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Assinaturas from "../screens/others/Assinaturas";
import Agendamento from "../screens/others/Agendamento";

import IconProfile from "../assets/icons/icon-profile.svg";
import IconProfilePressed from "../assets/icons/icon-profile-tangerine.svg";
import IconCalender from "../assets/icons/icon-calendar-black.svg";
import IconCalenderPressed from "../assets/icons/icon-calendar-tangerine.svg";
import IconDiamond from "../assets/icons/icon-diamond-black.svg";
import IconDiamondPressed from "../assets/icons/icon-diamond-tangerine.svg";
import IconHome from "../assets/icons/icon-home.svg";
import IconHomePressed from "../assets/icons/icon-home-tangerine.svg";

import Colors from "../assets/util/Colors";
const Tab = createBottomTabNavigator();

export function TabRoutes({ setIsUserLoggedIn }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.WHITE_SMOKE,
          height: 60
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <IconHomePressed />;
            }
            return <IconHome />;
          },
        }}
      />
      <Tab.Screen
        name="Agendamento"
        component={Agendamento}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <IconCalenderPressed />;
            }
            return <IconCalender />;
          },
        }}
      />
      <Tab.Screen
        name="Assinaturas"
        component={Assinaturas}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <IconDiamondPressed />;
            }
            return <IconDiamond />;
          },
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
        {(props) => (
          <Profile {...props} setIsUserLoggedIn={setIsUserLoggedIn} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}