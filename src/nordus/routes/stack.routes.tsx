import { createNativeStackNavigator } from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator ();
import Login from '../screens/Login'
import Register from '../screens/Register'

export function StackRoutes () {
    return (
        <Navigator>
            <Screen name='Login' component={Login}/>
            <Screen name='Register' component={Register}/>
        </Navigator>
    )
}