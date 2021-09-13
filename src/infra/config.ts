
import { AsyncStorage } from 'react-native'
import User from './models/user'

const config = {
  baseIP: 'http://192.168.0.22:8080/',
  getToken: async function getToken () : Promise<string | null> {
    const token = await AsyncStorage.getItem('token')
    return token
  },
  getUser: async function getUser () : Promise<User | null> {
    const user = await AsyncStorage.getItem('user')
    const userJson = JSON.parse(String(user))
    return userJson as User | null
  }
}

export default config
