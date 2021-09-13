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
    font-family: 'OpenSans';
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

const Dropdown: FC<DropdownProps> = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentValue, setCurrentValue] = React.useState('')

  function getOptions () {
    const children = []
    for (let i = 0; i < props.options.length; i++) {
      children.push(
        <TouchableWithoutFeedback onPress={() => {
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
    <View >
      <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
        <DropdownStyle>
          <DropdownTextStyle>{currentValue === '' ? props.placeholder : currentValue}</DropdownTextStyle>
          <Spacer/>
          <DropdownIconStyle source={require('../../assets/chevron-down.png')}/>
        </DropdownStyle>
      </TouchableWithoutFeedback>
      <DropdownScrollStyle style={{ display: isOpen ? 'flex' : 'none' }}>
        <Flexbox flexDirection="column">
          {getOptions()}
        </Flexbox>
      </DropdownScrollStyle>
    </View>
  )
}

export default Dropdown
