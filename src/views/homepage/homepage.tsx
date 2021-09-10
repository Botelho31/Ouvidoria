import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import PrimaryButton from '../../components/Buttons/primary-button'

const Homepage: FC = () => {
  return (<SafeAreaView>
    <PrimaryButton text='Enviar contribuição' width={157}/>
    </SafeAreaView>)
}

export default Homepage
