import React, { FC } from 'react'
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { vote } from '../../infra/service/post-service'
import { voteComment } from '../../infra/service/comment-service'
import { Flexbox, StyleColors } from '../../styles'
import CardHeader from '../../styles/typography/card-header'

interface BackgroundProps {
  width: number
}

const Background = styled(Flexbox)<BackgroundProps>`
  height: 16px;
  width: ${props => props.width}px;
`

const BackgroundButton = styled(TouchableOpacity)`
  height: 16px;
  width: 16px;
  z-index: 10;
`

interface VoteProps {
  liked?: boolean
  color?: string
}
const Label = styled(CardHeader)<VoteProps>`
  margin-right: 5px;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
`

const Icon = styled(Image)<VoteProps>`
  width: 16px;
  height: 16px;
  align-items: center;
  transform: ${props => props.liked ? 'rotate(0deg)' : 'rotate(180deg)'};
`

interface UpvoteButtonProps{
  idPost?: string
  idComment?: string
  voteNumber: number
  liked?: boolean
  width: number
  onChange: () => void
}

const UpvoteButton: FC<UpvoteButtonProps> = (props: UpvoteButtonProps) => {
  let likedColor = StyleColors.darkGray
  let assetLiked : ImageSourcePropType = require('../../assets/posts/vote-icon.png')
  let assetDisiked : ImageSourcePropType = require('../../assets/posts/vote-icon.png')
  if (props.liked !== null) {
    if (props.liked === true) {
      assetLiked = require('../../assets/posts/like-icon.png')
      likedColor = StyleColors.success
    } else if (props.liked === false) {
      assetDisiked = require('../../assets/posts/dislike-icon.png')
      likedColor = StyleColors.error
    }
  }

  async function click (liked: boolean) {
    let type = 'UPVOTE'
    if (!liked) {
      type = 'DOWNVOTE'
    }
    try {
      console.log(props)
      if (props.idPost) {
        await vote(props.idPost, type)
      } else {
        await voteComment(props.idComment, type)
      }
    } catch (err) {
      console.log(err.response.data)
    }
    props.onChange()
  }

  return (
    <Background width={props.width}>
      <BackgroundButton onPress={() => click(true) }>
        <Icon source={assetLiked} liked={true}></Icon>
      </BackgroundButton>
      <Label color={likedColor}>{props.voteNumber}</Label>
      <BackgroundButton onPress={() => click(false) }>
        <Icon source={assetDisiked}></Icon>
      </BackgroundButton>
    </Background>
  )
}

export default UpvoteButton
