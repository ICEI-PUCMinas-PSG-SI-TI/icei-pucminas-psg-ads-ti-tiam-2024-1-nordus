import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
