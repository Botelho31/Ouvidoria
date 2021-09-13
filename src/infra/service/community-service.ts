import config from '../config'
import Community from '../models/community'
import axios from 'axios'

const baseIP = config.baseIP + 'community/'

export async function create (community: Community): Promise<Community> {
  try {
    const data = await axios.post(baseIP, community)
    return data.data as Community
  } catch (err) {
    console.log(err)
  }
  return {} as Community
}

export async function getById (id: string) : Promise<Community> {
  try {
    const data = await axios.get(baseIP + id)
    return data.data as Community
  } catch (err) {
    console.log(err)
  }
  return {} as Community
}

export async function getSorted (asc: boolean) : Promise<Community[]> {
  try {
    const data = await axios.get(baseIP + `ranking/${asc}`)
    return data.data as Community[]
  } catch (err) {
    console.log(err)
  }
  return []
}
