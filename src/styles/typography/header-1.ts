import { Text } from 'react-native'
import styled from 'styled-components'
interface HeaderProps{
  color?: string
}

const Header1 = styled(Text)<HeaderProps>`
  color: ${props => props.color || 'red'};
  font-family: Saira;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
`

export default Header1
