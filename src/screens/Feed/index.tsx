import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectPosts, selectIsLoading } from './redux/selectors'
import { dispatchGetPosts } from './redux/actions'
import Post from './types/Post'
import PostItem from './components/Item'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Feed({
  posts,
  isLoading,
  getPosts,
  navigation,
}: {
  posts: Post[]
  isLoading: boolean
  getPosts: Function
  navigation: any
}): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getPosts()
  }, [getPosts])

  const handleRefresh = () => {
    getPosts()
  }
  const loadNext = () => {
    if (isLoading) return
    const page = currentPage + 1
    setCurrentPage(page)
    // load next page here if pagination is supported by API
    // smth like:
    // getPosts({ page })
  }

  const renderItem = ({ item }: { item: Post }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Post', { post: item })}>
        <PostItem post={item} />
      </TouchableOpacity>
    )
  }
  return (
    <FlatList
      refreshing={isLoading}
      onRefresh={handleRefresh}
      data={posts}
      renderItem={renderItem}
      initialNumToRender={10}
      onEndReached={loadNext}
      ItemSeparatorComponent={() => <Separator />}
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

const Separator = styled.View`
  height: 1px;
  background-color: #e0e0e0;
  margin-vertical: 16px;
`
