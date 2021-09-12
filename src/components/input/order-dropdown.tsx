import React, { FC } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import styled from 'styled-components'
import { Flexbox, Header3, Header4, Spacer, StyleColors } from '../../styles'

const styles = StyleSheet.create({
  headerStyle: {
    marginLeft: 16,
    fontWeight: 'bold'
  }
})

const OrderDropdownStyle = styled(Flexbox)`
    background-color: ${StyleColors.lightGray};
    border-radius: 10px;
    width: 108px;
    height: 32px;
    justify-content: center;
`

const OrderDropdownTextStyle = styled(Header3)`
    color: ${StyleColors.primary};
    text-align: left;
    font-family: 'OpenSans';
    font-weight: bold;
    font-size: 12px;
    padding-left: 16px;
`

const OrderDropdownOptionStyle = styled(Text)`
    color: ${StyleColors.mediumGray};
    background-color: ${StyleColors.lightGray};
    width: 108px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    display: flex;
    justify-content: center;
`

const OrderDropdownIconStyle = styled(Image)`
    width: 16px;
    height: 16px;
    margin-top: 4px;
    margin-right: 16px;
`

const OrderDropdownScrollStyle = styled(ScrollView)`
  position: absolute;
  top: 32px;
`

interface OrderDropdownProps {
  placeholder?: string,
  options: {
    value: string
  }[]
}

const OrderDropdown: FC<OrderDropdownProps> = (props: OrderDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentValue, setCurrentValue] = React.useState('')

  function getOptions () {
    const children = []
    for (let i = 0; i < props.options.length; i++) {
      children.push(
        <TouchableWithoutFeedback onPress={() => setCurrentValue(props.options[i].value)}>
          <OrderDropdownOptionStyle>
            {props.options[i].value}
          </OrderDropdownOptionStyle>
        </TouchableWithoutFeedback>
      )
    }
    return children
  }

  return (
    <View >
      <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
        <OrderDropdownStyle>
          <OrderDropdownTextStyle>{currentValue === '' ? props.placeholder : currentValue}</OrderDropdownTextStyle>
          <Spacer/>
          <OrderDropdownIconStyle source={require('../../assets/sort-icon.png')}/>
        </OrderDropdownStyle>
      </TouchableWithoutFeedback>
      <OrderDropdownScrollStyle style={{ display: isOpen ? 'flex' : 'none' }}>
        <Flexbox flexDirection="column">
          {getOptions()}
        </Flexbox>
      </OrderDropdownScrollStyle>
    </View>
  )
}

export default OrderDropdown
