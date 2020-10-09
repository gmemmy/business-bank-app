import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import colors from '../../utils/colors'
import { fontFamily, getHeight, getWidth } from '../../utils/styles'

// Icons
const gas = require('../../../assets/icons/gas.png')

const TransactionCard = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={gas} />
      <View style={styles.details}>
        <Text style={styles.title}>Gas</Text>
        <Text style={styles.date}>Wednesday, 7th October</Text>
      </View>
      <Text style={styles.amount}>- ₦4,000</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    width: getWidth(335),
    height: getHeight(56),
    flexDirection: 'row',
    paddingHorizontal: getWidth(10),
    borderRadius: getWidth(10),
    marginTop: getHeight(10),
    alignItems: 'center',
  },
  amount: {
    marginLeft: 'auto',
    color: colors.RED,
    fontSize: getHeight(14),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
  icon: {
    height: getHeight(40),
    width: getWidth(40),
    resizeMode: 'contain',
  },
  details: {
    marginLeft: getWidth(15),
  },
  title: {
    fontSize: getHeight(16),
    fontFamily: fontFamily.FONT_FAMILY_BOLD,
    color: colors.NAVY_BLUE,
  },
  date: {
    fontSize: getHeight(13),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
    color: colors.NAVY_BLUE,
  },
})

export default TransactionCard
