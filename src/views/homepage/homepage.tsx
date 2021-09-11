import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import { Header, InputDropdown, SearchBar } from '../../components'

const Homepage: FC = () => {
  return (
    <SafeAreaView>
      <Header isSearchbar={true}/>
      <InputDropdown label="Label" placeholder="Escolha uma opção" options={[{ value: 'teste1' }, { value: 'teste1' }]} />
    </SafeAreaView>
  )
}

export default Homepage
