import styled from 'styled-components'
import { Text } from 'react-native'
import { StyleColors } from '..'

interface HeaderProps{
  color?: string
}

const Header2 = styled(Text)<HeaderProps>`
  color: ${props => props.color || StyleColors.darkGray};
  font-family: 'OpenSans';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
`

export default Header2
