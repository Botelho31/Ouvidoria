import React, { FC } from 'react'
import { View, ScrollView, Image } from 'react-native'
import { PageBody, NewsCell, SearchBar } from '../../components'
import { list } from '../../infra/service/news-service'
import News from '../../infra/models/news'
import { Header1, StyleColors, Margin, Header4, Header3 } from '../../styles'
import Post from '../../infra/models/post'
import { getByUser } from '../../infra/service/post-service'
import PostCell from '../../components/posts/post-cell'
import styled from 'styled-components'

const Img = styled(Image)`
  width: 375px;
`

const Homepage: FC = () => {
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
    for (let index = 0; index < noticias.length; index++) {
      const noticia = noticias[index]
      children.push(<NewsCell title={noticia.title} imageURL=''/>)
    }
    return children
  }

  return (
    <PageBody>
      <Img source={{ uri: noticias.length > 0 ? noticias[0].bannerImageUrl : '' }}/>
      <Margin marginTop='8px'>
      <Header1>{noticias.length > 0 ? noticias[0].title : ''}</Header1>
      <Header4 color={StyleColors.discreteGray}>{noticias.length > 0 ? noticias[0].date : ''}</Header4>
      </Margin>

      <Margin marginTop='16px'>
        <Header4 color={StyleColors.darkGray}>{noticias.length > 0 ? noticias[0].body : ''}</Header4>
      </Margin>

      <Margin marginTop='24px'>
        <Header3 color={StyleColors.primary}>Mais notícias:</Header3>
        <Margin marginTop='8px'>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: 120 }}>
          {getNoticias()}
        </ScrollView>
        </Margin>
      </Margin>
    </PageBody>
  )
}

export default Homepage
