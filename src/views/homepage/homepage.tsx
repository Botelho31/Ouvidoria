import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import InputTextArea from '../../components/Forms/InputTextArea'

const Homepage: FC = () => {
  return (<SafeAreaView>
    <InputTextArea check={false} type='texto' title='Titulo'/>
    </SafeAreaView>)
}

export default Homepage
