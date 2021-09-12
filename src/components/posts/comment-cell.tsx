import React, { FC } from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import Comment from '../../models/comment'
import { Flexbox, Header4, Margin, StyleColors } from '../../styles'
import CardHeader from '../../styles/typography/card-header'
import CommentButton from './comment-button'
import DateCell from './date-cell'
import UpvoteButton from './upvote-button'

const Background = styled(Flexbox)`
  margin-bottom: 10px;
`

const Line = styled(View)`
  width: 100%;
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

`

interface CommentCellProps{
  comment?: Comment
}

const CommentCell: FC<CommentCellProps> = (props: CommentCellProps) => {
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
  return (
    <Background flexDirection='column'>
      <Line/>
      <CommentSpace flexDirection='column' verticalAlign='flex-start'>
        <Flexbox>
          <ProfileImage source={require('../../assets/posts/profile-image.png')}/>
          <InfoTitle flexDirection='column'>
            <UserName>Lucas Mendonca</UserName>
            <Margin marginTop='4px'>
              <DateCell>10/09/2021 - 17:24</DateCell>
            </Margin>
          </InfoTitle>
        </Flexbox>
        <Margin marginTop='4px'marginLeft='16px' marginRight='24px'>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas commodo, maecenas in egestas etiam sapien enim. Ac amet sapien suscipit mauris convallis venenatis suspendisse massa nunc cabe mais uma linha.</Text>
          <Margin marginTop='8px'>
            <Flexbox>
              <UpvoteButton voteNumber={45} width={80}/>
              <CommentButton commentNumber={1} width={112}/>
            </Flexbox>
          </Margin>
        </Margin>
      </CommentSpace>
      <Margin marginLeft='32px'>
        {getComment()}
      </Margin>
    </Background>
  )
}

export default CommentCell
