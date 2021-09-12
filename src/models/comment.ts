export default interface Comment {
  commentOwner: string
  date: string
  body: string
  answers: Comment[]
  likes: number
  liked?: boolean
}
