import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { Header3, StyleColors } from '../../styles'
interface BackgroundProps{
  width: number
}

const Background = styled(TouchableOpacity)<BackgroundProps>`
  width: ${props => props.width}px;
  height: 32px;
  background-color: ${StyleColors.lightGray};
  border-radius: 10px;
`

const Label = styled(Header3)`
  width: auto;
  height: 16px;
  color: ${StyleColors.primary};
`

interface SecondaryButtonProps{
  text: string
  width: number
}

const SecondaryButton: FC<SecondaryButtonProps> = (props: SecondaryButtonProps) => {
  return (
    <Background width={props.width}>
      <Label>{props.text}</Label>
    </Background>
  )
}

export default SecondaryButton
