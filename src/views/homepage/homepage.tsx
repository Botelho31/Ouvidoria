import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import InputLabel from '../../components/Forms/InputLabel'

const Homepage: FC = () => {
  return (<SafeAreaView>
    <InputLabel check={false} title='Titulo' placeholder='placeholder'/>
    </SafeAreaView>)
}

export default Homepage
