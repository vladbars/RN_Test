import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import Post from '@screens/Feed/types/Post'
import RoundAvatar from 'components/Avatar/round'
import PostBody from './PostBody'
import UserFullName from 'components/UserFullName'
import { connect } from 'react-redux'
import { selectProfile, selectIsLoading } from '@screens/Profile/redux/selectors'
import User from '@screens/Profile/types/User'
import { createStructuredSelector } from 'reselect'
import { dispatchGetProfile } from '@screens/Profile/redux/actions'
function Item({
  post,
  getProfile,
  selectProfileFromStore,
}: {
  post: Post
  getProfile: Function
  selectProfileFromStore: Function
}): JSX.Element {
  const { userId, body } = post
  const profile: User = selectProfileFromStore(userId)

  useEffect(() => {
    getProfile({ userId })
  }, [getProfile, userId])

  return (
    <ItemContainer>
      <RoundAvatar userId={userId} />
      <ItemContent>
        <UserFullName profile={profile} />
        <PostBody
          body={body}
          isPreview
        />
      </ItemContent>
    </ItemContainer>
  )
}

const ItemContainer = styled.View`
  flex-direction: row;
`

const ItemContent = styled.View`
  margin-left: 16px;
`
const mapDispatchToProps = {
  getProfile: dispatchGetProfile,
}

const mapStateToProps = createStructuredSelector({
  selectProfileFromStore: selectProfile(),
})
export default connect(mapStateToProps, mapDispatchToProps)(Item)
