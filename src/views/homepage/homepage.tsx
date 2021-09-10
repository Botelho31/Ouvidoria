import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import { Header, SearchBar } from '../../components'

const Homepage: FC = () => {
  return (
    <SafeAreaView>
      <Header isSearchbar={true}/>
    </SafeAreaView>
  )
}

export default Homepage
