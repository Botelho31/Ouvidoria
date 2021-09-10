import styled from 'styled-components'

interface HeaderProps{
  color?: string
}

const Paragraph = styled.p<HeaderProps>`
  color: ${props => props.color || 'cor'};
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
`

export default Paragraph
