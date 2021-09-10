import React, { FC } from 'react'
import { Image, TextInput } from 'react-native'
import styled from 'styled-components'
import { Flexbox, StyleColors } from '../../styles'

const SearchBarStyle = styled(Flexbox)`
  width: 335px;
  height: 56px;
  border-radius: 10px;
  background-color: ${StyleColors.lightGray};
  padding: 8px 12px;
`

const TextInputStyle = styled(TextInput)`
  width: 100%;
  flex: 1;
`

const ImageStyle = styled(Image)`
  height: 24px;
  width: 24px;
  margin: 8px;
  margin-right: 2px;
`

interface SearchBarProps {
  style?: any,
  placeholder?: string
}

const SearchBar: FC<SearchBarProps> = (props: SearchBarProps) => {
  return (
    <SearchBarStyle style={props.style}>
      <TextInputStyle placeholder={props.placeholder}/>
      <ImageStyle source={require('../../assets/search.png')}/>
    </SearchBarStyle>
  )
}

export default SearchBar
