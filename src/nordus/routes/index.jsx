import { NavigationContainer } from "@react-navigation/native";
import {StackRoutes} from "./stack.routes"
import {DrawerRoutes} from "./drawer.routes"
import { TabRoutes } from "./tab.routes";
import  {BarberRoutes}  from "./barber.routes";


export function Routes ({ isUserLoggedIn, setIsUserLoggedIn, isBarber}) {
    return (
        <NavigationContainer>
        {isUserLoggedIn ? (
            isBarber ? (
                <BarberRoutes setIsUserLoggedIn={setIsUserLoggedIn} />
            ) : (
                <DrawerRoutes setIsUserLoggedIn={setIsUserLoggedIn} />
            )
        ) : (
            <StackRoutes setIsUserLoggedIn={setIsUserLoggedIn} />
        )}
    </NavigationContainer>
    )
}
