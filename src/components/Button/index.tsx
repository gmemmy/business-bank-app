import React from 'react'
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
} from 'react-native'
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
  textColor,
  fontSize,
  fontType,
  disabled,
}: ButtonProp) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        {
          backgroundColor: color
            ? color
            : disabled
            ? colors.LIGHT_GRAY
            : colors.BLUE,
          borderRadius: borderRadius ? getWidth(borderRadius) : getWidth(5),
          height: height ? getHeight(height) : getHeight(48),
          width: width ? getWidth(width) : getWidth(156),
          borderColor: disabled ? colors.LIGHT_GRAY : borderColor,
          borderWidth: StyleSheet.hairlineWidth + 0.3,
        },
        styles.container,
      ]}
    >
      {text && !icon && (
        <Text
          style={{
            color: textColor ? textColor : colors.WHITE,
            fontSize: fontSize ? getHeight(fontSize) : getHeight(16),
            fontFamily: fontType ? fontType : fontFamily.FONT_FAMILY_MEDIUM,
            textAlign: 'center',
          }}
        >
          {text}
        </Text>
      )}
      {icon && !text && <Image style={styles.icon} source={icon} />}
      {icon && text && (
        <View style={styles.inButtonContainer}>
          <Image style={styles.icon} source={icon} />
          <Text
            style={{
              color: textColor ? textColor : colors.WHITE,
              marginLeft: getWidth(10),
              fontSize: fontSize ? getHeight(fontSize) : getHeight(16),
              fontFamily: fontType ? fontType : fontFamily.FONT_FAMILY_MEDIUM,
            }}
          >
            {text}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: getWidth(10),
  },
  icon: {
    height: getHeight(18),
    width: getWidth(18),
    resizeMode: 'contain',
  },
  inButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default Button
