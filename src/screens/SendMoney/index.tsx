import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { Modalize } from 'react-native-modalize'
import { showMessage } from 'react-native-flash-message'
import { FontAwesome5 } from '@expo/vector-icons'
import { fontFamily, getHeight, getWidth } from '../../utils/styles'

// Components
import Header from '../../components/TabScreenHeader'
import colors from '../../utils/colors'
import CustomTextInput from '../../components/TextInput'
import Button from '../../components/Button'

// Icons
const verified = require('../../../assets/icons/verified.png')
const bacButton = require('../../../assets/icons/back.png')

// Images
const user = require('../../../assets/ricardo.png')

const contacts = [
  {
    id: '1',
    name: 'Atawodi Emmanuel',
    avatar: user,
    username: 'fibonacci',
    verified: true,
  },
  {
    id: '2',
    name: 'Sean Wagwan',
    avatar: user,
    username: 'sean',
  },
  {
    id: '3',
    name: 'Jermaine Cole',
    avatar: user,
    username: 'jcole',
    verified: true,
  },
  {
    id: '4',
    name: 'Yemi Alade',
    avatar: user,
    username: 'yemi',
    verified: true,
  },
  {
    id: '5',
    name: 'Local man',
    avatar: user,
    username: 'neighbourhood_nuisance',
  },
  {
    id: '6',
    name: 'David Adeleke',
    avatar: user,
    username: 'davido',
    verified: true,
  },
]

