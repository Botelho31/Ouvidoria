import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import InputImage from '../../components/Forms/InputImage'

const Homepage: FC = () => {
  return (<SafeAreaView>
    <InputImage text='Inserir arquivo ou localização em anexo'/>
    </SafeAreaView>)
}

export default Homepage
