import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../utils/colors'
import { fontFamily, getHeight, getWidth } from '../../utils/styles'

// Components
import Header from '../../components/TabScreenHeader'

// Icons
const edit = require('../../../assets/icons/edit.png')

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <Header text="Profile" icon={edit} />
      </View>
      <View style={styles.general}>
        <Text style={styles.settingsHeader}>GENERAL</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperHalf: {
    flex: 0.4,
    backgroundColor: colors.BLUE,
    paddingHorizontal: getWidth(20),
    borderBottomRightRadius: getHeight(40),
  },
  general: {
    flex: 0.6,
    paddingHorizontal: getWidth(20),
  },
  settingsHeader: {
    marginTop: getHeight(40),
    color: colors.GRAY,
    fontSize: getHeight(16),
    fontFamily: fontFamily.FONT_FAMILY_BOLD,
  },
})

export default Profile