const SendMoney = ({}) => {
  const [input, setInput] = useState('')
  const [isUserActive, setIsUserActive] = useState(false)
  const [selectedUser, setUser] = useState({})

  const modalizeRef = useRef<Modalize>(null)
  const animated = useRef(new Animated.Value(0)).current

  const openModal = () => {
    modalizeRef.current?.open()
    Keyboard.dismiss()
  }

  const closeModal = () => {
    modalizeRef.current?.close()
  }

  const formatAmount = (amount: any) => {
    return amount.replace(/\d(?=(?:\d{3})+$)/g, '$&,')
  }

  const onSend = () => {
    closeModal()
    showMessage({
      message: `You just sent ₦ ${formatAmount(input)} to ${
        selectedUser?.username
      }`,
      description: 'Funds!!! 💰 💰 💰',
      type: 'success',
      animated: true,
      backgroundColor: colors.SKY_BLUE,
      color: colors.BLUE,
      duration: 3000,
    })
    setInput('')
    setIsUserActive(false)
  }

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.userContainer}
      onPress={() => {
        setIsUserActive(true)
        setUser(item)
      }}
    >
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={item.avatar} />
      </View>
      <View style={styles.userDetailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.username}>{item.username}</Text>
      </View>
      {item.verified && <Image style={styles.verified} source={verified} />}
    </TouchableOpacity>
  )

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header textColor={colors.WHITE} text="Send Money">
          <FontAwesome5 name="money-bill" size={24} color="white" />
        </Header>
        <View style={styles.content}>
          <Text style={styles.availableBalance}>NGN 5,000,000 Available</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.nairaSymbol}>₦</Text>
            <TextInput
              style={styles.textInput}
              placeholder="0.00"
              keyboardType="numeric"
              maxLength={7}
              value={input}
              onChangeText={(value) => setInput(value)}
              autoFocus
              placeholderTextColor={colors.GRAY}
            />
          </View>
          <TouchableOpacity onPress={openModal} style={styles.chooseRecipient}>
            <Text
              style={{
                color: colors.NAVY_BLUE,
                fontSize: getHeight(15),
                fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
              }}
            >
              Choose Recipient
            </Text>
          </TouchableOpacity>
        </View>
        {isUserActive ? (
          <Modalize
            snapPoint={getHeight(700)}
            modalHeight={getHeight(750)}
            HeaderComponent={
              <TouchableOpacity onPress={() => setIsUserActive(false)}>
                <Image style={styles.backButton} source={bacButton} />
              </TouchableOpacity>
            }
            panGestureAnimatedValue={animated}
            ref={modalizeRef}
            modalStyle={styles.modal}
          >
            <View
              style={{
                alignItems: 'flex-start',
                marginTop: getHeight(40),
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={selectedUser.avatar} />
              </View>
              <View style={styles.userDetailsContainer}>
                <Text style={styles.name}>{selectedUser?.name}</Text>
                <Text style={styles.username}>{selectedUser?.username}</Text>
              </View>
              {selectedUser?.verified && (
                <Image style={styles.verified} source={verified} />
              )}
            </View>
            <View style={styles.selectedAmountContainer}>
              <Text style={{ color: colors.GRAY, fontSize: getHeight(20) }}>
                Amount
              </Text>
              <Text
                style={{
                  color: colors.NAVY_BLUE,
                  fontSize: getHeight(30),
                  marginTop: getHeight(10),
                }}
              >
                {input.length < 1 ? '₦ 0.00' : `₦${formatAmount(input)}.00`}
              </Text>
            </View>
            <View style={{ marginTop: getHeight(40) }}>
              <CustomTextInput placeholder="Add a message..." />
            </View>
            <View style={styles.sendButtonContainer}>
              <Button
                disabled={input === ''}
                text="Send"
                onPress={() => onSend()}
                borderRadius={50}
              />
            </View>
          </Modalize>
        ) : (
          <Modalize
            HeaderComponent={
              <Text style={styles.modalHeader}>Your Friends</Text>
            }
            snapPoint={getHeight(200)}
            modalHeight={getHeight(550)}
            panGestureAnimatedValue={animated}
            ref={modalizeRef}
            modalStyle={styles.modal}
            flatListProps={{
              data: contacts,
              renderItem,
              contentContainerStyle: {
                justifyContent: 'space-between',
              },
              showsVerticalScrollIndicator: false,
            }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: getWidth(20),
    backgroundColor: colors.BLUE,
  },
  content: {
    alignItems: 'center',
    marginTop: getHeight(40),
  },
  inputContainer: {
    flexDirection: 'row',
    minWidth: getWidth(100),
    alignItems: 'center',
    marginTop: getHeight(40),
    maxWidth: getWidth(300),
  },
  nairaSymbol: {
    color: colors.SKY_BLUE,
    fontSize: getHeight(40),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
  },
  textInput: {
    color: colors.LIGHT_GRAY,
    fontSize: getHeight(40),
    marginLeft: getWidth(10),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
    minWidth: getWidth(100),
  },
  chooseRecipient: {
    marginTop: getHeight(150),
    width: getWidth(200),
    height: getHeight(46),
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    borderRadius: getWidth(20),
  },
  availableBalance: {
    color: colors.WHITE,
    fontSize: getHeight(18),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
  modal: {
    padding: 20,
  },
  modalHeader: {
    fontSize: getHeight(20),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
    color: colors.NAVY_BLUE,
  },
  userContainer: {
    flexDirection: 'row',
    marginTop: getHeight(40),
    height: getHeight(40),
    alignItems: 'flex-start',
  },
  verified: {
    height: getHeight(19),
    width: getWidth(19),
    resizeMode: 'contain',
    marginLeft: getWidth(10),
    marginTop: getHeight(4),
  },
  name: {
    fontSize: getHeight(16),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
    color: colors.NAVY_BLUE,
  },
  username: {
    fontSize: getHeight(14),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
    color: colors.GRAY,
  },
  userDetailsContainer: {
    marginLeft: getWidth(20),
  },
  avatar: {
    height: getHeight(80),
    width: getWidth(60),
    resizeMode: 'contain',
  },
  avatarContainer: {
    height: getHeight(40),
    width: getWidth(40),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getHeight(10),
    backgroundColor: colors.WHITE,
  },
  backButton: {
    height: getHeight(22),
    width: getWidth(22),
    resizeMode: 'contain',
    marginTop: getHeight(20),
  },
  selectedAmountContainer: {
    alignItems: 'center',
    marginTop: getHeight(40),
  },
  sendButtonContainer: {
    marginTop: getHeight(50),
    alignItems: 'center',
  },
})

export default SendMoney
