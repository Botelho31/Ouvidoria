import Comment from './comment'

export default interface Post {
  communityName: string
  date: string
  postOwner: string
  title: string
  body: string
  comment: Comment[]
  likes: number
  liked?: boolean
  status: string
}
