/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import Navigation from '@navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SafeAreaView, useColorScheme } from 'react-native'

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />
    </SafeAreaView>
  )
}

export default App
