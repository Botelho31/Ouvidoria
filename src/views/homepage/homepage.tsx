import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import { Header, InputDropdown, ReputationCell, ScrollCell } from '../../components'
import { Header3, StyleColors } from '../../styles'

const Homepage: FC = () => {
  return (
    <SafeAreaView>
      <Header isSearchbar={true}/>
      {/* <InputDropdown label="Label" placeholder="Escolha uma opção" options={[{ value: 'teste1' }, { value: 'teste1' }]} /> */}
      <ReputationCell title="Reputação" percentage={0.5} color={StyleColors.success} />
    </SafeAreaView>
  )
}

export default Homepage
