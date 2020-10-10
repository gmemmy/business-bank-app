import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getHeight, getWidth } from '../utils/styles'

// Screens
import Register from '../screens/Authentication/SignUp'
import Login from '../screens/Authentication/Login'

// Bottom Tab Screens
import HomeScreen from './home'
import WalletScreen from './wallet'
import ProfileScreen from './profile'

// Tab Icons
const homeActive = require('../../assets/icons/tab/home-active.png')
const homeInactive = require('../../assets/icons/tab/home-inactive.png')
const expensesActive = require('../../assets/icons/tab/expenses-active.png')
const expensesInactive = require('../../assets/icons/tab/expenses-inactive.png')
const walletActive = require('../../assets/icons/tab/wallet-active.png')
const walletInactive = require('../../assets/icons/tab/wallet-inactive.png')
const profileActive = require('../../assets/icons/tab/profile-active.png')
const profileInactive = require('../../assets/icons/tab/profile-inactive.png')
const plus = require('../../assets/icons/tab/plus.png')

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
      <Tab.Navigator tabBarOptions={{ showLabel: true }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image source={homeActive} style={styles.icon} />
              ) : (
                <Image source={homeInactive} style={styles.icon} />
              ),
          }}
        />
        <Tab.Screen
          name="Expenses"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image source={expensesActive} style={styles.icon} />
              ) : (
                <Image source={expensesInactive} style={styles.icon} />
              ),
          }}
        />
        <Tab.Screen
          name="Plus"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image source={plus} style={styles.plus} />
              ) : (
                <Image source={plus} style={styles.plus} />
              ),
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={WalletScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image source={walletActive} style={styles.icon} />
              ) : (
                <Image source={walletInactive} style={styles.icon} />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image source={profileActive} style={styles.icon} />
              ) : (
                <Image source={profileInactive} style={styles.icon} />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: getWidth(27),
    height: getHeight(20),
    resizeMode: 'contain',
  },
  plus: {
    width: getWidth(48),
    height: getHeight(48),
    resizeMode: 'contain',
    marginBottom: getHeight(10),
  },
})
