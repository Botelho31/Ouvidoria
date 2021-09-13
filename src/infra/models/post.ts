import Comment from './comment'

export default interface Post {
  id: string
  idCommunity: string
  date: number
  idUser: string
  title: string
  body: string
  comment: Comment[]
  upvotes: string[]
  downvotes: string[]
  status: string
  type: string
}
