import React, { FC } from 'react'
import { View, ScrollView } from 'react-native'
import { PageBody, ProfileInfo, ReputationCell, InputDropdown, PrimaryButton } from '../../components'
import { StyleColors, Flexbox, Paragraph, Margin } from '../../styles'
import Post from '../../infra/models/post'
import { getByCommunity } from '../../infra/service/post-service'
import PostCell from '../../components/posts/post-cell'
import { getById } from '../../infra/service/community-service'
import Community from '../../infra/models/community'
import styled from 'styled-components'
import OrderDropdown from '../../components/input/order-dropdown'
import { useHistory, useParams } from 'react-router'
import TypeDropdown from '../../components/input/type-dropdown'

const Desc = styled(View)`
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 157px;
  height: 96px;
  background-color: ${StyleColors.lightGray};
`

const LabelDesc = styled(Paragraph)`
  font-size: 11px;
  line-height: 12px;
`

// A tela onde o usuário poderá visualizar as informações de uma comunidade
const Profile: FC = () => {
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
  const complaintTypesOrder = [
    {
      value: 'Tendências'
    },
    {
      value: 'Não resp.'
    },
    {
      value: 'Últimas'
    }
  ]
  const [community, setCommunity] = React.useState<Community | null>(null)
  const [posts, setPosts] = React.useState<Post[]>([])

  const history = useHistory()
  const params = useParams()
  React.useEffect(() => {
    async function loadData () {
      setCommunity(await getById(params.id))
      setPosts(await getByCommunity(params.id))
    }

    loadData()
  }, [])

  function getPosts () {
    const children = []
    for (let index = 0; index < posts.length; index++) {
      const post = posts[index]
      children.push(<PostCell postInfo={post} showComments={false}/>)
    }
    return children
  }

  function sortPosts() {

  }

  return (
    <PageBody>
      <ScrollView>
        <ProfileInfo idCommunity={community?.id} title={community ? community.name : ''} bannerImageURL={community ? community.bannerImageUrl : ''} profileImageURL={community ? community.profileImageUrl : ''}/>
        <Margin marginTop='8px'>
          <Flexbox flexDirection='row'>
            <ReputationCell title='Reputação' percentage={community?.reputation} color={StyleColors.success}/>
            <Flexbox flexDirection='column'>
              <Margin marginLeft='20px'>
                <PrimaryButton onPress={() => history.push(`/complaint/Contribuição/community/${community?.id}`)} text='Adicionar contribuição' width={157}/>
                <Desc>
                  <LabelDesc>
                    {community ? community.desc : ''}
                  </LabelDesc>
                </Desc>
              </Margin>
            </Flexbox>
          </Flexbox>
        </Margin>
        <Margin marginTop='32px'>
          <Flexbox flexDirection='row'>
          <TypeDropdown onChange={() => { sortPosts() }} placeholder="Reclamação" options={complaintTypes} style={{ width: 217 }}/>
          <Margin marginLeft='10px'>
            <OrderDropdown onChange={() => { sortPosts() }} options={complaintTypesOrder} placeholder='Ordenar'/>
          </Margin>
          </Flexbox>
        </Margin>
        <Margin marginTop='8px'>
          {getPosts()}
        </Margin>
      </ScrollView>
    </PageBody>
  )
}

export default Profile
