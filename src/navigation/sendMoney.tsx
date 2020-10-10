import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SendMoneyScreen from '../screens/SendMoney'

const Stack = createStackNavigator()

const SendMoney = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SendMoney" component={SendMoneyScreen} />
    </Stack.Navigator>
  )
}

export default SendMoney
