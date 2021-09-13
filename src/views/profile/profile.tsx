import React, { FC } from 'react'
import { View, ScrollView } from 'react-native'
import { PageBody, ProfileInfo, ReputationCell, InputDropdown } from '../../components'
import { StyleColors, Flexbox, Paragraph, Margin } from '../../styles'
import Post from '../../infra/models/post'
import { getByCommunity } from '../../infra/service/post-service'
import PostCell from '../../components/posts/post-cell'
import { getById } from '../../infra/service/community-service'
import Community from '../../infra/models/community'
import PrimaryButton from '../../components/buttons/primary-button'
import styled from 'styled-components'
import OrderDropdown from '../../components/input/order-dropdown'

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

  React.useEffect(() => {
    async function loadData () {
      setCommunity(await getById('10862943581176474'))
      setPosts(await getByCommunity('10862943581176474'))
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

  console.log(community)

  return (
    <PageBody>
      <ScrollView>
        <ProfileInfo title={community ? community.name : ''} bannerImageURL={community ? community.bannerImageUrl : ''} profileImageURL={community ? community.profileImageUrl : ''}/>
        <Margin marginTop='8px'>
          <Flexbox flexDirection='row'>
            <ReputationCell title='Reputação' percentage={0.75} color={StyleColors.success}/>
            <Flexbox flexDirection='column'>
              <Margin marginLeft='20px'>
                <PrimaryButton text='Adicionar contribuição' width={157}/>
                <Desc>
                  <LabelDesc>
                    {community ? community.desc : 'LDOAPSKDOAS OPSKAD POASPO Ddasokdpask opsadkop kasodpkaokop kko '}
                  </LabelDesc>
                </Desc>
              </Margin>
            </Flexbox>
          </Flexbox>
        </Margin>
        <Margin marginTop='32px'>
          <Flexbox flexDirection='row'>
          <InputDropdown placeholder="Reclamação" options={complaintTypes} style={{ width: 217 }}/>
          <Margin marginLeft='10px'>
            <OrderDropdown options={complaintTypesOrder} placeholder='Ordenar'/>
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
