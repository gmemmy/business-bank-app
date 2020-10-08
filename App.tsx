import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font'
import { Navigator } from './src/navigation/'

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
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

  if (!fontLoaded) {
    return <View />
  }
  return (
    <Navigator />
  )
}
