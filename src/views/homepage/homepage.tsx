import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import UpvoteButton from '../../components/posts/upvote-button'

const Homepage: FC = () => {
  return (<SafeAreaView>
      <UpvoteButton voteNumber={1} width={100} liked={false}/>
    </SafeAreaView>)
}

export default Homepage
