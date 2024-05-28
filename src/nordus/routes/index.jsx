import { NavigationContainer } from "@react-navigation/native";
import {StackRoutes} from "./stack.routes"
import {DrawerRoutes} from "./drawer.routes"
import { TabRoutes } from "./tab.routes";


export function Routes ({ isUserLoggedIn, setIsUserLoggedIn }) {
    return (
        <NavigationContainer>
            {isUserLoggedIn ? (
                <DrawerRoutes setIsUserLoggedIn={setIsUserLoggedIn} />
            ) : (
                <StackRoutes setIsUserLoggedIn={setIsUserLoggedIn} />
            )}        
        </NavigationContainer>
    )
}
