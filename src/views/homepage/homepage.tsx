import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import CommentButton from '../../components/posts/comment-button'

const Homepage: FC = () => {
  return (<SafeAreaView>
    <CommentButton commentNumber={1} width={112}/>
    </SafeAreaView>)
}

export default Homepage
