import styled from 'styled-components'

interface HeaderProps{
  color?: string
}

const CardHeader = styled.text<HeaderProps>`
  color: ${props => props.color || 'cor'};
  font-family: Saira;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
`

export default CardHeader
