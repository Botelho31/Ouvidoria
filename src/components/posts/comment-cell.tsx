import React, { FC } from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import Comment from '../../infra/models/comment'
import { Flexbox, Header4, Margin, StyleColors } from '../../styles'
import CardHeader from '../../styles/typography/card-header'
import CommentButton from './comment-button'
import DateCell from './date-cell'
import UpvoteButton from './upvote-button'
import CommentInput from './comment-input'
import { getById } from '../../infra/service/comment-service'

const Background = styled(Flexbox)`
  alignSelf: stretch;
  alignItems: flex-start;
  margin-bottom: 10px;
`

const Line = styled(View)`
  alignSelf: stretch;
  margin-top: 2px;
  height: 1px;
  background-color: #C4C4C4;;
`

const InfoTitle = styled(Flexbox)`
  margin-left: 12px;
`

const CommentSpace = styled(Flexbox)`
  margin-top: 11px;
`

const UserName = styled(CardHeader)`
  margin-left: 12px;
  color: ${StyleColors.primary};
`
const ProfileImage = styled(Image)`
  width: 32px;
  height: 32px;
  margin-left: 16px;
`

const Text = styled(Header4)`
  alignSelf: stretch;
`

interface CommentCellProps{
  comment?: Comment
  onPost: () => void
}

const CommentCell: FC<CommentCellProps> = (props: CommentCellProps) => {
  const [commentData, setCommentData] = React.useState(props.comment)

  async function reloadData() {
    const data = await getById(props.comment.id)
    setCommentData(data)
  }

  function getComment () {
    const children : Element[] = []
    if (props.comment?.answers) {
      for (let index = 0; index < props.comment?.answers.length; index++) {
        const comment = props.comment?.answers[index]
        children.push(<CommentCell comment={comment}/>)
      }
      return (children)
    }
  }
  const voteCount = commentData.upvotes.length - commentData?.downvotes.length
  return (
    <Background flexDirection='column'>
      <CommentSpace flexDirection='column' verticalAlign='flex-start'>
        <Flexbox>
          <ProfileImage source={require('../../assets/posts/profile-image.png')}/>
          <InfoTitle flexDirection='column'>
            <UserName>Lucas Mendonca</UserName>
            <Margin marginTop='4px'>
              <DateCell>{String(commentData.date)}</DateCell>
            </Margin>
          </InfoTitle>
        </Flexbox>
        <Margin marginTop='4px'marginLeft='16px' marginRight='24px'>
          <Text>{commentData.body}</Text>
          <Margin marginTop='8px'>
            <Flexbox horizontalAlign='flex-start'>
              <UpvoteButton onChange={reloadData} idComment={commentData.id} voteNumber={voteCount} width={80}/>
              <CommentButton commentNumber={commentData.answers.length} width={112}/>
            </Flexbox>
          </Margin>
        </Margin>
      </CommentSpace>
      <Line/>
      <CommentInput onPost={props.onPost} idUser={commentData?.idUser} idComment={commentData?.id}/>
      <Margin marginLeft='32px'>
        {getComment()}
      </Margin>
    </Background>
  )
}

export default CommentCell
