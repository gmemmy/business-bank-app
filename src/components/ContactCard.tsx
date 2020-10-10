import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import colors from '../utils/colors'
import { fontFamily, getHeight, getWidth, lineBreak } from '../utils/styles'

const ContactCard = ({ contact }: any) => {
  return (
    <View style={styles.container}>
      <View style={{ height: getHeight(80) }}>
        <Image style={styles.avatar} source={contact.image} />
      </View>
      <View style={{ alignItems: 'center', marginBottom: 'auto' }}>
        {lineBreak(contact.name).map((name: string) => (
          <Text style={styles.text} key={lineBreak(contact.name).indexOf(name)}>
            {name}
          </Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: getWidth(15),
    padding: 5,
  },
  avatar: {
    height: getHeight(100),
    width: getWidth(100),
    resizeMode: 'contain',
  },
  text: {
    color: colors.GRAY,
    fontSize: getHeight(13),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
    lineHeight: 20,
  },
})

export default ContactCard
