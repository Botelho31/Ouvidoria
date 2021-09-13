import config from '../config'
import Comment from '../models/comment'
import axios from 'axios'

const baseIP = config.baseIP + 'comment/'

export async function create (comment: Comment): Promise<Comment> {
  try {
    const data = await axios.post(baseIP, comment)
    return data.data as Comment
  } catch (err) {
    console.log(err)
  }
  return {} as Comment
}

export async function vote (id: string, type: string) : Promise<Comment[]> {
  try {
    const data = await axios.put(baseIP + `vote/${id}/type/${type}`)
    return data.data as Comment[]
  } catch (err) {
    console.log(err)
  }
  return []
}
