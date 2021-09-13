import News from '../models/news'
import { get, post } from './base-service'

const relativePath = 'news/'

export async function create (news: News): Promise<News> {
  try {
    const data = await post(relativePath, news)
    return data.data as News
  } catch (err) {
    console.log(err)
  }
  return {} as News
}

export async function list () : Promise<News[]> {
  try {
    const data = await get(relativePath)
    return data.data as News[]
  } catch (err) {
    console.log(err)
  }
  return []
}
