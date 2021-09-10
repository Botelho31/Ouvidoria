import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import InputSwitch from '../../components/Forms/InputSwitch'

const Homepage: FC = () => {
  return (<SafeAreaView>
    <InputSwitch text='Esta denúncia deve ser anônima?'/>
    </SafeAreaView>)
}

export default Homepage
