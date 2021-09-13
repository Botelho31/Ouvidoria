import Comment from '../models/comment'
import { get, post, put } from './base-service'

const relativePath = 'comment/'

// Função que cria um comentario
export async function create (comment: Comment): Promise<Comment> {
  try {
    const data = await post(relativePath, comment)
    return data as Comment
  } catch (err) {
    console.log(err)
  }
  return {} as Comment
}

// Função que pega um comentario por id
export async function getById (id: string) : Promise<Comment> {
  try {
    const data = await get(relativePath + id)
    return data as Comment
  } catch (err) {
    console.log(err)
  }
  return {} as Comment
}

// Função que vota em um comentario - upvote ou downvote
export async function voteComment (id: string, type: string) : Promise<Comment[]> {
  try {
    const data = await put(relativePath + `vote/${id}/type/${type}`, {})
    return data as Comment[]
  } catch (err) {
    console.log(err)
  }
  return []
}
