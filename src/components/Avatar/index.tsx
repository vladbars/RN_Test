import React from 'react'
import styled from 'styled-components/native'
import { AVATAR_URL } from '@config'

function Avatar({ userId }: { userId: number }): JSX.Element {
  return <AvatarImage source={{ uri: `${AVATAR_URL}/500?u=${userId}` }} />
}

export default Avatar

const AvatarImage = styled.Image`
  margin-top: 48px;
  
  width: 300px;
  height: 300px;
  border-radius: 32px;
  resize-mode: cover;
`
