import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useReducer } from 'react';
import { View, AsyncStorage } from 'react-native'
import FlashMessage from "react-native-flash-message"
import * as Font from 'expo-font'
import { Navigator, TabNavigator } from './src/navigation/'
import Store from './src/context/store'
import rootReducer from './src/reducers'
import initialState from './src/reducers/initialState'
import getActions from './src/actions/'

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  const [state, dispatch] = useReducer(rootReducer, initialState)
  const [validated, setValidated] = useState(false)

  useEffect(() => {
    getRememberedUser()
    Font.loadAsync({
      'MavenProRegular': require('./assets/fonts/MavenPro-Regular.ttf'),
      'MavenProMedium': require('./assets/fonts/MavenPro-Medium.ttf'),
      'MavenProSemiBold': require('./assets/fonts/MavenPro-SemiBold.ttf'),
      'MavenProBold': require('./assets/fonts/MavenPro-Bold.ttf'),
    }).then(() => setFontLoaded(true))

    return () => {
      setFontLoaded(false)
    }
  }, [])

  const getRememberedUser = async () => {
    const user = await AsyncStorage.getItem('authenticated')
    if (user !== null) {
      if (user) {
        setValidated(true)
      } else {
        return setValidated(false)
      }
    } else {
      return setValidated(false)
    }
  }

  if (!fontLoaded) {
    return <View />
  }
  return (
    <Store.Provider value={{ ...state, ...getActions(dispatch) }}>
      <StatusBar style='light' backgroundColor='#042C5C' />
      {(validated || state?.user?.isAuthenticated) ? <TabNavigator /> :  <Navigator />}
      <FlashMessage position="top" />
    </Store.Provider>
  )
}
