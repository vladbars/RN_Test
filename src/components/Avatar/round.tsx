import React from 'react'
import styled from 'styled-components/native'
import { AVATAR_URL } from '@config'

function RoundAvatar({ userId }: { userId: number }): JSX.Element {
  return <AvatarImage source={{ uri: `${AVATAR_URL}/100?u=${userId}` }} />
}

export default RoundAvatar

const AvatarImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  resize-mode: cover;
`
