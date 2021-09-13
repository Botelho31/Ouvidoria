import styled from 'styled-components'
import { Text } from 'react-native'
import { StyleColors } from '..'
interface HeaderProps{
  color?: string
}

// Tamanho e configuração especifico para um paragraph
const Paragraph = styled(Text)<HeaderProps>`
  color: ${props => props.color || StyleColors.darkGray};
  font-family: 'Arial' ;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
`

export default Paragraph
