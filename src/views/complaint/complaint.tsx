import React, { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { InputDropdown, PageBody, InputImage, InputTextArea, PrimaryButton, SecondaryButton } from '../../components'
import InputSwitch from '../../components/forms/InputSwitch'
import { Flexbox, Header2, Paragraph, StyleColors } from '../../styles'
import styled from 'styled-components'
import config from '../../infra/config'

const complaintTypes = [
  {
    value: 'Elogio'
  },
  {
    value: 'Reclamação'
  },
  {
    value: 'Denúncia'
  },
  {
    value: 'Informação'
  },
  {
    value: 'Solicitação'
  },
  {
    value: 'Sugestão'
  }
]

const styles = StyleSheet.create({
  shadowStyle: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  }
})

const Margin = styled(View)`
  height: 16;
`

const TitleCard = styled(Flexbox)`
  height: 88px;
  background-color: ${StyleColors.lightGray};
`

const TitleCardImage = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 10;
`

const TitleCardImageBackground = styled(View)`
  background-color: white;
  width: 69;
  height: 69;
  margin-left: 20;
  margin-right: 20;
  border-radius: 10;
`

const Complaint: FC = () => {
  const [titleVal, setTitleVal] = React.useState('')
  const [bodyVal, setBodyVal] = React.useState('')
  const [communityVal, setCommunityVal] = React.useState('')
  const [typeVal, setTypeVal] = React.useState('')
  const [anonymousVal, setAnonymousVal] = React.useState(false)

  function getTitleCard () {
    return (
      <TitleCard>
        <TitleCardImageBackground style={[styles.shadowStyle]}>
          <TitleCardImage source={ { uri: 'https://pbs.twimg.com/profile_images/1069542803586326528/bhfxCFeF_400x400.jpg' }}/>
        </TitleCardImageBackground>
      <Flexbox flexDirection="column" verticalAlign="flex-start" style={{ marginRight: 20 }}>
        <Header2 color={StyleColors.primary} style={{ marginBottom: 10 }}>
          Reclamação
        </Header2>
        <Paragraph color={StyleColors.mediumGray}>
          Caso queira fazer um elogio ou denúncia, clique aqui.
        </Paragraph>
      </Flexbox>
      </TitleCard>
    )
  }

  async function createPost() {
    const user = await config.getUser()
    const post = {
      idCommunity: communityVal,
      communityName: communityVal,
      userName: user.name,
      idUser: user.email,
      title: titleVal,
      body: bodyVal,
      status: 'NÃO_RESPONDIDA',
      type: typeVal,
      anonymous: anonymousVal
    }
  }

  return (
    <PageBody>
      <Margin/>
      {getTitleCard()}
      <Flexbox flexDirection="column" verticalAlign="flex-start" style={{ marginLeft: 20, marginRight: 20 }}>
        <InputSwitch onChange={(val) => setAnonymousVal(val)} text="Esta denúncia deve ser anônima"/>
        <Margin/>
        <InputDropdown onChange={(val) => setCommunityVal(val)} placeholder="Escolha um orgão" label="Qual órgão está relacionado ao ocorrido?" options={complaintTypes}/>
        <Margin/>
        <InputTextArea onChange={(val) => setTitleVal(val)} placeholder="Escreva um titulo" type="" title="Título" check/>
        <Margin/>
        <InputTextArea onChange={(val) => setBodyVal(val)} placeholder="Escreva um texto" type="texto" title="Texto" check/>
        <Margin/>
        <Flexbox flexDirection="column" style={{ width: '100%' }}>
          <InputImage text="Inserir arquivo em anexo"/>
          <Margin/>
          <PrimaryButton text="Enviar contribuição" width={157}/>
          <Margin/>
          <SecondaryButton text="Cancelar" width={157}/>
        </Flexbox>
      </Flexbox>
    </PageBody>
  )
}

export default Complaint
