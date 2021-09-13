import React, { FC } from 'react'
import { ScrollView, Image } from 'react-native'
import { PageBody, NewsCell } from '../../components'
import { list } from '../../infra/service/news-service'
import News from '../../infra/models/news'
import { Header1, StyleColors, Margin, Header4, Header3 } from '../../styles'
import styled from 'styled-components'

const Img = styled(Image)`
  width: 400px;
  height: 184px;
`

// A tela de notícia, onde o usuario conseguira ver todas as informações daquela notícia
const NewsScreen: FC = () => {
  const [noticias, setNoticias] = React.useState<News[]>([])

  React.useEffect(() => {
    async function loadData () {
      const noticiasArray = await list()
      console.log(noticiasArray)
      setNoticias(noticiasArray)
    }

    loadData()
  }, [])

  function getNoticias () {
    const children = []
    for (let index = 1; index < noticias.length; index++) {
      const noticia = noticias[index]
      children.push(<NewsCell title={noticia.title} imageURL={noticia.bannerImageUrl}/>)
    }
    return children
  }

  return (
    <PageBody>
      <Img source={{ uri: noticias.length > 0 ? noticias[0].bannerImageUrl : '' }}/>
      <Margin marginTop='8px'>
      <Header1 style={{ marginLeft: 20, marginRight: 20 }}>{noticias.length > 0 ? noticias[0].title : ''}</Header1>
      <Header4 style={{ marginLeft: 20, marginRight: 20 }} color={StyleColors.discreteGray}>{noticias.length > 0 ? noticias[0].date : ''}</Header4>
      </Margin>

      <Margin marginTop='16px'>
        <Header4 style={{ marginLeft: 20, marginRight: 20 }} color={StyleColors.darkGray}>{noticias.length > 0 ? noticias[0].body : ''}</Header4>
      </Margin>

      <Margin marginTop='24px'>
        <Header3 style={{ marginLeft: 20, marginRight: 20 }} color={StyleColors.primary}>Mais notícias:</Header3>
        <Margin marginTop='8px'>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: 120 }}>
          {getNoticias()}
        </ScrollView>
        </Margin>
      </Margin>
    </PageBody>
  )
}

export default NewsScreen
