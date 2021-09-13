import { Text } from 'react-native'
import styled from 'styled-components'
import { StyleColors } from '..'
interface HeaderProps{
  color?: string
}

// Tamanho e configuração especifico para um header1
const Header1 = styled(Text)<HeaderProps>`
  color: ${props => props.color || StyleColors.darkGray};
  font-family: 'Arial';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
`

export default Header1
