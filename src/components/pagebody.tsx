import React, { FC } from 'react'
import { Image, SafeAreaView, StyleSheet } from 'react-native'
import styled from 'styled-components'
import { Header } from '.'
import { Flexbox, Header3, Spacer, StyleColors } from '../styles'
import Footer from './Footer/footer'

interface PageBodyProps {
  children: Element[] | Element
}

const PageBody: FC<PageBodyProps> = (props: PageBodyProps) => {
  return (
    <SafeAreaView style={{ display: 'flex', width: '375px', margin: 'auto' }}>
      <Header isSearchbar={true}/>
        {props.children}
      <Footer />
    </SafeAreaView>
  )
}

export default PageBody
