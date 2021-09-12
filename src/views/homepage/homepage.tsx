import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import { Header, InputDropdown, ProfileInfo, ReputationCell, ScrollCell } from '../../components'
import OrderDropdown from '../../components/input/order-dropdown'
import { Header3, StyleColors } from '../../styles'

const Homepage: FC = () => {
  return (
    <SafeAreaView>
      <Header isSearchbar={true}/>
      <OrderDropdown placeholder="Ordenar" options={[{ value: 'teste1' }, { value: 'teste2' }]} />
    </SafeAreaView>
  )
}

export default Homepage
