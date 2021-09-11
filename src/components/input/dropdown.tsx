import React, { FC } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'
import { Flexbox, Header3, Header4, Spacer, StyleColors } from '../../styles'

const styles = StyleSheet.create({
  headerStyle: {
    marginLeft: 16,
    fontWeight: 'bold'
  },
  dropdownOptionStyle: {
    color: StyleColors.mediumGray,
    backgroundColor: StyleColors.lightGray,
    width: 332,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    display: 'flex',
    justifyContent: 'center'
  },
  dropdownStyle: {
    backgroundColor: StyleColors.lightGray,
    borderRadius: 10,
    width: 332,
    height: 32,
    display: 'flex',
    justifyContent: 'center'
  },
  dropdownTextStyle: {
    color: StyleColors.darkGray,
    textAlign: 'left',
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
    fontSize: 12,
    paddingLeft: 16
  },
  dropdownIconStyle: {
    width: 16,
    height: 16,
    marginTop: 4,
    marginRight: 16
  }
})

interface InputDropdownProps {
  placeholder?: string,
  options: {
    value: string
  }[]
}

const InputDropdown: FC<InputDropdownProps> = (props: InputDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  function getOptions () {
    const children = []
    for (let i = 0; i < props.options.length; i++) {
      children.push(<Text style={styles.dropdownOptionStyle}>{props.options[i].value}</Text>)
    }
    return children
  }

  return (
    <View >
      <Flexbox style={styles.dropdownStyle}>
        <Header3 style={styles.dropdownTextStyle}>{props.placeholder}</Header3>
        <Spacer/>
        <Image style={styles.dropdownIconStyle} source={require('../../assets/chevron-down.png')}/>
      </Flexbox>
      <ScrollView>
        <Flexbox flexDirection="column">
          {getOptions()}
        </Flexbox>
      </ScrollView>
    </View>
  )
}

export default InputDropdown
