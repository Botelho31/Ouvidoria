import React, { FC } from 'react'
import { Image, Dimensions, StatusBar } from 'react-native'
import { Link } from 'react-router-native'
import styled from 'styled-components'
import { Flexbox } from '../../styles'
import IconLabel from './icon-label'

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight : 0
const windowHeight = Dimensions.get('window').height - 48 - statusBar

const BackgroundFooter = styled(Flexbox)`
  position: absolute;
  top: ${windowHeight}px;
  background-color: white;
  width: 375px;
  height: 48px;
  box-shadow: 0px -2px 0px #F0F0F0;
`

const Img = styled(Image)`
  width: 52px;
  height: 52px;
  margin-bottom: 4px;
`

const Footer: FC = () => {
  return (
    <BackgroundFooter>
      <Link to="/">
        <IconLabel style={{ marginLeft: 36, marginRight: 76 }} image={require('../../assets/footer/home-icon.png')} label='Pág. inicial'/>
      </Link>
      <Link to="/complaint">
        <Img source={require('../../assets/footer/plus-icon.png')}/>
      </Link>
      <Link to="/explore">
        <IconLabel style={{ marginLeft: 76, marginRight: 36 }} image={require('../../assets/footer/explore-icon.png')} label='Explorar'/>
      </Link>
    </BackgroundFooter>
  )
}

export default Footer
