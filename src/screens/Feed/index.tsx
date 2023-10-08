import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectPosts, selectIsLoading } from './redux/selectors'
import { dispatchGetPosts } from './redux/actions'
import Post from './types/Post'

function Feed({
  posts,
  isLoading,
  getPosts,
}: {
  posts: Post[]
  isLoading: boolean
  getPosts: Function
}): JSX.Element {
  useEffect(() => {
    getPosts()
  }, [getPosts])

  const handleRefresh = () => {
    getPosts()
  }
  const loadNext = () => {
    if (isLoading) return
    // load next page here if pagination is supported by API
    // smth like: 
    // getPosts({ page: currentPage })
  }

  return (
    <FlatList
      onRefresh={handleRefresh}
      data={posts}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
        </View>
      )}
      initialNumToRender={10}
      onEndReached={loadNext}
      onEndReachedThreshold={0.9}
    />
  )
}
const mapDispatchToProps = {
  getPosts: dispatchGetPosts,
}

const mapStateToProps = createStructuredSelector({
  posts: selectPosts(),
  isLoading: selectIsLoading(),
})
export default connect(mapStateToProps, mapDispatchToProps)(Feed)
