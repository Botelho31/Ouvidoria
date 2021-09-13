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

const TypeDropdownStyle = styled(Flexbox)`
    background-color: ${StyleColors.lightGray};
    border-radius: 10px;
    width: 217px;
    height: 32px;
    justify-content: center;
`

const TypeDropdownTextStyle = styled(Header3)`
    color: ${StyleColors.primary};
    text-align: left;
    font-family: 'Arial' ;
    font-weight: bold;
    font-size: 12px;
    padding-left: 16px;
`

const TypeDropdownOptionStyle = styled(Text)`
    color: ${StyleColors.mediumGray};
    background-color: ${StyleColors.lightGray};
    width: 217px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    display: flex;
    justify-content: center;
`

const TypeDropdownIconStyle = styled(Image)`
    width: 16px;
    height: 16px;
    margin-top: 4px;
    margin-right: 16px;
`

const TypeDropdownScrollStyle = styled(ScrollView)`
  position: absolute;
  top: 32px;
  z-index: 10000;
`

interface TypeDropdownProps {
  placeholder?: string,
  options: {
    value: string
  }[]
  onChange: (val: string) => void
}

// Componente que utiliza o dropDown e permite que o usuário também digite a fim de pesquisar dentro do dropdown
const TypeDropdown: FC<TypeDropdownProps> = (props: TypeDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentPos, setCurrentPos] = React.useState({ x: 0, y: 0 })
  const [currentValue, setCurrentValue] = React.useState('')

  let TypeDropdownRef : React.RefObject<View> = React.useRef()

  React.useEffect(() => {
    TypeDropdownRef.current.measure((fx, fy, width, height, px, py) => {
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
          <TypeDropdownOptionStyle>
            {props.options[i].value}
          </TypeDropdownOptionStyle>
        </TouchableWithoutFeedback>
      )
    }
    return children
  }

  return (
    <View ref={TypeDropdownRef}>
      <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
        <TypeDropdownStyle>
          <TypeDropdownTextStyle>{currentValue === '' ? props.placeholder : currentValue}</TypeDropdownTextStyle>
          <Spacer/>
          <TypeDropdownIconStyle source={require('../../assets/chevron-down.png')}/>
        </TypeDropdownStyle>
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
              <TypeDropdownScrollStyle style={{ display: isOpen ? 'flex' : 'none', position: 'absolute', top: currentPos.y + 32, left: currentPos.x }}>
                <Flexbox flexDirection="column">
                  {getOptions()}
                </Flexbox>
              </TypeDropdownScrollStyle>
            </Flexbox>
          </TouchableWithoutFeedback>
        </Modal>
    </View>
  )
}

export default TypeDropdown
