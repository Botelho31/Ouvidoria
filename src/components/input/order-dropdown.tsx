import React, { FC } from 'react'
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
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
    font-family: 'Arial' ;
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
  z-index: 10000;
`

interface OrderDropdownProps {
  placeholder?: string,
  options: {
    value: string
  }[]
  onChange: (val: string) => void
}

// Componente que recebe um array e mostra as opções em formato de dropdown, com um iconezinho de ordenar no final da view
const OrderDropdown: FC<OrderDropdownProps> = (props: OrderDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentPos, setCurrentPos] = React.useState({ x: 0, y: 0 })
  const [currentValue, setCurrentValue] = React.useState('')

  let OrderDropdownRef : React.RefObject<View> = React.useRef()

  React.useEffect(() => {
    OrderDropdownRef.current.measure((fx, fy, width, height, px, py) => {
      setCurrentPos({ x: px, y: py })
    })
  }, [])

  function getOptions () {
    const children = []
    for (let i = 0; i < props.options.length; i++) {
      children.push(
        <TouchableWithoutFeedback onPress={() => {
          setIsOpen(!isOpen)
          setCurrentValue(props.options[i].value)
          props.onChange(props.options[i].value)
        }}>
          <OrderDropdownOptionStyle>
            {props.options[i].value}
          </OrderDropdownOptionStyle>
        </TouchableWithoutFeedback>
      )
    }
    return children
  }

  return (
    <View ref={OrderDropdownRef}>
      <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
        <OrderDropdownStyle>
          <OrderDropdownTextStyle>{currentValue === '' ? props.placeholder : currentValue}</OrderDropdownTextStyle>
          <Spacer/>
          <OrderDropdownIconStyle source={require('../../assets/sort-icon.png')}/>
        </OrderDropdownStyle>
      </TouchableWithoutFeedback>
        <Modal
          transparent={true}
          visible={isOpen}
          onRequestClose={() => {
            setIsOpen(!isOpen)
          }}
        >
          <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
            <Flexbox>
              <OrderDropdownScrollStyle style={{ display: isOpen ? 'flex' : 'none', position: 'absolute', top: currentPos.y + 32, left: currentPos.x }}>
                <Flexbox flexDirection="column">
                  {getOptions()}
                </Flexbox>
              </OrderDropdownScrollStyle>
            </Flexbox>
          </TouchableWithoutFeedback>
        </Modal>
    </View>
  )
}

export default OrderDropdown
