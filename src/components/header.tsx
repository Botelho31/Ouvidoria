import React, { FC } from 'react'
import { Image, StyleSheet } from 'react-native'
import styled from 'styled-components'
import { Flexbox, Header1, StyleColors } from '../styles'

const styles = StyleSheet.create({
  headerStyle: {
    shadowColor: '#F0F0F0',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0
  }
})

const HeaderStyle = styled(Flexbox)`
  height: 48px;
  width: 100%;
  background-color: white;
`

const ImageStyle = styled(Image)`
  height: 40px;
  width: 40px;
  position: absolute;
  top: 4px;
  left: 16px;
`

interface HeaderProps {
  isSearchbar: boolean
}

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <HeaderStyle style={styles.headerStyle}>
      <ImageStyle source={require('../assets/user-circle.png')}/>
      <Header1 color={StyleColors.primary}> Voz do Povo </Header1>
    </HeaderStyle>
  )
}

export default Header
