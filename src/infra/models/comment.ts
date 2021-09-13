// Estrutuda de um comentário
export default interface Comment {
  id: string
  idUser: string
  idPost: string
  idComment: string
  date: number
  body: string
  answers: Comment[]
  upvotes: string[]
  downvotes: string[]
}
