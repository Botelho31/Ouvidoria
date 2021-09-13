import News from '../models/news'
import { get, post } from './base-service'

const relativePath = 'news/'

// Função que cria uma notícia
export async function create (news: News): Promise<News> {
  try {
    const data = await post(relativePath, news)
    return data as News
  } catch (err) {
    console.log(err)
  }
  return {} as News
}

// Função que lista todas as notícias
export async function list () : Promise<News[]> {
  try {
    const data = await get(relativePath + 'list')
    return data as News[]
  } catch (err) {
    console.log(err)
  }
  return []
}
