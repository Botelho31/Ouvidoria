import styled from 'styled-components'

interface HeaderProps{
  color?: string
}

const Header2 = styled.h2<HeaderProps>`
  color: ${props => props.color || 'cor'};
  font-family: Saira;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
`

export default Header2
