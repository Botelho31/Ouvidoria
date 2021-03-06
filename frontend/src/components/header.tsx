import React, { FC } from 'react'
import { Image, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { SmallSearchBar } from '.'
import { Flexbox, Header1, StyleColors } from '../styles'
import { useHistory } from 'react-router'

const styles = StyleSheet.create({
  headerStyle: {
    shadowColor: '#F0F0F0',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0
  },
  imageStyle: {
    height: 40,
    width: 40,
    marginTop: 4,
    marginLeft: 16,
    marginRight: 64
  },
  searchBarimageStyle: {
    height: 31,
    width: 31,
    marginTop: 8,
    marginLeft: 20,
    marginRight: 12
  }
})

const HeaderStyle = styled(Flexbox)`
  height: 48px;
  width: 100%;
  background-color: white;
  align-items: center;
  justify-content: flex-start;
`

interface HeaderProps {
  isSearchbar: boolean
}

// Componente que faz o papel de header do site, além disso, contem dois estádos
const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const history = useHistory()
  async function Logout () {
    await AsyncStorage.removeItem('user')
    await AsyncStorage.removeItem('token')
    history.push('/login')
  }

  return (
    <HeaderStyle style={styles.headerStyle}>
      <TouchableOpacity onPress={Logout}>
        <Image style={props.isSearchbar ? styles.searchBarimageStyle : styles.imageStyle} source={require('../assets/user-circle.png')}/>
      </TouchableOpacity>
      {props.isSearchbar ? <SmallSearchBar placeholder="Pesquise um órgão público"/> : <Header1 color={StyleColors.primary}> Voz do Povo </Header1>}
    </HeaderStyle>
  )
}

export default Header
