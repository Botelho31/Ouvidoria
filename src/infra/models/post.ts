import Comment from './comment'

export default interface Post {
  id: string
  idCommunity: string
  communityName: string
  userName: string
  date: number
  idUser: string
  title: string
  body: string
  comments: Comment[]
  upvotes: string[]
  downvotes: string[]
  status: string
  type: string
}
