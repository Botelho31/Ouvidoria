
import { AsyncStorage } from 'react-native'

const config = {
  baseIP: 'http://192.168.0.22:8080/',
  getToken: async function getToken () : Promise<string | null> {
    const token = await AsyncStorage.getItem('token')
    return token
  }
}

export default config
