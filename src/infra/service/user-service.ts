import config from '../config'
import User from '../models/user'
import axios from 'axios'
import { post, put } from './base-service'

const relativePath = 'user/'

export async function signup (user: User): Promise<User> {
  try {
    const data = await axios.post(relativePath + 'signup', user)
    return data.data as User
  } catch (err) {
    console.log(err)
  }
  return {} as User
}

export async function login (email: string, password: string): Promise<User> {
  try {
    const data = await post(relativePath + 'login', {
      email,
      password
    })
    return data.data as User
  } catch (err) {
    console.log(err)
  }
  return {} as User
}

export async function community (id: string) : Promise<User> {
  try {
    const data = await put(relativePath + `community/${id}`, {})
    return data.data as User
  } catch (err) {
    console.log(err)
  }
  return {} as User
}
