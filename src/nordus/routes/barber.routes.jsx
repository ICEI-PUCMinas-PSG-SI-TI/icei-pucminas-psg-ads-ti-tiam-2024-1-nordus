import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Barber from '../screens/Barber';
import { StackRoutes } from './stack.routes';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

export function BarberRoutes({ setIsUserLoggedIn, isUserLoggedIn }) {
  return (
    <Stack.Navigator>
      {isUserLoggedIn ? (
         <Stack.Screen name="StackRoute" options={{ headerShown: false }}>
         {(props) => <StackRoutes {...props} setIsUserLoggedIn={setIsUserLoggedIn} />}
       </Stack.Screen>
      ) : (
        <Stack.Screen name="Barber" options={{ headerShown: false }}>
          {(props) => <Barber {...props} setIsUserLoggedIn={setIsUserLoggedIn} />}
        </Stack.Screen>
      )}

<Stack.Screen name="Login" options={{ headerShown: false }}>
         {(props) => <Login {...props} setIsUserLoggedIn={setIsUserLoggedIn} />}
       </Stack.Screen>
    </Stack.Navigator>
  );
}
