import React, { FC } from 'react'
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Post from '../../models/post'
import { Flexbox, Header4, Margin, Spacer, StyleColors } from '../../styles'
import CardHeader from '../../styles/typography/card-header'
import CommentButton from './comment-button'
import CommentCell from './comment-cell'
import DateCell from './date-cell'
import UpvoteButton from './upvote-button'

const Background = styled(Flexbox)`
  width: 335px;
  margin-top: 8px;
  border-radius: 10px;
  background-color: ${StyleColors.lightGray};
`

const CommentSpace = styled(Flexbox)`
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
`

const TitlePost = styled(CardHeader)`
  color: ${StyleColors.darkGray};
`

const TitleInfo = styled(Margin)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ProfileName = styled(CardHeader)`
  margin-left: 12px;
  height: 32px;
  line-height: 32px;
  color: ${StyleColors.primary};
`

const ProfileImage = styled(Image)`
  width: 32px;
  height: 32px;
  margin-left: 16px;
`

const Status = styled(Image)`
  width: 100px;
  height: 16px;
`

const Text = styled(Header4)`
  color: ${StyleColors.mediumGray};
`

interface PostCellProps{
  postInfo?: Post
  resp?: boolean
  showComments: boolean
}

const PostCell: FC<PostCellProps> = (props: PostCellProps) => {
  function getComments () {
    const children : Element[] = []
    if (props.postInfo?.comment) {
      for (let index = 0; index < props.postInfo?.comment.length; index++) {
        const comment = props.postInfo?.comment[index]
        children.push(<CommentCell comment={comment}/>)
      }
      return (children)
    }
  }
  let statusImage : ImageSourcePropType = require('../../assets/posts/status/andamento.png')
  if (props.resp !== null) {
    if (props.resp === true) {
      statusImage = require('../../assets/posts/status/resp.png')
    } else if (props.resp === false) {
      statusImage = require('../../assets/posts/status/nao-resp.png')
    }
  }
  return (
    <Background flexDirection='column'>
      <CommentSpace flexDirection='column' verticalAlign='flex-start'>
        <Flexbox>
          <ProfileImage source={require('../../assets/posts/unb-image.png')}/>
          <TouchableOpacity onPress={() => console.log('clicou no nick')}>
            <ProfileName>Universidade de Brasília</ProfileName>
          </TouchableOpacity>
        </Flexbox>
        <TitleInfo marginLeft='16px' marginTop='8px' marginBottom='4px'>
          <TitlePost>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</TitlePost>
          <Margin marginTop='8px'>
            <DateCell>Publicado por anônimo | 10/09/2021 - 17:24</DateCell>
          </Margin>
        </TitleInfo>
        <Margin marginTop='4px'marginLeft='16px' marginRight='24px'>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas commodo, maecenas in egestas etiam sapien enim. Ac amet sapien suscipit mauris convallis venenatis suspendisse massa nunc cabe mais uma linha.</Text>
          <Margin marginTop='8px' marginBottom='24px'>
            <Flexbox>
              <UpvoteButton voteNumber={45} width={80}/>
              <CommentButton commentNumber={1} width={112}/>
              <Status source={statusImage}/>
            </Flexbox>
          </Margin>
        </Margin>
        {getComments()}
      </CommentSpace>
    </Background>
  )
}

export default PostCell
