import React, { FC } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { Header, Footer } from '.'

interface PageBodyProps {
  children: Element[] | Element
}

// Componente que faz parte do grid do site, o qual ajuda um pouco na agilidade e na adaptação do layout
const PageBody: FC<PageBodyProps> = (props: PageBodyProps) => {
  return (
    <SafeAreaView style={{ display: 'flex', width: 375, marginRight: 'auto', marginBottom: 52, marginLeft: 'auto' }}>
      <Header isSearchbar={false}/>
      <ScrollView>
          {props.children}
      </ScrollView >
      <Footer />
    </SafeAreaView>
  )
}

export default PageBody
