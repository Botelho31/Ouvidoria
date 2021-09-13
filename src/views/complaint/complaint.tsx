import React, { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { InputDropdown, PageBody, InputImage, InputTextArea, InputSwitch, PrimaryButton, SecondaryButton } from '../../components'
import { Flexbox, Header2, Paragraph, StyleColors } from '../../styles'
import styled from 'styled-components'
import config from '../../infra/config'
import { useHistory, useParams } from 'react-router-native'
import { getById, getSorted } from '../../infra/service/community-service'
import { create } from '../../infra/service/post-service'

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

// A tela de contribuição do usuário onde ele pode deixar seu comentario, elogia ou qualquer que quer que seja sua contribuição
const Complaint: FC = () => {
  const [titleVal, setTitleVal] = React.useState('')
  const [bodyVal, setBodyVal] = React.useState('')
  const [communityVal, setCommunityVal] = React.useState('')
  const [typeVal, setTypeVal] = React.useState('')
  const [anonymousVal, setAnonymousVal] = React.useState(false)

  const [type, setType] = React.useState('')
  const [community, setCommunity] = React.useState({ id: '', name: '' })
  const [communityTypes, setCommunityTypes] = React.useState([])

  const history = useHistory()
  const params = useParams()
  React.useEffect(() => {
    setType(params.type)
    async function loadCommunity () {
      const data = await getById(params.id)
      setCommunity(data)
    }
    async function loadCommunityTypes () {
      const data = await getSorted(true)
      let types = []
      for(let i = 0; i < data.length; i ++){
        types.push({ value: data[i].name, id: data[i].id })
      }
      console.log(types)
      setCommunityTypes(types)
    }
    if (params.type === 'Contribuição') {
      console.log('teste')
      loadCommunity()
    } else {
      loadCommunityTypes()
    }
  }, [])

  function getProfileImage () {
    switch (type) {
      case 'Contribuição':
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
        <TitleCardImageBackground style={[styles.shadowStyle, { borderRadius: type !== 'Contribuição' ? 34.5 : 10 }]}>
          {getProfileImage()}
        </TitleCardImageBackground>
      <Flexbox flexDirection="column" verticalAlign="flex-start" style={{ marginRight: 20 }}>
        <Header2 color={StyleColors.primary} style={{ marginBottom: 10 }}>
          {type}
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
    console.log(type)
    if (type !== 'Contribuição') {
      const post = {
        idCommunity: communityTypes[0].id,
        communityName: communityTypes[0].value,
        userName: user.name,
        idUser: user.email,
        title: titleVal,
        body: bodyVal,
        status: 'NÃO_RESPONDIDA',
        type: type
        // anonymous: anonymousVal
      }
      console.log(post)
      await create(post)
      history.push('/profile/' + communityTypes[0].id)
    } else {
      const post = {
        idCommunity: community?.id,
        communityName: community?.name,
        userName: user.name,
        idUser: user.email,
        title: titleVal,
        body: bodyVal,
        status: 'NÃO_RESPONDIDA',
        type: typeVal
        // anonymous: anonymousVal
      }
      console.log(post)
      await create(post)
      history.push('/profile/' + community.id)
    }
  }

  return (
    <PageBody>
      <Margin/>
      {getTitleCard()}
      <Flexbox flexDirection="column" verticalAlign="flex-start" style={{ marginLeft: 20, marginRight: 20 }}>
        <InputSwitch onChange={(val) => setAnonymousVal(val)} text="Esta denúncia deve ser anônima"/>
        <Margin/>
        {type !== 'Contribuição' ? <InputDropdown onChange={(val) => setCommunityVal(val)} placeholder="Escolha um orgão" label="Qual órgão está relacionado ao ocorrido?" options={communityTypes}/> : <InputDropdown onChange={(val) => setCommunityVal(val)} placeholder="Escolha um tipo" label="Qual sera a contribuição feita?" options={complaintTypes}/> }
        <Margin/>
        <InputTextArea onChange={(val) => setTitleVal(val)} placeholder="Escreva um titulo" type="" title="Título" check/>
        <Margin/>
        <InputTextArea onChange={(val) => setBodyVal(val)} placeholder="Escreva um texto" type="texto" title="Texto" check/>
        <Margin/>
        <Flexbox flexDirection="column" style={{ width: '100%' }}>
          <PrimaryButton onPress={createPost} text="Enviar contribuição" width={157}/>
          <Margin/>
          <SecondaryButton onPress={() => history.push('/')} text="Cancelar" width={157}/>
        </Flexbox>
      </Flexbox>
    </PageBody>
  )
}

export default Complaint
