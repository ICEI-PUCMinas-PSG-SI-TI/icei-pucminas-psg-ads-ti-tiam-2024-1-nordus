import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Patrocinadores from "../screens/others/Patrocinadores";
import Produtos from "../screens/others/Produtos";
import Equipe from "../screens/others/Equipe";
import MeusDados from "../screens/others/MeusDados";


const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes({ setIsUserLoggedIn }) {
  return (
    <Navigator>
      <Screen name="Login" options={{ headerShown: false }}>
        {() => <Login setIsUserLoggedIn={setIsUserLoggedIn} />}
      </Screen>
      <Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Screen name="Home" component={Home} />
      <Screen
        name="Equipe"
        component={Equipe}
        options={{ headerShown: false }}
      />
      <Screen
        name="Patrocinadores"
        component={Patrocinadores}
        options={{ headerShown: false }}
      />
      <Screen
        name="Produtos"
        component={Produtos}
        options={{ headerShown: false }}
      />

    </Navigator>
  );
}
