import React, { FC } from 'react'
import { Image, ImageSourcePropType, ViewStyle } from 'react-native'
import styled from 'styled-components'
import { Flexbox, Paragraph } from '../../styles'

const Background = styled(Flexbox)`
  background-color: white;
  width: 49px;
  height: 41px;
  margin-top: 4px;
  margin-bottom: 3px;
`

const Label = styled(Paragraph)`
`
const Img = styled(Image)`
  width: 24px;
  height: 24px;
`

interface IconLabelProps{
  style: ViewStyle
  image: ImageSourcePropType
  label: string
}

const IconLabel: FC<IconLabelProps> = (props: IconLabelProps) => {
  return (
    <Background style={props.style} flexDirection='column'>
      <Img source={props.image}></Img>
      <Label>{props.label}</Label>
    </Background>
  )
}

export default IconLabel
