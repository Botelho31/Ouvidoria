import styled from 'styled-components'

interface HeaderProps{
  color?: string
}

const Header3 = styled.h3<HeaderProps>`
  color: ${props => props.color || 'cor'};
  font-family: Saira;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
`

export default Header3
