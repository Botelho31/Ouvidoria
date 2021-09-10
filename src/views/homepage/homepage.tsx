import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import { Header } from '../../components'

const Homepage: FC = () => {
  return (
    <SafeAreaView>
      <Header isSearchbar={false}/>
    </SafeAreaView>
  )
}

export default Homepage
