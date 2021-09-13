import config from '../config'
import Post from '../models/post'
import axios from 'axios'

const baseIP = config.baseIP + 'post/'

export async function create (post: Post): Promise<Post> {
  try {
    const data = await axios.post(baseIP, post)
    return data.data as Post
  } catch (err) {
    console.log(err)
  }
  return {} as Post
}

export async function getById (id: string) : Promise<Post> {
  try {
    const data = await axios.get(baseIP + id)
    return data.data as Post
  } catch (err) {
    console.log(err)
  }
  return {} as Post
}

export async function getByUser () : Promise<Post[]> {
  try {
    const data = await axios.get(baseIP + 'user')
    return data.data as Post[]
  } catch (err) {
    console.log(err)
  }
  return []
}

export async function getByCommunity (id: string) : Promise<Post[]> {
  try {
    const data = await axios.get(baseIP + `community/${id}`)
    return data.data as Post[]
  } catch (err) {
    console.log(err)
  }
  return []
}

export async function getSorted (asc: boolean) : Promise<Post[]> {
  try {
    const data = await axios.get(baseIP + `ranking/${asc}`)
    return data.data as Post[]
  } catch (err) {
    console.log(err)
  }
  return []
}

export async function vote (id: string, type: string) : Promise<Post[]> {
  try {
    const data = await axios.put(baseIP + `vote/${id}/type/${type}`)
    return data.data as Post[]
  } catch (err) {
    console.log(err)
  }
  return []
}
