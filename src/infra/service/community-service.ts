import Community from '../models/community'
import { get, post } from './base-service'

const relativePath = 'community/'

export async function create (community: Community): Promise<Community> {
  try {
    const data = await post(relativePath, community)
    return data.data as Community
  } catch (err) {
    console.log(err)
  }
  return {} as Community
}

export async function getById (id: string) : Promise<Community> {
  try {
    const data = await get(relativePath + id)
    return data.data as Community
  } catch (err) {
    console.log(err)
  }
  return {} as Community
}

export async function getSorted (asc: boolean) : Promise<Community[]> {
  try {
    const data = await get(relativePath + `ranking/${asc}`)
    return data.data as Community[]
  } catch (err) {
    console.log(err)
  }
  return []
}
