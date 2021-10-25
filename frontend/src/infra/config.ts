
import { AsyncStorage } from 'react-native'
import User from './models/user'

// Arquivo de configuração da aplicação
const config = {
  baseIP: 'http://3.88.0.15:8080/',
  isLoggedIn: false,
  getToken: async function getToken () : Promise<string | null> {
    const token = await AsyncStorage.getItem('token')
    return 'Bearer ' + token as string | null
  },
  getUser: async function getUser () : Promise<User | null> {
    const user = await AsyncStorage.getItem('user')
    const userJson = JSON.parse(String(user))
    // await AsyncStorage.removeItem('user')
    // await AsyncStorage.removeItem('token')
    // return null
    return userJson as User | null
  }
}

export default config
