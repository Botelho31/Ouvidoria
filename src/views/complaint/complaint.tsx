import React, { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { InputDropdown, PageBody, InputImage, InputTextArea, InputSwitch, PrimaryButton, SecondaryButton } from '../../components'
import { Flexbox, Header2, Paragraph, StyleColors } from '../../styles'
import styled from 'styled-components'
import config from '../../infra/config'
import { useHistory, useParams } from 'react-router-native'
import { getById } from '../../infra/service/community-service'

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

  const [type, setType] = React.useState('')
  const [community, setCommunity] = React.useState(null)
  const [contributionType] = React.useState(false)
  const history = useHistory()

  const params = useParams()

  React.useEffect(() => {
    setType(params.type)
    async function loadCommunity () {
      const data = await getById(params.id)
      setCommunity(data)
    }
    if (params.type === 'community') {
      loadCommunity()
    }
  }, [])

  function getProfileImage () {
    switch (type) {
      case 'community':
        return <TitleCardImage source={ { uri: community.profileImageUrl }}/>
      case 'Elogio':
        return < TitleCardImage source={require('../../assets/elogio.png')} />
      case 'Reclamação':
        return < TitleCardImage source={require('../../assets/reclamacao.png')} />
      case 'Denúncia':
        return < TitleCardImage source={require('../../assets/denuncia.png')} />
      case 'Informação':
        return < TitleCardImage source={require('../../assets/informacao.png')} />
      case 'Solicitação':
        return < TitleCardImage source={require('../../assets/solicitacao.png')} />
      case 'Sugestão':
        return < TitleCardImage source={require('../../assets/sugestao.png')} />
    }
  }

  function getTitleCard () {
    return (
      <TitleCard>
        <TitleCardImageBackground style={[styles.shadowStyle]}>
          {getProfileImage()}
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

  async function createPost () {
    const user = await config.getUser()
    if (!user) {
      return
    }
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
    console.log(post)
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
          <PrimaryButton onPress={createPost} text="Enviar contribuição" width={157}/>
          <Margin/>
          <SecondaryButton onPress={() => history.push('/')} text="Cancelar" width={157}/>
        </Flexbox>
      </Flexbox>
    </PageBody>
  )
}

export default Complaint
