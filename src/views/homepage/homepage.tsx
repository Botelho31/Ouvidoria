import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
import { PageBody } from '../../components'
import { Margin } from '../../styles'
import Post from '../../infra/models/post'
import { getById } from '../../infra/service/post-service'
import PostCell from '../../components/posts/post-cell'

const Homepage: FC = () => {
  const postId = '10863071365431984'
  const [post, setPost] = React.useState<Post | null>(null)

  React.useEffect(() => {
    async function loadData () {
      setPost(await getById(postId))
    }

    loadData()
  }, [])

  function getPosts () {
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
        {getPosts()}
      </Margin>
    </PageBody>
  )
}

export default Homepage
