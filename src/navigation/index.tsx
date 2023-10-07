import { NavigationContainer } from '@react-navigation/native'
import FeedScreen from '@screens/Feed'
import PostScreen from '@screens/Post'
import ProfileScreen from '@screens/Profile'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import navigationOptions from './options'

const Stack = createStackNavigator()

function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={navigationOptions}>
          <Stack.Screen
            name='Feed'
            component={FeedScreen}
          />
          <Stack.Screen
            name='Post'
            component={PostScreen}
          />
          <Stack.Screen
            name='Profile'
            component={ProfileScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
