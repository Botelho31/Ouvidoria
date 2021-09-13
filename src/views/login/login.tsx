import React, { FC } from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Flexbox, Header1, Header3 } from '../../styles'
import styled from 'styled-components'
import InputLabel from '../../components/forms/InputLabel'
import { PrimaryButton, SecondaryButton } from '../../components'
import { login } from '../../infra/service/user-service'
import { useHistory } from 'react-router'
import config from '../../infra/config'
import { AsyncStorage } from 'react-native'

const BannerStyle = styled(Flexbox)`
  height: 160px;
  width: 100%;
  background-color: white;
`

const Login: FC = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const history = useHistory()
  async function performLogin () {
    const data = await login(email, password)
    if ('token' in data) {
      await AsyncStorage.setItem('token', data.token)
      await AsyncStorage.setItem('user', JSON.stringify(data))
      history.push('/')
    }
  }

  return (
  <SafeAreaView style={{ display: 'flex', width: 390, marginRight: 'auto', marginBottom: 52, marginLeft: 'auto' }}>
    <ScrollView>
      <BannerStyle>
        <Image style={{ width: '100%', position: 'absolute' }} source={require('../../assets/login-banner.png')}/>
        <Header1 color="white">Voz do povo</Header1>
      </BannerStyle>
      <Flexbox flexDirection="column">
        <InputLabel onChange={(ev) => setEmail(ev)} style={{ marginBottom: 16, marginTop: 64 }} title="Login" placeholder="exemplo@email.com" check/>
        <InputLabel onChange={(ev) => setPassword(ev)} title="Senha" placeholder="Insira sua senha" check password/>
        <PrimaryButton onPress={performLogin} style={{ marginBottom: 152, marginTop: 16 }} text="Login" width={101}/>
        <Header3> Não possui login?</Header3>
        <SecondaryButton onPress={(val) => history.push('/signup')} text="Cadastre-se" width={101}/>
      </Flexbox>
    </ScrollView >
    <Text style={{ display: 'none' }}>{email}{password}</Text>
  </SafeAreaView>
  )
}

export default Login
