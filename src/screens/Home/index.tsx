import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import colors from '../../utils/colors'
import { fontFamily, getHeight, getWidth } from '../../utils/styles'
import { ScrollView } from 'react-native-gesture-handler'

// Components
import Button from '../../components/Button'
import TransactionCard from '../../components/TransactionSummaryCard'
import Header from '../../components/TabScreenHeader'

// Icons
const notificationIcon = require('../../../assets/icons/notification.png')
const calculation = require('../../../assets/icons/calculation.png')
const send = require('../../../assets/icons/send.png')

// Images
const budget = require('../../../assets/budget.png')

const Home = ({ navigation }: ScreenProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <Header text="Your Budget" icon={notificationIcon} />
        <View style={styles.budgetContainer}>
          <Image style={styles.budget} source={budget} />
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            text="Send Money"
            icon={send}
            color={colors.SKY_BLUE}
            borderColor={colors.SKY_BLUE}
            textColor={colors.BLUE}
            onPress={() => navigation.navigate('Home')}
            fontSize={14}
            fontType={fontFamily.FONT_FAMILY_SEMI_BOLD}
          />
          <Button
            text="Calculation"
            icon={calculation}
            color={colors.SKY_BLUE}
            borderColor={colors.SKY_BLUE}
            textColor={colors.BLUE}
            onPress={() => navigation.navigate('Expenses')}
            fontSize={14}
            fontType={fontFamily.FONT_FAMILY_SEMI_BOLD}
          />
        </View>
        <View style={styles.transactionSummary}>
          <Text style={styles.transactionsHeader}>Transactions</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.transactionListContainer}
          >
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperHalf: {
    flex: 0.5,
    backgroundColor: colors.BLUE,
    borderBottomRightRadius: getHeight(40),
    paddingHorizontal: getWidth(20),
  },
  budget: {
    height: getHeight(366),
    width: getWidth(335),
    resizeMode: 'contain',
  },
  budgetContainer: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: '#000',
    marginTop: getHeight(10),
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: getHeight(20),
    justifyContent: 'space-between',
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
    minHeight: getHeight(510),
  },
})

export default Home
