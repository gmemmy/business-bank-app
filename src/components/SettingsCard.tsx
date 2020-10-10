import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import colors from '../utils/colors'
import { fontFamily, getHeight, getWidth } from '../utils/styles'

// Icons
const next = require('../../assets/icons/right.png')

const SettingsCard = ({ header, subText, icon }: any) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.subText}>{subText}</Text>
      </View>
      <Image style={styles.next} source={next} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: getWidth(327),
    height: getHeight(65),
    backgroundColor: colors.WHITE,
    borderRadius: getWidth(15),
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: '#000',
    alignItems: 'center',
  },
  iconContainer: {
    height: getHeight(40),
    width: getWidth(40),
    backgroundColor: colors.SKY_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getWidth(10),
  },
  icon: {
    height: getHeight(22),
    width: getWidth(22),
    resizeMode: 'contain',
  },
  textContainer: {
    marginLeft: getWidth(10),
    justifyContent: 'space-between',
    height: getHeight(40),
  },
  header: {
    color: colors.NAVY_BLUE,
    fontSize: getHeight(16),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
  subText: {
    color: colors.NAVY_BLUE,
    fontSize: getHeight(14),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
  },
  next: {
    marginLeft: 'auto',
    height: getHeight(15),
    width: getWidth(15),
    resizeMode: 'contain',
  },
})

export default SettingsCard
