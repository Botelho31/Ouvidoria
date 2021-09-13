import config from '../config'
import News from '../models/news'
import axios from 'axios'

const baseIP = config.baseIP + 'news/'

export async function create (news: News): Promise<News> {
  try {
    const data = await axios.post(baseIP, news)
    return data.data as News
  } catch (err) {
    console.log(err)
  }
  return {} as News
}

export async function list () : Promise<News[]> {
  try {
    const data = await axios.get(baseIP + 'list')
    return data.data as News[]
  } catch (err) {
    console.log(err)
  }
  return []
}
