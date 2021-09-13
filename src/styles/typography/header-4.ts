import styled from 'styled-components'
import { Text } from 'react-native'
import { StyleColors } from '..'
interface HeaderProps{
  color?: string
}

const Header4 = styled(Text)<HeaderProps>`
  color: ${props => props.color || StyleColors.darkGray};
  font-family: 'Arial' ;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`

export default Header4
