import { Text } from 'react-native'
import styled from 'styled-components'
import { StyleColors } from '..'

interface HeaderProps{
  color?: string
}

const CardHeader = styled(Text)<HeaderProps>`
  color: ${props => props.color || StyleColors.darkGray};
  font-family: 'Arial';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
`

export default CardHeader
