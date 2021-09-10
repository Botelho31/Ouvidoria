import React, { FC } from 'react'
import { Image, StyleSheet, TextInput } from 'react-native'
import styled from 'styled-components'
import { Flexbox, StyleColors } from '../../styles'

const InputDropdownStyle = styled(Flexbox)`
  height: 32px;
  border-radius: 10px;
  background-color: ${StyleColors.lightGray};
  padding: 8px 12px;
`

interface InputDropdownProps {
  style?: any,
  placeholder?: string,
}

const InputDropdown: FC<InputDropdownProps> = (props: InputDropdownProps) => {
  return (
    <InputDropdownStyle style={props.style}>
    </InputDropdownStyle>
  )
}

export default InputDropdown
