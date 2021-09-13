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
  background-color: black;
  width: 375px;
  height: 48px;
  position: relative;
  left: 0;
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
  const [currentPos, setCurrentPos] = React.useState({ x: 0, y: 0 })

  const footerRef : React.RefObject<View> = React.useRef()

  React.useEffect(() => {
    footerRef.current.measure((fx, fy, width, height, px, py) => {
      setCurrentPos({ x: px, y: py })
    })
  }, [])

  function getOptions () {
    const children = []

    for (let i = 0; i < complaintTypes.length; i += 1) {
      children.push(
        <Flexbox>
          <Image style={{ width: 32, height: 32 }} source={complaintTypes[i].img} />
          <Paragraph color={StyleColors.primary}>{complaintTypes[i].value}</Paragraph>
        </Flexbox>
      )
    }
    return children
  }

  return (
    <BackgroundFooter ref={footerRef}>
      <Link to="/">
        <IconLabel style={{ marginLeft: 36, marginRight: 76 }} image={require('../../assets/footer/home-icon.png')} label='Pág. inicial'/>
      </Link>
      <TouchableOpacity onPress={() => { setIsOpen(!isOpen); console.log('teste') }}>
        <Img source={require('../../assets/footer/plus-icon.png')}/>
      </TouchableOpacity>
      <Link to="/explore">
        <IconLabel style={{ marginLeft: 76, marginRight: 36 }} image={require('../../assets/footer/explore-icon.png')} label='Explorar'/>
      </Link>
      <Modal
          transparent={true}
          visible={isOpen}
          onRequestClose={() => {
            setIsOpen(!isOpen)
          }}
        >
          <Flexbox>
            <FooterSelect>
              {getOptions()}
              <Text>ALOALOALOALOALAOAO</Text>
            </FooterSelect>
          </Flexbox>
        </Modal>
    </BackgroundFooter>
  )
}

export default Footer
