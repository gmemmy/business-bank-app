import React, { useState, useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  AsyncStorage,
} from 'react-native'
import { getHeight, getWidth, fontFamily } from '../utils/styles'
import store from '../context/store'

// Components
import Button from '../components/Button'
import colors from '../utils/colors'

// Icons
const backButton = require('../../assets/icons/back.png')
const facebook = require('../../assets/icons/facebook.png')
const google = require('../../assets/icons/google.png')
const unchecked = require('../../assets/icons/check-circle.png')
const checked = require('../../assets/icons/check-mark.png')

const Authentication = ({ type, navigation, children }: any) => {
  const [rememberMe, setRememberMe] = useState(false)

  const handleRememberMe = async (value: boolean) => {
    if (value === true) {
      await AsyncStorage.setItem('authenticated', JSON.stringify(rememberMe))
    }
  }

  const context = useContext<any>(store)
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.scrollViewContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            {type === 'login' && (
              <Text style={styles.headerText}>Welcome, Login</Text>
            )}
            {type === 'register' && (
              <Text style={styles.headerText}>Hi, Please Signup</Text>
            )}
          </View>
          <View style={styles.socialMediaButtonsContainer}>
            <Button
              borderColor={colors.GRAY}
              height={40}
              onPress={() => context.setIsAuthenticated(true)}
              color={colors.WHITE}
              icon={facebook}
              text="Facebook"
              textColor={colors.NAVY_BLUE}
            />
            <Button
              borderColor={colors.GRAY}
              height={40}
              onPress={() => context.setIsAuthenticated(true)}
              color={colors.WHITE}
              icon={google}
              text="Google"
              textColor={colors.NAVY_BLUE}
              disabled={false}
            />
          </View>
          <View style={styles.textInputContainer}>{children}</View>
          <View style={styles.forgotPasswordContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
                <Image
                  style={styles.checkBox}
                  source={rememberMe ? checked : unchecked}
                />
              </TouchableOpacity>
              <Text style={{ marginLeft: getWidth(5) }}>Remember me</Text>
            </View>
            {type === 'login' && (
              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.bottomArea}>
            <Button
              borderColor={colors.GRAY}
              height={48}
              borderRadius={10}
              width={327}
              onPress={() => {
                context.setIsAuthenticated(true)
                rememberMe && handleRememberMe(rememberMe)
              }}
              color={colors.BLUE}
              text={type == 'register' ? 'Signup' : 'Login'}
            />
            {type === 'login' ? (
              <View style={styles.belowButtonPrompt}>
                <Text style={styles.bottomText}>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RegisterScreen')}
                >
                  <Text
                    style={[styles.bottomText, styles.bottomTextNavigation]}
                  >
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.belowButtonPrompt}>
                <Text style={styles.bottomText}>Already have an account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('LogInScreen')}
                >
                  <Text
                    style={[styles.bottomText, styles.bottomTextNavigation]}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
  },
  scrollViewContainer: {
    paddingTop: getHeight(40),
    flex: 1,
    alignItems: 'center',
  },
  header: {
    marginRight: 'auto',
    height: getHeight(86),
    justifyContent: 'space-between',
    minWidth: getWidth(256),
    marginTop: getHeight(10),
  },
  backButton: {
    height: getHeight(14),
    width: getWidth(22),
    resizeMode: 'contain',
  },
  headerText: {
    fontFamily: fontFamily.FONT_FAMILY_SEMI_BOLD,
    fontSize: getHeight(32),
    lineHeight: getHeight(40),
  },
  socialMediaButtonsContainer: {
    flexDirection: 'row',
    width: getWidth(328),
    justifyContent: 'space-between',
    marginTop: getHeight(50),
  },
  textInputContainer: {
    marginTop: getHeight(40),
  },
  bottomArea: {
    marginTop: getHeight(30),
    alignItems: 'center',
  },
  belowButtonPrompt: {
    flexDirection: 'row',
    marginTop: getHeight(10),
  },
  bottomText: {
    color: colors.GRAY,
    fontSize: getHeight(16),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
  },
  bottomTextNavigation: {
    fontFamily: fontFamily.FONT_FAMILY_SEMI_BOLD,
    color: colors.NAVY_BLUE,
    marginLeft: getWidth(5),
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getHeight(20),
  },
  forgotPassword: {
    color: colors.BLUE,
    fontSize: getHeight(13),
    fontFamily: fontFamily.FONT_FAMILY_SEMI_BOLD,
  },
  checkBox: {
    height: getHeight(20),
    width: getWidth(20),
    resizeMode: 'contain',
  },
})

export default Authentication
