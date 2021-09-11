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

const DateCell: FC<DateCellProps> = (props: DateCellProps) => {
  return (
    <Background flexDirection='column'>
      <Label>{props.children}</Label>
    </Background>
  )
}

export default DateCell
