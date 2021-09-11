import styled from 'styled-components'
import { Text } from 'react-native'
import { StyleColors } from '..'
interface HeaderProps{
  color?: string
}

const Paragraph = styled(Text)<HeaderProps>`
  color: ${props => props.color || StyleColors.darkGray};
  font-family: 'OpenSans';
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
`

export default Paragraph
