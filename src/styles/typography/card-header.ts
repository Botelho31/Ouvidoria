import styled from 'styled-components'
import { StyleColors } from '..'

interface HeaderProps{
  color?: string
}

const CardHeader = styled.text<HeaderProps>`
  color: ${props => props.color || StyleColors.darkGray};
  font-family: Saira;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
`

export default CardHeader
