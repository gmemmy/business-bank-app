import React, { useState } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'
import colors from '../../utils/colors'
import { fontFamily, getHeight, getWidth } from '../../utils/styles'

// Icons
const eye = require('../../../assets/icons/eye.png')
const eyeOff = require('../../../assets/icons/eye-off.png')

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
        <TouchableOpacity
          onPress={() => setHidePassword(!hidePassword)}
          style={styles.hidePasswordContainer}
        >
          <Image
            source={hidePassword ? eye : eyeOff}
            style={styles.hidePassword}
          />
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
  hidePassword: {
    width: getWidth(20),
    height: getHeight(20),
    resizeMode: 'contain',
  },
  hidePasswordContainer: {
    marginBottom: 'auto',
    marginTop: getHeight(30),
    marginLeft: 'auto',
  },
})

export default CustomTextInput
