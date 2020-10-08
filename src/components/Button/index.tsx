import React from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import colors from '../../utils/colors'
import { fontFamily, getHeight, getWidth } from '../../utils/styles'

const Button = ({
  width,
  height,
  text,
  icon,
  color,
  onPress,
  borderRadius,
  borderColor,
}: ButtonProp) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: color ? color : colors.BLUE,
          borderRadius: borderRadius ? getWidth(borderRadius) : getWidth(5),
          height: height ? getHeight(height) : getHeight(48),
          width: width ? getWidth(width) : getWidth(156),
          borderColor: borderColor,
          borderWidth: StyleSheet.hairlineWidth + 0.3,
        },
        styles.container,
      ]}
    >
      {text && !icon && <Text style={styles.text}>{text}</Text>}
      {icon && !text && <Image style={styles.icon} source={icon} />}
      {icon && text && (
        <>
          <Image style={styles.icon} source={icon} />
          <Text style={styles.text}>{text}</Text>
        </>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: getHeight(18),
    width: getWidth(18),
    resizeMode: 'contain',
  },
  text: {
    color: colors.WHITE,
    fontSize: getHeight(16),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
})

export default Button
