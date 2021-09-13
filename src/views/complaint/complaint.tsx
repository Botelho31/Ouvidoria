import React, { FC } from 'react'
import { SafeAreaView, View } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import Footer from '../../components/Footer/footer'

const Complaint: FC = () => {
  return (
    <SafeAreaView style={{ display: 'flex' }}>
      <Header isSearchbar={true}/>
      <Footer />
    </SafeAreaView>
  )
}

export default Complaint
