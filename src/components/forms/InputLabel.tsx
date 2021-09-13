import React, { FC } from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'
import { Flexbox, Header3, StyleColors } from '../../styles'

const Background = styled(Flexbox)`
  width: 335px;
  height: 64px;
`

const Label = styled(Header3)`
  width: 319px;
  margin-left: 16px;
  color: ${StyleColors.primary};
`
const Input = styled(TextInput)`
  margin-top: 8px;
  width: 335px;
  height: 40px;
  border-radius: 10px;
  background-color: ${StyleColors.lightGray};
  padding: 8px 16px;
`

interface InputLabelProps{
  style?: any
  check: boolean
  password?: boolean
  title: string
  placeholder: string
  onChange: (val: string) => void
}

const InputLabel: FC<InputLabelProps> = (props: InputLabelProps) => {
  return (
    <Background style={props.style} flexDirection='column'>
      <Label>{props.title}</Label>
      <Input autoCapitalize='none' secureTextEntry={props.password} onChangeText={props.onChange} placeholder={props.placeholder}></Input>
    </Background>
  )
}

export default InputLabel
