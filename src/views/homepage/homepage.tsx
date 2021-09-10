import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import SecondaryButton from '../../components/Buttons/secondary-button'

const Homepage: FC = () => {
  return (<SafeAreaView>
    <SecondaryButton text='Enviar contribuição' width={157}/>
    </SafeAreaView>)
}

export default Homepage
