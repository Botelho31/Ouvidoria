import React, { FC } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { Header } from '.'
import Footer from './footer/footer'

interface PageBodyProps {
  children: Element[] | Element
}

const PageBody: FC<PageBodyProps> = (props: PageBodyProps) => {
  return (
    <SafeAreaView style={{ display: 'flex', width: 375, marginRight: 'auto', marginLeft: 'auto' }}>
      <Header isSearchbar={false}/>
      <ScrollView >
          {props.children}
      </ScrollView>
      <Footer />
    </SafeAreaView>
  )
}

export default PageBody
