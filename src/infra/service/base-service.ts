/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../config'

import axios from 'axios'

const baseIP = config.baseIP
export async function post (relativePath: string, data: any): Promise<any> {
  let token = await config.getToken()
  if (token === null) {
    token = ''
  }
  try {
    const response = await axios.post(baseIP + relativePath, data, {
      headers: {
        Authorization: token
      }
    })
    console.log(response.data)
    return response.data
  } catch (err) {
    console.log(err.response.data)
  }
  return {}
}

export async function put (relativePath: string, data: any) : Promise<any> {
  try {
    let token = await config.getToken()
    if (token === null) {
      token = ''
    }
    const response = await axios.put(baseIP + relativePath, data, {
      headers: {
        Authorization: token
      }
    })
    return response.data
  } catch (err) {
    console.log(err.response.data)
  }
  return []
}

export async function get (relativePath: string) : Promise<any> {
  try {
    let token = await config.getToken()
    if (token === null) {
      token = ''
    }
    const response = await axios.get(baseIP + relativePath, {
      headers: {
        Authorization: token,
        aleatorio: 'ola'
      }
    })
    return response.data
  } catch (err) {
    console.log(err.response.data)
  }
  return []
}
