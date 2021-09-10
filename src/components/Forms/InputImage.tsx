import React, { FC } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { Header3, StyleColors } from '../../styles'
import { ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker'

const Background = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  height: 32px;
  padding: 8px 16px;
  border-radius: 10px;
  color: ${StyleColors.lightGray};
`

const Label = styled(Header3)`
  margin-left: 10px;
  color: ${StyleColors.primary};
`
const Icon = styled(Image)`
  width: 14px;
  height: 16px;
`

interface InputImageProps{
  text: string
}

const InputImage: FC<InputImageProps> = (props: InputImageProps) => {
  const [resourcePath, setResourcePath] = React.useState('')

  function selectFile () {
    const DEFAULT_OPTIONS: ImageLibraryOptions = {
      mediaType: 'photo',
      videoQuality: 'high',
      quality: 1,
      maxWidth: 0,
      maxHeight: 0,
      includeBase64: false,
      selectionLimit: 1
    }
    launchImageLibrary(DEFAULT_OPTIONS, (res) => {
      console.log('Response = ', res)
      if (res.didCancel) {
        console.log('User cancelled image picker')
      } else if (res.errorCode) {
        console.log('ImagePicker Error: ', res.errorMessage)
      } else {
        if (res.assets && res.assets[0].uri) {
          const source = res.assets[0].uri
          console.log(source)
          setResourcePath(source)
        } else {
          console.log('erro')
        }
      }
    })
  }

  return (
    <Background onPress={() => selectFile()}>
      <Icon source={require('../../assets/clips-icon.png')}></Icon>
      <Label>{props.text}</Label>
    </Background>
  )
}

export default InputImage
