import React, { FC } from 'react'
import { TextInput, Image } from 'react-native'
import styled from 'styled-components'
import { Flexbox, Header3, StyleColors } from '../../styles'

const Background = styled(Flexbox)`
  width: 100%;
  height: 32px;
  border: 1px solid ${StyleColors.mediumGray};
  border-radius: 10px;
  margin-top: 11px;
  margin-bottom: 8px;
  margin-bottom: 8px;
`

const Input = styled(TextInput)`
  flex:1 ;
  alignSelf: stretch;
  height: 16px;
  background-color: ${StyleColors.lightGray};
`

const Img = styled(Image)`
  width: 16px;
  height: 16px;
  margin-right: 16px;
`

interface CommentInputProps{
  aaa?: number
}

const CommentInput: FC<CommentInputProps> = (props: CommentInputProps) => {
  return (
    <Background flexDirection='row' horizontalAlign='flex-start' verticalAlign="center">
      <Input style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: 8 }}placeholder='Escrever um comentário...'></Input>
      <Img source={require('../../assets/send-icon.png')}/>
    </Background>
  )
}

export default CommentInput
