import React, { FC } from 'react'
import { View, ScrollView } from 'react-native'
import { PageBody, NewsCell, SearchBar } from '../../components'
import { list } from '../../infra/service/news-service'
import News from '../../infra/models/news'
import { Header1, StyleColors } from '../../styles'
import Post from '../../infra/models/post'
import { getAll } from '../../infra/service/post-service'
import PostCell from '../../components/posts/post-cell'
import config from '../../infra/config'
import { useHistory } from 'react-router'
import { Link } from 'react-router-native'

// A tela inicial do aplicativo, onde conterá algumas informações sobre quem o usuário está seguindo
const Homepage: FC = () => {
  const [noticias, setNoticias] = React.useState<News[]>([])
  const [posts, setPosts] = React.useState<Post[]>([])

  const history = useHistory()
  React.useEffect(() => {
    async function loadData () {
      const noticiasArray = await list()
      setNoticias(noticiasArray)
      setPosts(await getAll())
    }
    async function checkLogin () {
      const user = await config.getUser()
      if (!user) {
        history.push('/login')
      } else {
        loadData()
      }
    }
    checkLogin()
  }, [])

  function getNoticias () {
    const children = []
    for (let index = 0; index < noticias.length; index++) {
      const noticia = noticias[index]
      children.push(<Link to={`/news/${noticias[index].id}`}><NewsCell title={noticia.title} imageURL={noticia.bannerImageUrl}/></Link>)
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
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: 120, marginTop: 20 }}>
        {getNoticias()}
      </ScrollView>
      <View style={{ marginRight: 20, marginLeft: 20, marginTop: 20, width: 335 }}>
      <Header1 color={StyleColors.primary}>Veja a reputação de um órgão público</Header1>
      <SearchBar style={{ marginTop: 8 }} placeholder='Pesquise um órgão público'/>
      <View style={{ marginRight: 40, marginBottom: 20 }}>
        {getPosts()}
      </View>
      </View>
    </PageBody>
  )
}

export default Homepage
