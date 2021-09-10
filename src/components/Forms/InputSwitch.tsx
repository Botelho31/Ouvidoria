import React, { FC } from 'react'
import { Switch } from 'react-native'
import styled from 'styled-components'
import { Flexbox, Header3, StyleColors } from '../../styles'

const BackgroundFooter = styled(Flexbox)`
  width: 335px;
  height: 64px;
`

const Label = styled(Header3)`
  color: ${StyleColors.darkGray};
`
const SwitchInput = styled(Switch)`
  background-color: ${StyleColors.lightGray};
  margin-left: 20px;
`

interface InputSwitchProps{
  text: string
}

const InputSwitch: FC<InputSwitchProps> = (props: InputSwitchProps) => {
  const [isSelected, setIsSelected] = React.useState(false)

  function updateSelect () {
    setIsSelected(!isSelected)
  }

  return (
    <BackgroundFooter flexDirection='row'>
      <Label>{props.text}</Label>
      <SwitchInput ios_backgroundColor={StyleColors.lightGray} trackColor={{ false: StyleColors.mediumGray, true: StyleColors.primary }} value={isSelected} onChange={updateSelect}></SwitchInput>
    </BackgroundFooter>
  )
}

export default InputSwitch
