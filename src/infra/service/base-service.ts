import config from '../config'
import News from '../models/news'
import axios from 'axios'

const baseIP = config.baseIP
export async function post (relativePath: string, data: any): Promise<any> {
  let token = await config.getToken()
  if (token !== null) {
    token = ''
  }
  try {
    const response = await axios.post(baseIP + relativePath, data, {
      headers: {
        authorization: token
      }
    })
    return response.data
  } catch (err) {
    console.log(err)
  }
  return {}
}

export async function put (relativePath: string, data: any) : Promise<any> {
  try {
    let token = await config.getToken()
    if (token !== null) {
      token = ''
    }
    const response = await axios.put(baseIP + relativePath, data, {
      headers: {
        authorization: token
      }
    })
    return response.data
  } catch (err) {
    console.log(err)
  }
  return []
}

export async function get (relativePath: string) : Promise<any> {
  try {
    let token = await config.getToken()
    if (token !== null) {
      token = ''
    }
    const response = await axios.get(baseIP + relativePath, {
      headers: {
        authorization: token
      }
    })
    return response.data
  } catch (err) {
    console.log(err)
  }
  return []
}
