import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Barber from '../screens/Barber';

const Stack = createNativeStackNavigator();

export function BarberRoutes({ setIsUserLoggedIn }) {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Barber" options={{ headerShown: false }}>
        {(props) => <Barber {...props} setIsUserLoggedIn={setIsUserLoggedIn} />}
        
      </Stack.Screen>
    </Stack.Navigator>
  );
}
