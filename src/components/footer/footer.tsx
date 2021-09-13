import React, { FC } from 'react'
import { Image, Dimensions, StatusBar, Modal, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native'
import { Link } from 'react-router-native'
import styled from 'styled-components'
import { Flexbox, Paragraph, StyleColors } from '../../styles'
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

const FooterSelect = styled(Flexbox)`
  background-color: white;
  width: 390px;
  height: 48px;
  position: absolute;
  top: -50px;
  left: -10px;
  z-index: 1000000;
`

const Img = styled(Image)`
  width: 52px;
  height: 52px;
  margin-bottom: 4px;
`

const complaintTypes = [
  {
    value: 'Elogio',
    img: require('../../assets/elogio.png')
  },
  {
    value: 'Reclamação',
    img: require('../../assets/reclamacao.png')
  },
  {
    value: 'Denúncia',
    img: require('../../assets/denuncia.png')
  },
  {
    value: 'Informação',
    img: require('../../assets/informacao.png')
  },
  {
    value: 'Solicitação',
    img: require('../../assets/solicitacao.png')
  },
  {
    value: 'Sugestão',
    img: require('../../assets/sugestao.png')
  }
]

const Footer: FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  function getOptions () {
    const children = []

    for (let i = 0; i < complaintTypes.length; i += 1) {
      children.push(
        <Link to="/complaint">
          <Flexbox flexDirection="column" horizontalAlign="space-between" style={{ marginLeft: 5, marginRight: 5 }}>
            <Image style={{ width: 32, height: 32 }} source={complaintTypes[i].img} />
            <Paragraph color={StyleColors.primary}>{complaintTypes[i].value}</Paragraph>
          </Flexbox>
        </Link>
      )
    }
    return children
  }

  return (
    <BackgroundFooter>
      <Flexbox>
        <Link to="/">
          <IconLabel style={{ marginLeft: 36, marginRight: 76 }} image={require('../../assets/footer/home-icon.png')} label='Pág. inicial'/>
        </Link>
        <TouchableOpacity onPress={() => { setIsOpen(!isOpen); console.log('teste') }}>
          <Img source={require('../../assets/footer/plus-icon.png')}/>
        </TouchableOpacity>
        <Link to="/explore">
          <IconLabel style={{ marginLeft: 76, marginRight: 36 }} image={require('../../assets/footer/explore-icon.png')} label='Explorar'/>
        </Link>
      </Flexbox>
      <FooterSelect style={{ display: isOpen ? 'flex' : 'none' }}>
        {getOptions()}
      </FooterSelect>
    </BackgroundFooter>
  )
}

export default Footer
