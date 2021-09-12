import Comment from './comment'

export default interface Post {
  profileTitle: string
  date: string
  postOwner: string
  title: string
  description: string
  comment: Comment[]
  likes: number
  liked?: boolean
  answerd: boolean
}
