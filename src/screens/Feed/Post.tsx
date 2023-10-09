import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import Post from '@screens/Feed/types/Post'
import Avatar from 'components/Avatar/index'
import PostBody from '@screens/Feed/components/PostBody'
import UserFullName from 'components/UserFullName'
import { connect } from 'react-redux'
import { selectProfile } from '@screens/Profile/redux/selectors'
import User from '@screens/Profile/types/User'
import { createStructuredSelector } from 'reselect'
import { dispatchGetProfile } from '@screens/Profile/redux/actions'
import { ScrollView } from 'react-native'
function PostFull({
  navigation,
  route,
  getProfile,
  selectProfileFromStore,
}: {
  navigation: any
  route: any
  getProfile: Function
  selectProfileFromStore: Function
}): JSX.Element {
  const { userId, body } = route.params?.post ?? {}
  const profile: User = selectProfileFromStore(userId)

  useEffect(() => {
    getProfile({ userId })
  }, [getProfile, userId])

  return (
    <ScrollView>
      <PostFullContainer>
        <TouchableContainer onPress={() => navigation.navigate('Profile', { profile })}>
          <Avatar userId={userId} />
          <UserFullName profile={profile} />
        </TouchableContainer>
        <PostBody body={body} />
      </PostFullContainer>
    </ScrollView>
  )
}

const PostFullContainer = styled.View`
  align-items: center;
`
const TouchableContainer = styled.TouchableOpacity`
  align-items: center;
`

const mapDispatchToProps = {
  getProfile: dispatchGetProfile,
}

const mapStateToProps = createStructuredSelector({
  selectProfileFromStore: selectProfile(),
})
export default connect(mapStateToProps, mapDispatchToProps)(PostFull)
