import styled from 'styled-components'
import { View } from 'react-native'

interface MarginProps{
  marginRight?: string,
  marginLeft?: string,
  marginTop?: string,
  marginBottom?: string,
}

const Margin = styled(View)<MarginProps>`
  margin-right: ${props => props.marginRight || '0px'};
  margin-left: ${props => props.marginLeft || '0px'};
  margin-top: ${props => props.marginTop || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
`

export default Margin
