import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components'
import { Dropdown } from '..'
import { Flexbox, Header3, Header4, Spacer, StyleColors } from '../../styles'

const styles = StyleSheet.create({
  headerStyle: {
    marginLeft: 16,
    fontWeight: 'bold'
  },
  pickerStyle: {
    backgroundColor: StyleColors.lightGray,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: 332,
    height: 132,
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

const InputDropdownStyle = styled(Flexbox)`
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`

interface InputDropdownProps {
  style?: any,
  placeholder?: string,
  options: {
    value: string
  }[],
  label?: string
  onChange: (val: string) => void
}

const InputDropdown: FC<InputDropdownProps> = (props: InputDropdownProps) => {
  return (
    <InputDropdownStyle style={props.style}>
      <Header4 style={styles.headerStyle} color={StyleColors.primary}>{props.label}</Header4>
      <Dropdown onChange={props.onChange} options={props.options} placeholder={props.placeholder}/>
    </InputDropdownStyle>
  )
}

export default InputDropdown
