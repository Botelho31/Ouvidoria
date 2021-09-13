import config from '../config'
import User from '../models/user'
import axios from 'axios'

const baseIP = config.baseIP + 'user/'

export async function signup (user: User): Promise<User> {
  try {
    const data = await axios.post(baseIP + 'signup', user)
    return data.data as User
  } catch (err) {
    console.log(err)
  }
  return {} as User
}

export async function login (email: string, password: string): Promise<User> {
  try {
    const data = await axios.post(baseIP + 'login', {
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
    const data = await axios.put(baseIP + `community/${id}`)
    return data.data as User
  } catch (err) {
    console.log(err)
  }
  return {} as User
}
