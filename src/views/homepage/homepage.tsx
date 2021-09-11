import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import CommentCell from '../../components/posts/comment-cell'

const Homepage: FC = () => {
  return (<SafeAreaView>
      <CommentCell/>
    </SafeAreaView>)
}

export default Homepage
