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

const DropdownStyle = styled(Flexbox)`
    background-color: ${StyleColors.lightGray};
    border-radius: 10px;
    width: 332px;
    height: 32px;
    justify-content: center;
`

const DropdownTextStyle = styled(Header3)`
    color: ${StyleColors.darkGray};
    text-align: left;
    font-family: 'Arial' ;
    font-weight: bold;
    font-size: 12px;
    padding-left: 16px;
`

const DropdownOptionStyle = styled(Text)`
    color: ${StyleColors.mediumGray};
    background-color: ${StyleColors.lightGray};
    width: 332px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    display: flex;
    justify-content: center;
`

const DropdownIconStyle = styled(Image)`
    width: 16px;
    height: 16px;
    margin-top: 4px;
    margin-right: 16px;
`

const DropdownScrollStyle = styled(ScrollView)`
  position: absolute;
  top: 32px;
  z-index: 10000;
`

interface DropdownProps {
  placeholder?: string,
  options: {
    value: string
  }[]
  onChange: (val: string) => void
}

// Componente que recebe um array e mostra as opções em formato de dropdown
const Dropdown: FC<DropdownProps> = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentPos, setCurrentPos] = React.useState({ x: 0, y: 0 })
  const [currentValue, setCurrentValue] = React.useState('')

  let dropdownRef : React.RefObject<View> = React.useRef()

  React.useEffect(() => {
    dropdownRef.current.measure((fx, fy, width, height, px, py) => {
      setCurrentPos({ x: px, y: py })
    })
  }, [isOpen])

  function getOptions () {
    const children = []
    for (let i = 0; i < props.options.length; i++) {
      children.push(
        <TouchableWithoutFeedback key={i} onPress={() => {
          setIsOpen(!isOpen)
          setCurrentValue(props.options[i].value)
          props.onChange(props.options[i].value)
        }}>
          <DropdownOptionStyle>
            {props.options[i].value}
          </DropdownOptionStyle>
        </TouchableWithoutFeedback>
      )
    }
    return children
  }

  return (
    <View ref={dropdownRef}>
      <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
        <DropdownStyle>
          <DropdownTextStyle>{currentValue === '' ? props.placeholder : currentValue}</DropdownTextStyle>
          <Spacer/>
          <DropdownIconStyle source={require('../../assets/chevron-down.png')}/>
        </DropdownStyle>
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
              <DropdownScrollStyle style={{ display: isOpen ? 'flex' : 'none', position: 'absolute', top: currentPos.y + 32, left: currentPos.x }}>
                <Flexbox flexDirection="column">
                  {getOptions()}
                </Flexbox>
              </DropdownScrollStyle>
            </Flexbox>
          </TouchableWithoutFeedback>
        </Modal>
    </View>
  )
}

export default Dropdown
