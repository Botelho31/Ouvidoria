import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import { community, get } from '../infra/service/user-service'
import { Flexbox, Header2, Header3, Spacer, StyleColors } from '../styles'

const styles = StyleSheet.create({
  shadowStyle: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  }
})

const ProfileInfoStyle = styled(Flexbox)`
  height: 176px;
  width: 100%;
  background-color: white;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  flex-direction: column;
`

const ProfileImageStyle = styled(Image)`
  height: 80px;
  width: 80px;
  border-radius: 10px;
`

const BannerImageStyle = styled(Image)`
  height: 120px;
  width: 100%;
`

const FollowButton = styled(View)`
  background-color: white;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
`

const AddIcon = styled(Image)`
  position: absolute;
  right: -5px;
  bottom: -5px;
`

interface ProfileInfoProps {
  title: string,
  bannerImageURL: string,
  profileImageURL: string,
  idCommunity: string
}

// Atua como a parte superior na tela de perfil, onde mostra a imagem principal e o banner de fundo
const ProfileInfo: FC<ProfileInfoProps> = (props: ProfileInfoProps) => {
  const [following, setFollowing] = React.useState(false)

  async function update () {
    try {
      const user = await get()
      console.log(user)
      setFollowing(user.communitys.includes(props.idCommunity))
    } catch (err) {
      console.log(err)
    }
  }

  async function follow () {
    const user = await community(props.idCommunity) 
    setFollowing(user.communitys.includes(props.idCommunity))
  }

  return (
    <ProfileInfoStyle>
      <BannerImageStyle source={{
        uri: props.bannerImageURL
      }}/>
        <Flexbox style={{ height: 56, justifyContent: 'flex-start' }}>
          <TouchableOpacity onPress={follow}>
            <FollowButton style={styles.shadowStyle}>
              <ProfileImageStyle source={{
                uri: props.profileImageURL
              }}/>
              <AddIcon style={{ display: following ? 'none' : 'flex' }} source={require('../assets/add-icon.png')}/>
            </FollowButton>
          </TouchableOpacity>
          <Header2 color={StyleColors.darkGray}>{props.title}</Header2>
        </Flexbox>
    </ProfileInfoStyle>
  )
}

export default ProfileInfo
