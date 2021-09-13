import React, { FC } from 'react'
import { ScrollView, Image } from 'react-native'
import { PageBody, NewsCell, ScrollCell } from '../../components'
import { list } from '../../infra/service/news-service'
import News from '../../infra/models/news'
import { Header1, StyleColors, Margin, Header4, Header3 } from '../../styles'
import styled from 'styled-components'
import Community from '../../infra/models/community'
import { getSorted } from '../../infra/service/community-service'
import { getAll } from '../../infra/service/post-service'
import Post from '../../infra/models/post'
import PostCell from '../../components/posts/post-cell'

const Img = styled(Image)`
  width: 375px;
`

// A tela de explorar onde vai conter informações relevantes para todas as pessoas.
const ExploreScreen: FC = () => {
  const [noticias, setNoticias] = React.useState<News[]>([])
  const [communityAsc, setCommunityAsc] = React.useState<Community[]>([])
  const [communityDesc, setCommunityDesc] = React.useState<Community[]>([])
  const [posts, setPosts] = React.useState<Post[]>([])

  React.useEffect(() => {
    async function loadData () {
      const noticiasArray = await list()
      setNoticias(noticiasArray)
      setCommunityAsc(await getSorted(true))
      setCommunityDesc(await getSorted(false))
      setPosts(await getAll())
    }

    loadData()
  }, [])

  function getNoticias () {
    const children = []
    for (let index = 0; index < noticias.length; index++) {
      const noticia = noticias[index]
      children.push(<NewsCell title={noticia.title} imageURL={noticia.bannerImageUrl}/>)
    }
    return children
  }

  function getCommunityAsc () {
    const children = []
    for (let index = 0; index < communityAsc.length; index++) {
      const element = communityAsc[index]
      children.push(<ScrollCell title={element.name} numberColor={StyleColors.success} number={String(index + 1) + 'º'} imageURL={element.profileImageUrl}/>)
    }
    return children
  }

  function getCommunityDesc () {
    const children = []
    for (let index = 0; index < communityDesc.length; index++) {
      const element = communityDesc[index]
      children.push(<ScrollCell title={element.name} numberColor={StyleColors.error} number={String(index + 1) + 'º'} imageURL={element.profileImageUrl}/>)
    }
    return children
  }

  function getPosts () {
    const children = []
    for (let index = 0; index < posts.length; index++) {
      const post = posts[index]
      children.push(<PostCell postInfo={post} showComments={false}/>)
    }
    return children
  }

  return (
    <PageBody>
      <Margin marginTop='24px'>
        <Header3 color={StyleColors.primary}>Mais notícias:</Header3>
        <Margin marginTop='8px'>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: 120 }}>
          {getNoticias()}
        </ScrollView>
        </Margin>
      </Margin>
      <Margin marginTop='24px'>
        <Header3 color={StyleColors.primary}>Órgãos destaque em resolução de problemas:</Header3>
        <Margin marginTop='8px'>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: 150 }}>
          {getCommunityAsc()}
        </ScrollView>
        </Margin>
      </Margin>
      <Margin marginTop='24px'>
        <Header3 color={StyleColors.primary}>Órgãos menos resolutivos (30 dias):</Header3>
        <Margin marginTop='8px'>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: 150 }}>
          {getCommunityDesc()}
        </ScrollView>
        </Margin>
      </Margin>
      <Margin marginTop='24px'>
        <Header3 color={StyleColors.primary}>Atualizações relevantes:</Header3>
        <Margin marginTop='8px'>
          {getPosts()}
        </Margin>
      </Margin>
    </PageBody>
  )
}

export default ExploreScreen
