import React, { FC } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import styled from 'styled-components'
import { Header } from '.'
import Footer from './footer/footer'

interface PageBodyProps {
  children: Element[] | Element
}

const PageBody: FC<PageBodyProps> = (props: PageBodyProps) => {
  return (
    <SafeAreaView style={{ display: 'flex', width: 375, marginRight: 'auto', marginLeft: 'auto' }}>
      <Header isSearchbar={true}/>
      <ScrollView>
          {props.children}
      </ScrollView>
      <Footer />
    </SafeAreaView>
  )
}

export default PageBody
