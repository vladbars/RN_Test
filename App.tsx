/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import Navigation from '@navigation'
import styled from 'styled-components/native'
import { Provider } from 'react-redux'
import store from './src/store'
function App(): JSX.Element {
  return (
    <Container>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </Container>
  )
}

export default App

const Container = styled.SafeAreaView`
  flex: 1;
`
