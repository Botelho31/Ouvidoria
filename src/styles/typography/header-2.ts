import styled from 'styled-components'
import { Text } from 'react-native'

interface HeaderProps{
  color?: string
}

const Header2 = styled(Text)<HeaderProps>`
  color: ${props => props.color || 'cor'};
  font-family: Saira;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
`

export default Header2
