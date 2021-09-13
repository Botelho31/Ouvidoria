import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { Flexbox, Header3, StyleColors } from '../../styles'
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
  onPress?: void
}

const SecondaryButton: FC<SecondaryButtonProps> = (props: SecondaryButtonProps) => {
  return (
    <Background onPress={props.onPress} width={props.width}>
      <Flexbox style={{ width: '100%', height: '100%' }}>
        <Label>{props.text}</Label>
      </Flexbox>
    </Background>
  )
}

export default SecondaryButton
