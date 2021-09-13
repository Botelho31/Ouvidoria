import React, { FC } from 'react'
import { View } from 'react-native'
import { PageBody } from '../../components'
import { Margin } from '../../styles'
import Post from '../../infra/models/post'
import { getById } from '../../infra/service/post-service'
import PostCell from '../../components/posts/post-cell'
import { useParams } from 'react-router'

// A tela de threads do aplicativo, onde o usuário é permitido responder comentarios e comentar em um post
const Threads: FC = () => {
  const postId = '10863071365431984'
  const [post, setPost] = React.useState<Post | null>(null)

  const params = useParams()
  React.useEffect(() => {
    async function loadData () {
      setPost(await getById(params.id))
    }

    loadData()
  }, [])

  function getPost () {
    if (post !== null) {
      console.log(post)
      return (<PostCell postInfo={post} showComments={true}/>)
    } else {
      return <View/>
    }
  }

  return (
    <PageBody>
      <Margin marginTop='20px'>
        {getPost()}
      </Margin>
    </PageBody>
  )
}

export default Threads
