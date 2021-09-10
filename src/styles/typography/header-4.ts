import styled from 'styled-components'

interface HeaderProps{
  color?: string
}

const Header4 = styled.h4<HeaderProps>`
  color: ${props => props.color || 'cor'};
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`

export default Header4
