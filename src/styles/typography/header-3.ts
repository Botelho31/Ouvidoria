import styled from 'styled-components'
import { Text } from 'react-native'
import { StyleColors } from '..'
interface HeaderProps{
  color?: string
}

// Tamanho e configuração especifico para um header3
const Header3 = styled(Text)<HeaderProps>`
  color: ${props => props.color || StyleColors.darkGray};
  font-family: 'Arial';
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
`

export default Header3
