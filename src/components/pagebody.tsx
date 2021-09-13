import React, { FC } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { Header, Footer } from '.'

interface PageBodyProps {
  children: Element[] | Element
}

const PageBody: FC<PageBodyProps> = (props: PageBodyProps) => {
  return (
    <SafeAreaView style={{ display: 'flex', width: 375, marginRight: 'auto', marginBottom: 52, marginLeft: 'auto' }}>
      <Header isSearchbar={true}/>
      <ScrollView>
          {props.children}
      </ScrollView >
      <Footer />
    </SafeAreaView>
  )
}

export default PageBody
