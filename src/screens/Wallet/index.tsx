import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

// COmponents
import Header from '../../components/TabScreenHeader'
import colors from '../../utils/colors'
import { fontFamily, getHeight, getWidth } from '../../utils/styles'
import { ScrollView } from 'react-native-gesture-handler'

// Icons
const addCard = require('../../../assets/icons/add-card.png')
const upIcon = require('../../../assets/icons/up.png')
const downIcon = require('../../../assets/icons/down.png')

// Images
const card1 = require('../../../assets/card1.png')
const card2 = require('../../../assets/card2.png')

const cards = [
  {
    id: '0',
    image: card1,
  },
  {
    id: '1',
    image: card2,
  },
]

const Wallet = () => {
  return (
    <View style={styles.container}>
      <Header
        text="Wallet"
        icon={addCard}
        textColor={colors.NAVY_BLUE}
        iconStyle={{
          height: getHeight(30),
          width: getWidth(30),
          resizeMode: 'contain',
        }}
      />
      <View style={{ height: getHeight(200) }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.cardsListContainer}
        >
          {cards.map((card) => (
            <TouchableOpacity key={card.id}>
              <Image style={styles.card} source={card.image} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.transactionInfo}>
        <View style={styles.infoContainer}>
          <Image style={styles.arrowIcon} source={upIcon} />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionDetailsHeader}>Income</Text>
            <Text style={styles.amount}>₦5,000,000</Text>
          </View>
        </View>
        <View style={[styles.infoContainer, { marginLeft: getWidth(40) }]}>
          <Image style={styles.arrowIcon} source={downIcon} />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionDetailsHeader}>Expense</Text>
            <Text style={styles.amount}>₦500,000</Text>
          </View>
        </View>
      </View>
      <View style={styles.contactList}>
        <Text>Send money to</Text>
        <View></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: getWidth(20),
  },
  card: {
    height: getHeight(300),
    width: getWidth(300),
    resizeMode: 'contain',
  },
  cardsListContainer: {
    marginTop: getHeight(20),
    flexDirection: 'row',
    alignItems: 'center',
    width: getWidth(550),
    justifyContent: 'space-evenly',
  },
  transactionInfo: {
    flexDirection: 'row',
    marginTop: getHeight(30),
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    height: getHeight(48),
    width: getWidth(48),
    resizeMode: 'contain',
  },
  transactionDetails: {
    marginLeft: getWidth(10),
    justifyContent: 'space-between',
    height: getHeight(48),
  },
  transactionDetailsHeader: {
    fontSize: getHeight(14),
    color: colors.GRAY,
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
  amount: {
    fontSize: getHeight(16),
    color: colors.NAVY_BLUE,
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
  contactList: {
    marginTop: getHeight(20),
  },
})

export default Wallet
