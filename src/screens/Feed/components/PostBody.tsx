import { PREVIEW_BODY_LENGTH } from '@config'
import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
const { width: screenWidth } = Dimensions.get('window')

function PostBody({ body, isPreview }: { body: string; isPreview: boolean }): JSX.Element {
  const previewBody =
    isPreview && body.length > PREVIEW_BODY_LENGTH
      ? `${body.substring(0, PREVIEW_BODY_LENGTH)}...`
      : body

  return (
    <PostBodyContainer>
      <PostBodyText>{previewBody}</PostBodyText>
    </PostBodyContainer>
  )
}
PostBody.defaultProps = {
  isPreview: false,
}

export default PostBody
const PostBodyContainer = styled.View`
  width: ${screenWidth - 80}px;
`
const PostBodyText = styled.Text`
  font-size: 16px;
  margin-top: 8px;
  padding-right: 16px;
`
