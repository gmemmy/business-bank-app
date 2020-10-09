import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import Register from '../screens/Authentication/SignUp'
import Login from '../screens/Authentication/Login'

// Bottom Tab Screens
import HomeScreen from './home'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

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

export const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ showLabel: false }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          // options={{
          //   tabBarIcon: ({ focused }) =>
          //     focused ? (
          //       <Image source={activeHomeIcon} style={styles.icon} />
          //     ) : (
          //       <Image source={homeIcon} style={styles.icon} />
          //     ),
          // }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
