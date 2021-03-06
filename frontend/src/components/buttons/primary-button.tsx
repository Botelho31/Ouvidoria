import React, { FC } from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import styled from 'styled-components'
import { Flexbox, Header4, StyleColors } from '../../styles'
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
  style?: any
  text: string
  width: number
  onPress?: () => void
}

// Botão Primário utilizado na hierarquia da identidade visual
const PrimaryButton: FC<PrimaryButtonProps> = (props: PrimaryButtonProps) => {
  return (
    <Background style={props.style} onPress={props.onPress} width={props.width}>
      <Flexbox style={{ width: '100%', height: '100%' }}>
        <Label>{props.text}</Label>
      </Flexbox>
    </Background>
  )
}

export default PrimaryButton
