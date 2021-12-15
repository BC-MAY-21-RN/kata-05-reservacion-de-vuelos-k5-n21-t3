import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SignUp, Login, Flights, Booking, Home} from '../screens'

const Stack = createNativeStackNavigator();

const Routing = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Flights" component={Flights}/>
            <Stack.Screen name="Booking" component={Booking}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default Routing
