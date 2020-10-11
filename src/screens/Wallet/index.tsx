import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

// COmponents
import Header from '../../components/TabScreenHeader'
import colors from '../../utils/colors'
import { fontFamily, getHeight, getWidth } from '../../utils/styles'
import ContactCard from '../../components/ContactCard'
import TransactionCard from '../../components/TransactionSummaryCard'

// Icons
const addCard = require('../../../assets/icons/add-card.png')
const upIcon = require('../../../assets/icons/up.png')
const downIcon = require('../../../assets/icons/down.png')

// Images
const card1 = require('../../../assets/card1.png')
const card2 = require('../../../assets/card2.png')
const user1 = require('../../../assets/ricardo.png')
const user2 = require('../../../assets/josie.png')

const cards = [
  {
    id: '1',
    image: card1,
  },
  {
    id: '2',
    image: card2,
  },
]

const contactList = [
  {
    id: '0',
    image: user2,
    name: 'Josie Marian',
  },
  {
    id: '1',
    image: user1,
    name: 'Franco Baresi',
  },
  {
    id: '2',
    image: user1,
    name: 'Kalidou Koulibaly',
  },
  {
    id: '3',
    image: user1,
    name: 'Memphis Depay',
  },
  {
    id: '4',
    image: user1,
    name: 'Zlatan Ibrahimovic',
  },
]

const Wallet = ({ navigation }: any) => {
  return (
    <>
      <View style={{ paddingHorizontal: getWidth(20) }}>
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
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
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
            <View style={styles.infoContainer}>
              <Image style={styles.arrowIcon} source={downIcon} />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionDetailsHeader}>Expense</Text>
                <Text style={styles.amount}>₦500,000</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactList}>
            <Text style={styles.contactListHeader}>Recent beneficiaries</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{
                minWidth: getWidth(600),
                justifyContent: 'space-between',
                marginTop: getHeight(20),
              }}
              data={contactList}
              renderItem={({ item }) => <ContactCard contact={item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.transactionSummary}>
            <Text style={styles.transactionsHeader}>Transactions</Text>
            <View style={styles.transactionListContainer}>
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
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
    justifyContent: 'space-between',
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
    marginTop: getHeight(40),
  },
  contactListHeader: {
    color: colors.NAVY_BLUE,
    fontSize: getHeight(20),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
  transactionSummary: {
    marginTop: getHeight(30),
  },
  transactionsHeader: {
    color: colors.NAVY_BLUE,
    fontSize: getHeight(18),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
  transactionListContainer: {
    paddingBottom: getHeight(10),
  },
})

export default Wallet
