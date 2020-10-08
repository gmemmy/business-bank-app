import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native'
import { getHeight, getWidth, fontFamily } from '../utils/styles'

// Components
import Button from '../components/Button'
import colors from '../utils/colors'

// Icons
const backButton = require('../../assets/icons/back.png')
const facebook = require('../../assets/icons/facebook.png')
const google = require('../../assets/icons/google.png')

const Authentication = ({ type, navigation, children }: any) => {
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={backButton} style={styles.backButton} />
            </TouchableOpacity>
            {type === 'register' && (
              <Text style={styles.headerText}>Hi, Please Signup</Text>
            )}
            {type === 'login' && (
              <Text style={styles.headerText}>Welcome, Login</Text>
            )}
          </View>
          <View style={styles.socialMediaButtonsContainer}>
            <Button
              borderColor={colors.GRAY}
              height={40}
              onPress={() => navigation.navigate('RegisterScreen')}
              color={colors.WHITE}
              icon={facebook}
            />
            <Button
              borderColor={colors.GRAY}
              height={40}
              onPress={() => navigation.navigate('LogInScreen')}
              color={colors.WHITE}
              icon={google}
            />
          </View>
          <View style={styles.textInputContainer}>{children}</View>
          <View style={styles.forgotPasswordContainer}>
            <Text>Remember me</Text>
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
              onPress={() => navigation.navigate('RegisterScreen')}
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
})

export default Authentication
