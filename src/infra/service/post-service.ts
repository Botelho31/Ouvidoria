import Post from '../models/post'
import { get, post, put } from './base-service'

const relativePath = 'post/'

export async function create (postData: Post): Promise<Post> {
  try {
    const data = await post(relativePath, postData)
    return data.data as Post
  } catch (err) {
    console.log(err)
  }
  return {} as Post
}

export async function getById (id: string) : Promise<Post> {
  try {
    const data = await get(relativePath + id)
    return data as Post
  } catch (err) {
    console.log(err)
  }
  return {} as Post
}

export async function getByUser () : Promise<Post[]> {
  try {
    console.log('data')
    const data = await get(relativePath + 'user')
    console.log(data)
    return data as Post[]
  } catch (err) {
    console.log(err)
  }
  return []
}

export async function getByCommunity (id: string) : Promise<Post[]> {
  try {
    const data = await get(relativePath + `community/${id}`)
    return data as Post[]
  } catch (err) {
    console.log(err)
  }
  return []
}

export async function getSortedPost (asc: boolean) : Promise<Post[]> {
  try {
    const data = await get(relativePath + `ranking/${asc}`)
    return data as Post[]
  } catch (err) {
    console.log(err)
  }
  return []
}

export async function vote (id: string, type: string) : Promise<Post[]> {
  try {
    const data = await put(relativePath + `vote/${id}/type/${type}`, {})
    return data as Post[]
  } catch (err) {
    console.log(err)
  }
  return []
}
