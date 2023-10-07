import React from 'react'
import { ScrollView, Text, View } from 'react-native'
function Post(): JSX.Element {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, color: 'red' }}>Post</Text>
      </View>
    </ScrollView>
  )
}

export default Post
