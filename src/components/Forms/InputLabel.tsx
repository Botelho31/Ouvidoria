import React, { FC } from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'
import { Flexbox, Header3, StyleColors } from '../../styles'

const BackgroundFooter = styled(Flexbox)`
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
  check: boolean
  title: string
  placeholder: string
}

const InputLabel: FC<InputLabelProps> = (props: InputLabelProps) => {
  return (
    <BackgroundFooter flexDirection='column'>
      <Label>{props.title}</Label>
      <Input placeholder={props.placeholder}></Input>
    </BackgroundFooter>
  )
}

export default InputLabel
