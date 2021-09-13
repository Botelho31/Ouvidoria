import React, { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import styled from 'styled-components'
import { Flexbox, Header3, Paragraph, Spacer, StyleColors } from '../styles'

const styles = StyleSheet.create({
  imageStyle: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: 'white'
  }
})

const ScrollCellStyle = styled(Flexbox)`
  height: 136px;
  width: 88px;
  background-color: ${StyleColors.lightGray};
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  flex-direction: column;
  padding: 14px 2px;
`

const ImageStyle = styled(Image)`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  background-color: white;
`

const ImageBackgroundStyle = styled(View)`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  background-color: white;
`

interface ScrollCellProps {
  title: string,
  numberColor: string,
  number: string,
  imageURL: string
}

// Atua como uma célula de noticias e de comunidades
const ScrollCell: FC<ScrollCellProps> = (props: ScrollCellProps) => {
  return (
    <ScrollCellStyle>
      <Spacer/>
      <Header3 style={{ color: props.numberColor }}>{props.number}</Header3>
      <ImageBackgroundStyle style={styles.imageStyle} >
        <ImageStyle source={{
          uri: props.imageURL
        }}/>
      </ImageBackgroundStyle>
      <Paragraph style={{ margin: 8, color: StyleColors.darkGray, textAlign: 'center' }} color="white">{props.title}</Paragraph>
    </ScrollCellStyle>
  )
}

export default ScrollCell
