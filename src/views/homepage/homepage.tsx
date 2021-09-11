import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import { Header, InputDropdown, SearchBar } from '../../components'
import NewsCell from '../../components/news-cell'

const Homepage: FC = () => {
  return (
    <SafeAreaView>
      <Header isSearchbar={true}/>
      {/* <InputDropdown label="Label" placeholder="Escolha uma opção" options={[{ value: 'teste1' }, { value: 'teste1' }]} /> */}
      <NewsCell imageURL="https://www.gov.br/cgu/pt-br/assuntos/noticias/2021/08/governo-federal-promove-hackathon-rede-brasil/hackthon-rede-brasil.png" title="SERPRO realiza Hackathon Rede +Brasil entre 8 e 13 de setembro"></NewsCell>
    </SafeAreaView>
  )
}

export default Homepage
