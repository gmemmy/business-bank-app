import React from 'react'
import { View, Text } from 'react-native'
import Authentication from '../../components/Authentication'
import CustomTextInput from '../../components/TextInput'

const Login = ({ navigation }: ScreenProp) => {
  return (
    <Authentication type="login" navigation={navigation}>
      <CustomTextInput placeholder="Username" />
      <CustomTextInput placeholder="Password" />
    </Authentication>
  )
}

export default Login
