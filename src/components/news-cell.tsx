import React, { FC } from 'react'
import { Image, StyleSheet } from 'react-native'
import styled from 'styled-components'
import { Flexbox, Header3, Spacer, StyleColors } from '../styles'

const styles = StyleSheet.create({
})

const NewsCellStyle = styled(Flexbox)`
  height: 120px;
  width: 180px;
  background-color: white;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  flex-direction: column;
`

const ImageStyle = styled(Image)`
  height: 120px;
  width: 180px;
  position: absolute;
  border-radius: 10px;
`

interface NewsCellProps {
  title: string,
  imageURL: string
}

const NewsCell: FC<NewsCellProps> = (props: NewsCellProps) => {
  return (
    <NewsCellStyle>
      <ImageStyle source={{
        uri: props.imageURL
      }}/>
      <Spacer/>
      <Header3 style={{ margin: 8 }} color="white">{props.title}</Header3>
    </NewsCellStyle>
  )
}

export default NewsCell
