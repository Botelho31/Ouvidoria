export default interface Comment {
  name: string
  date: string
  comment: string
  answers: Comment
  likes: number
  liked?: boolean
}
