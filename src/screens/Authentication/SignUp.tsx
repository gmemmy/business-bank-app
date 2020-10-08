import React from 'react'
import { View, Text } from 'react-native'
import Authentication from '../../components/Authentication'
import CustomTextInput from '../../components/TextInput'

const SignUp = ({ navigation }: ScreenProp) => {
  return (
    <Authentication type="register" navigation={navigation}>
      <CustomTextInput placeholder="First Name" />
      <CustomTextInput placeholder="Last Name" />
      <CustomTextInput placeholder="BVN" />
      <CustomTextInput placeholder="Phone Number" />
      <CustomTextInput placeholder="Address" />
      <CustomTextInput placeholder="Password" />
    </Authentication>
  )
}

export default SignUp
