import styled from 'styled-components'
import { Text } from 'react-native'
interface HeaderProps{
  color?: string
}

const Paragraph = styled(Text)<HeaderProps>`
  color: ${props => props.color || 'cor'};
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
`

export default Paragraph
