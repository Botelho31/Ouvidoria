import styled from 'styled-components'
import { View } from 'react-native'

interface FlexboxProps{
  horizontalAlign?: string,
  verticalAlign?: string,
  flexDirection?: string,
}

// Cria uma view flex
const Flexbox = styled(View)<FlexboxProps>`
  display: flex;
  justify-content: ${props => props.horizontalAlign || 'center'};
  align-items: ${props => props.verticalAlign || 'center'};
  flex-direction: ${props => props.flexDirection || 'row'};
`

export default Flexbox
