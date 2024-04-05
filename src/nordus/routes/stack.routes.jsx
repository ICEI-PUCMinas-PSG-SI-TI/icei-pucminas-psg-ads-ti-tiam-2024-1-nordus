import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} 
      />
      <Screen 
        name="Register" 
        component={Register} 
        options={{ headerShown: false }} 
      />
      <Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false, tabBarStyle: { display: 'none' } }} 
      />
    </Navigator>
  );
}
