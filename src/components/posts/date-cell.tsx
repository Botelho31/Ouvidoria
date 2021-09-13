import React, { FC } from 'react'
import styled from 'styled-components'
import { Flexbox, Paragraph, StyleColors } from '../../styles'

const Background = styled(Flexbox)`
`

const Label = styled(Paragraph)`
  color: ${StyleColors.discreteGray};
`

interface DateCellProps{
  children: string
}

// Componente que mosrta a celula de tempo, certamente formatada
const DateCell: FC<DateCellProps> = (props: DateCellProps) => {
  return (
    <Background flexDirection='column' verticalAlign="flex-start">
      <Label>{props.children}</Label>
    </Background>
  )
}

export default DateCell
