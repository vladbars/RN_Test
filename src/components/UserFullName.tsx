import User from '@screens/Profile/types/User'
import React from 'react'
import styled from 'styled-components/native'

function UserFullName({ profile }: { profile: User }): JSX.Element {
  const { name } = profile || {}
  return <UserFullNameText>{name}</UserFullNameText>
}

export default UserFullName
const UserFullNameText = styled.Text`
  font-size: 24px;
  margin-vertical: 8px;
`
