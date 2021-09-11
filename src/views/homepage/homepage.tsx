import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import PostCell from '../../components/posts/post-cell'

const Homepage: FC = () => {
  return (<SafeAreaView>
      <PostCell showComments={false}/>
    </SafeAreaView>)
}

export default Homepage
