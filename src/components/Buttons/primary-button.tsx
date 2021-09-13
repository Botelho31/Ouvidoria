import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { Header4, StyleColors } from '../../styles'
interface BackgroundProps{
  width: number
}

const Background = styled(TouchableOpacity)<BackgroundProps>`
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  height: 32px;
  background-color: ${StyleColors.primary};
  border-radius: 10px;
`

const Label = styled(Header4)`
  width: auto;
  height: 16px;
  color: white;
`

interface PrimaryButtonProps{
  text: string
  width: number
}

const PrimaryButton: FC<PrimaryButtonProps> = (props: PrimaryButtonProps) => {
  return (
    <Background width={props.width}>
      <Label>{props.text}</Label>
    </Background>
  )
}

export default PrimaryButton
