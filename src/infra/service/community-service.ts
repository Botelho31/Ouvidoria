import Community from '../models/community'
import { get, post } from './base-service'

const relativePath = 'community/'

// Função que cria uma comunidade
export async function create (community: Community): Promise<Community> {
  try {
    const data = await post(relativePath, community)
    return data as Community
  } catch (err) {
    console.log(err)
  }
  return {} as Community
}

// Função que lista uma comunidade por id
export async function getById (id: string) : Promise<Community> {
  try {
    const data = await get(relativePath + id)
    return data as Community
  } catch (err) {
    console.log(err)
  }
  return {} as Community
}

// Função ordena algumas communidades com base no ranking
export async function getSorted (asc: boolean) : Promise<Community[]> {
  try {
    const data = await get(relativePath + `ranking/${asc}`)
    return data as Community[]
  } catch (err) {
    console.log(err)
  }
  return []
}
