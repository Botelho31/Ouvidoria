import React, { FC } from 'react'
import styled from 'styled-components'
import { Flexbox, Header4, StyleColors } from '../../styles'
interface BackgroundProps{
  width: number
}

const BackgroundFooter = styled(Flexbox)<BackgroundProps>`
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
    <BackgroundFooter width={props.width}>
      <Label>{props.text}</Label>
    </BackgroundFooter>
  )
}

export default PrimaryButton
