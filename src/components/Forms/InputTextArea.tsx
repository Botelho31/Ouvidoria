import React, { FC } from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'
import { Flexbox, Header3, StyleColors } from '../../styles'

const Background = styled(Flexbox)`
  width: 335px;
  height: auto;
`

const Label = styled(Header3)`
  width: 319px;
  margin-left: 16px;
  color: ${StyleColors.primary};
`

interface InputProps{
  fontSize: string
  weight: number
  minHeight: number
}

const Input = styled(TextInput)<InputProps>`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.weight};
  margin-top: 8px;
  width: 335px;
  height: auto;
  min-height: ${props => props.minHeight}px;
  border-radius: 10px;
  background-color: ${StyleColors.lightGray};
  padding: 8px 16px;
`

interface InputTextAreaProps{
  check: boolean
  title: string
  type: string
  placeholder: string
  onChange: (val: string) => void
}

const InputTextArea: FC<InputTextAreaProps> = (props: InputTextAreaProps) => {
  const fontSize = props.type === 'texto' ? '12px' : '14px'
  const weight = props.type === 'texto' ? 400 : 700
  const numberOfLines = props.type === 'texto' ? 4 : 3
  return (
    <Background flexDirection='column'>
      <Label>{props.title}</Label>
      <Input onChangeText={props.onChange} placeholder={props.placeholder} multiline={true} numberOfLines={numberOfLines} minHeight={(18 * numberOfLines)} fontSize={fontSize} weight={weight} textAlignVertical="top"></Input>
    </Background>
  )
}

export default InputTextArea
