
import { AsyncStorage } from 'react-native'

const config = {
  baseIP: 'http://192.168.0.22:8080/',
  getToken: async function getToken () : Promise<string | null> {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaXR5IjoiQnJhc8OtbGlhIiwicmFjZSI6IkJSQU5DTyIsInVmIjoiRGlzdHJpdG8gRmVkZXJhbCIsInBhc3N3b3JkIjoiJDJhJDEwJG40dXNzbzFmVFVJZHFQMllDRzhmdS45SGJzZ1Fqd0Qwb1psbzhhNGYxY3hHQmJVRE50QVNtIiwiZW1haWwiOiJsdWtpdG8wMjBAZ21haWwuY29tIiwibmFtZSI6Ikx1Y2FzIE1lbmRvbsOnIiwiZ2VuZGVyIjoiTUFTQ1VMSU5PIiwiY29tbXVuaXR5cyI6W10sImFnZSI6MTksImlhdCI6MTYzMTQ5MDU4NCwiZXhwIjoxNjMyMDk1Mzg0fQ.YLeBymu3ezCbzdKdDJ_5WcteFuow7s1U-Jm_TfzTuOY'
    return token
  }
}

export default config
