import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import colors from '../utils/colors'
import { fontFamily, getHeight, getWidth } from '../utils/styles'

const Header = ({ text, icon, textColor, iconStyle }: any) => {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.text, { color: textColor ? textColor : colors.WHITE }]}
      >
        {text}
      </Text>
      <TouchableOpacity>
        <Image style={[iconStyle ? iconStyle : styles.icon]} source={icon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: getHeight(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: getHeight(22),
    width: getWidth(21),
  },
  text: {
    fontSize: getHeight(20),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
})

export default Header
