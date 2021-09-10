import React, { FC } from 'react'
import styled from 'styled-components'
import { Flexbox, Header3, StyleColors } from '../../styles'
interface BackgroundProps{
  width: number
}

const BackgroundFooter = styled(Flexbox)<BackgroundProps>`
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
    <BackgroundFooter width={props.width}>
      <Label>{props.text}</Label>
    </BackgroundFooter>
  )
}

export default SecondaryButton