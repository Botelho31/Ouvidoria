import React, { FC } from 'react'
import { TextInput, Image, Text, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components'
import { create } from '../../infra/service/comment-service'
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
  idPost?: string
  idComment?: string
  idUser: string
  onPost: () => void
}

const CommentInput: FC<CommentInputProps> = (props: CommentInputProps) => {
  const [currentValue, setCurrentValue] = React.useState('')

  async function comment () {
    const data = {
      idUser: props.idUser,
      body: currentValue
    }
    if (props.idPost !== undefined) {
      data.idPost = props.idPost
    } else {
      data.idComment = props.idComment
    }
    await create(data)
    setCurrentValue('')
    props.onPost()
  }
  return (
    <Background flexDirection='row' horizontalAlign='flex-start' verticalAlign="center">
      <Input onChangeText={(val) => setCurrentValue(val)} value={currentValue} style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: 8 }} placeholder='Escrever um comentário...'></Input>
      <TouchableWithoutFeedback onPress={comment}>
        <Img source={require('../../assets/send-icon.png')}/>
      </TouchableWithoutFeedback>
      <Text style={{ display: 'none'}}>{currentValue}</Text>
    </Background>
  )
}

export default CommentInput
