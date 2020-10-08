import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import Register from '../screens/Authentication/SignUp'
import Login from '../screens/Authentication/Login'

const Stack = createStackNavigator()

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding" headerMode="none">
        <Stack.Screen name="RegisterScreen" component={Register} />
        <Stack.Screen name="LogInScreen" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
