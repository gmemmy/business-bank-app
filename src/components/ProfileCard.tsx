import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import colors from '../utils/colors'
import { fontFamily, getHeight, getWidth } from '../utils/styles'

// Images
const user1 = require('../../assets/ricardo.png')

// Icons
const verified = require('../../assets/icons/verified.png')
const badge1 = require('../../assets/icons/badge1.png')
const badge2 = require('../../assets/icons/badge2.png')
const badge3 = require('../../assets/icons/badge3.png')
const badge4 = require('../../assets/icons/badge4.png')

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.avatar} source={user1} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Emmanuel Atawodi</Text>
        <Image style={styles.verified} source={verified} />
      </View>
      <Text style={styles.email}>atawodiemmanuel@gmail.com</Text>
      <View style={styles.badgeContainer}>
        <Image style={styles.badge} source={badge1} />
        <Image style={styles.badge} source={badge2} />
        <Image style={styles.badge} source={badge3} />
        <Image style={styles.badge} source={badge4} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    height: getHeight(296),
    width: getWidth(327),
    marginTop: getHeight(40),
    borderRadius: getWidth(10),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: '#000',
    alignItems: 'center',
  },
  avatar: {
    resizeMode: 'contain',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getHeight(10),
  },
  verified: {
    height: getHeight(19),
    width: getWidth(19),
    resizeMode: 'contain',
    marginLeft: getWidth(10),
  },
  name: {
    fontSize: getHeight(16),
    color: colors.NAVY_BLUE,
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
  imageContainer: {
    height: getHeight(100),
    width: getWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getHeight(30),
  },
  email: {
    marginTop: getHeight(10),
    fontSize: getHeight(14),
    color: colors.NAVY_BLUE,
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
  },
  badgeContainer: {
    flexDirection: 'row',
    marginTop: getHeight(10),
    justifyContent: 'space-between',
    backgroundColor: '#F8F9F9',
    width: getWidth(296),
    padding: 20,
    height: getHeight(80),
    borderRadius: getWidth(10),
  },
  badge: {
    height: getHeight(40),
    width: getWidth(40),
    resizeMode: 'contain',
  },
})

export default ProfileCard
