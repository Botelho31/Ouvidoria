import React, { FC } from 'react'
import { Image, ImageSourcePropType, TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import Post from '../../infra/models/post'
import { Flexbox, Header4, Margin, StyleColors } from '../../styles'
import CardHeader from '../../styles/typography/card-header'
import CommentButton from './comment-button'
import CommentCell from './comment-cell'
import DateCell from './date-cell'
import UpvoteButton from './upvote-button'
import CommentInput from './comment-input'
import { useHistory } from 'react-router'

const Background = styled(Flexbox)`
  width: 335px;
  margin-top: 8px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  background-color: ${StyleColors.lightGray};
`

const Line = styled(View)`
  alignSelf: stretch;
  margin-top: 2px;
  height: 1px;
  background-color: #C4C4C4;;
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
  postInfo: Post
  showComments: boolean
}

const PostCell: FC<PostCellProps> = (props: PostCellProps) => {
  const history = useHistory()
  function getComments () {
    const children : Element[] = []
    if ((props.postInfo.comments != null) && props.showComments) {
      for (let index = 0; index < props.postInfo.comments.length; index++) {
        const comment = props.postInfo?.comments[index]
        children.push(<CommentCell comment={comment}/>)
      }
      return (<View>
        <Line/>
        <CommentInput/>
        {children}
      </View>)
    }
  }
  let statusImage : ImageSourcePropType = require('../../assets/posts/status/andamento.png')
  if (props.postInfo.status !== 'EM_ANDAMENTO') {
    if (props.postInfo.status === 'RESPONDIDO') {
      statusImage = require('../../assets/posts/status/resp.png')
    } else if (props.postInfo.status === 'NAO_RESPONDIDO') {
      statusImage = require('../../assets/posts/status/nao-resp.png')
    }
  }

  return (
    <Background flexDirection='column'>
      <CommentSpace flexDirection='column' verticalAlign='flex-start'>
        <Flexbox>
          <ProfileImage source={require('../../assets/posts/unb-image.png')}/>
          <TouchableOpacity onPress={() => history.push('/profile/' + props.postInfo.idCommunity)}>
            <ProfileName>{props.postInfo.communityName}</ProfileName>
          </TouchableOpacity>
        </Flexbox>
        <TitleInfo marginLeft='16px' marginTop='20px' marginBottom='4px'>
          <TouchableWithoutFeedback onPress={() => history.push('/thread/' + props.postInfo.id)}>
            <TitlePost>{props.postInfo.title}</TitlePost>
          </TouchableWithoutFeedback>
          <Margin marginTop='8px'>
            <DateCell>Publicado por anônimo | 10/09/2021 - 17:24</DateCell>
          </Margin>
        </TitleInfo>
        <Margin marginTop='4px'marginLeft='16px' marginRight='24px'>
          <TouchableWithoutFeedback onPress={() => history.push('/thread/' + props.postInfo.id)}>
            <Text>{props.postInfo.body}</Text>
          </TouchableWithoutFeedback>
          <Margin marginTop='8px' marginBottom='24px'>
            <Flexbox>
              <UpvoteButton voteNumber={props.postInfo.upvotes.length - props.postInfo.downvotes.length} width={80}/>
              <CommentButton commentNumber={props.postInfo.comments.length} width={112}/>
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
