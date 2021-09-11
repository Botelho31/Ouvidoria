import React, { FC } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { Header4, StyleColors } from '../../styles'

interface BackgroundProps{
  width: number
}

const Background = styled(TouchableOpacity)<BackgroundProps>`
  display: flex;
  flex-direction: row;
  height: 16px;
  width: ${props => props.width + 'px' || 'auto'};
`

const Label = styled(Header4)`
  margin-left: 4px;
  color: ${StyleColors.darkGray};
`
const Icon = styled(Image)`
  width: 12px;
  height: 12px;
  margin-top: 2px;
  margin-bottom: 2px;
`

interface CommentButtonProps{
  commentNumber: number
  width: number
}

const CommentButton: FC<CommentButtonProps> = (props: CommentButtonProps) => {
  const text = props.commentNumber <= 1 ? props.commentNumber + 'comentário' : props.commentNumber + 'comentários'
  return (
    <Background onPress={() => { console.log('Clicado') } } width={props.width}>
      <Icon source={require('../../assets/posts/comment-icon.png')}></Icon>
      <Label>{text}</Label>
    </Background>
  )
}

export default CommentButton
