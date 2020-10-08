import React, { useState } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native'
// import RadioForm from 'react-native-simple-radio-button'
import colors from '../../utils/colors'
import { fontFamily, getHeight, getWidth } from '../../utils/styles'

const CustomTextInput = ({ placeholder }: any) => {
  const [hidePassword, setHidePassword] = useState(true)
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={placeholder === 'Password' && hidePassword}
        placeholder={placeholder}
        style={styles.textInput}
      />
      {placeholder === 'Password' && (
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Text>Lock</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: getHeight(62),
    width: getWidth(327),
    borderBottomColor: colors.NAVY_BLUE,
    borderBottomWidth: 0.7,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textInput: {
    height: getHeight(40),
    width: getWidth(280),
    fontSize: getHeight(14),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
})

export default CustomTextInput
