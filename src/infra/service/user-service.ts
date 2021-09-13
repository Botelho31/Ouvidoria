import User from '../models/user'
import axios from 'axios'
import { post, put } from './base-service'

const relativePath = 'user/'

// Função que cria um conta
export async function signup (user: User): Promise<User> {
  try {
    const data = await post(relativePath + 'signup', user)
    return data as User
  } catch (err) {
    console.log(err)
  }
  return {} as User
}

// Função que logga
export async function login (email: string, password: string): Promise<User> {
  try {
    const data = await post(relativePath + 'login', {
      email,
      password
    })
    return data as User
  } catch (err) {
    console.log(err)
  }
  return {} as User
}

// Função que segue uma communidade
export async function community (id: string) : Promise<User> {
  try {
    const data = await put(relativePath + `community/${id}`, {})
    return data as User
  } catch (err) {
    console.log(err)
  }
  return {} as User
}
