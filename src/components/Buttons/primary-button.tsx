import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { Flexbox, Header4, StyleColors } from '../../styles'
interface BackgroundProps{
  width: number
}

const Background = styled(TouchableOpacity)<BackgroundProps>`
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
  onPress?: () => void
}

const PrimaryButton: FC<PrimaryButtonProps> = (props: PrimaryButtonProps) => {
  return (
    <Background onPress={props.onPress} width={props.width}>
      <Flexbox style={{ width: '100%', height: '100%' }}>
        <Label>{props.text}</Label>
      </Flexbox>
    </Background>
  )
}

export default PrimaryButton
