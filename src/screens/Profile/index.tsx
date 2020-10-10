import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import colors from '../../utils/colors'
import { fontFamily, getHeight, getWidth } from '../../utils/styles'

// Components
import Header from '../../components/TabScreenHeader'
import SettingsCard from '../../components/SettingsCard'
import ProfileCard from '../../components/ProfileCard'
import { TouchableOpacity } from 'react-native-gesture-handler'

// Icons
const edit = require('../../../assets/icons/edit.png')
const bell = require('../../../assets/icons/bell.png')
const guard = require('../../../assets/icons/guard.png')
const settings = require('../../../assets/icons/settings.png')

const settingsData = [
  {
    id: '1',
    header: 'Profile Settings',
    subText: 'Update and modify your profile',
    icon: settings,
  },
  {
    id: '2',
    header: 'Privacy',
    subText: 'Change your password',
    icon: guard,
  },
  {
    id: '3',
    header: 'Notifications',
    subText: 'Change your notification settings',
    icon: bell,
  },
]

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <Header type="logout" text="Profile" icon={edit} />
        <ProfileCard />
      </View>
      <View style={styles.lowerHalf}>
        <View style={styles.general}>
          <Text style={styles.settingsHeader}>GENERAL</Text>
          <FlatList
            contentContainerStyle={{
              marginTop: getHeight(20),
              height: getHeight(220),
              justifyContent: 'space-between',
            }}
            data={settingsData}
            renderItem={({ item }) => (
              <SettingsCard
                header={item.header}
                subText={item.subText}
                icon={item.icon}
              />
            )}
          />
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
    flex: 0.4,
    backgroundColor: colors.BLUE,
    paddingHorizontal: getWidth(20),
    borderBottomRightRadius: getHeight(40),
  },
  lowerHalf: {
    flex: 0.6,
  },
  general: {
    marginTop: 'auto',
    paddingHorizontal: getWidth(20),
    marginBottom: getHeight(50),
  },
  settingsHeader: {
    marginTop: getHeight(40),
    color: colors.GRAY,
    fontSize: getHeight(16),
    fontFamily: fontFamily.FONT_FAMILY_BOLD,
  },
  logoutButton: {
    width: getWidth(100),
    height: getHeight(50),
    backgroundColor: colors.RED,
  },
})

export default Profile
