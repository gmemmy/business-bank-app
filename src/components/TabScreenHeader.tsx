import React, { useContext } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  AsyncStorage,
} from 'react-native'
import colors from '../utils/colors'
import { fontFamily, getHeight, getWidth } from '../utils/styles'
import store from '../context/store'

const Header = ({ text, icon, textColor, iconStyle, type, children }: any) => {
  const context = useContext<any>(store)
  return (
    <View style={styles.container}>
      <Text
        style={[styles.text, { color: textColor ? textColor : colors.WHITE }]}
      >
        {text}
      </Text>
      {type === 'logout' ? (
        <TouchableOpacity
          onPress={() => {
            AsyncStorage.removeItem('authenticated')
            context.setIsAuthenticated(false)
          }}
          style={styles.logoutButton}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Image style={[iconStyle ? iconStyle : styles.icon]} source={icon} />
        </TouchableOpacity>
      )}
      {children && children}
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
  logoutButton: {
    width: getWidth(100),
    height: getHeight(30),
    backgroundColor: colors.RED,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getWidth(5),
  },
  logoutText: {
    color: colors.WHITE,
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
    fontSize: getHeight(16),
  },
})

export default Header
