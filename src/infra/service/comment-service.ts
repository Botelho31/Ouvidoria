import config from '../config'
import Comment from '../models/comment'
import axios from 'axios'
import { post, put } from './base-service'

const relativePath = 'comment/'

export async function create (comment: Comment): Promise<Comment> {
  try {
    const data = await post(relativePath, comment)
    return data.data as Comment
  } catch (err) {
    console.log(err)
  }
  return {} as Comment
}

export async function vote (id: string, type: string) : Promise<Comment[]> {
  try {
    const data = await put(relativePath + `vote/${id}/type/${type}`, {})
    return data.data as Comment[]
  } catch (err) {
    console.log(err)
  }
  return []
}
