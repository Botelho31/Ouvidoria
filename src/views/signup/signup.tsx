import React, { FC } from 'react'
import { AsyncStorage, Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { InputDropdown, PrimaryButton, InputLabel } from '../../components'
import User from '../../infra/models/user'
import { Flexbox, Header1 } from '../../styles'
import { signup } from '../../infra/service/user-service'

const BannerStyle = styled(Flexbox)`
  height: 80px;
  width: 100%;
  background-color: white;
`

const genderTypes = [
  {
    value: 'MASCULINO'
  },
  {
    value: 'FEMININO'
  },
  {
    value: 'OUTROS'
  }
]

const ufOptions = [
  {
    value: 'AC'
  },
  {
    value: 'AL'
  },
  {
    value: 'AP'
  },
  {
    value: 'AM'
  },
  {
    value: 'BA'
  },
  {
    value: 'CE'
  },
  {
    value: 'DF'
  },
  {
    value: 'ES'
  },
  {
    value: 'GO'
  },
  {
    value: 'MA'
  },
  {
    value: 'MT'
  },
  {
    value: 'MS'
  },
  {
    value: 'MG'
  },
  {
    value: 'PA'
  },
  {
    value: 'PB'
  },
  {
    value: 'PR'
  },
  {
    value: 'PE'
  },
  {
    value: 'PI'
  },
  {
    value: 'RJ'
  },
  {
    value: 'RN'
  },
  {
    value: 'RS'
  },
  {
    value: 'RO'
  },
  {
    value: 'RR'
  },
  {
    value: 'SC'
  },
  {
    value: 'SP'
  },
  {
    value: 'SE'
  },
  {
    value: 'TO'
  }
]

// A tela onde o usuário cria a sua conta
const Signup: FC = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')
  const [gender, setGender] = React.useState('')
  const [age, setAge] = React.useState(0)
  const [race, setRace] = React.useState('')
  const [uf, setUf] = React.useState('')
  const [city, setCity] = React.useState('')

  const history = useHistory()

  async function performSignup () {
    const user : User = {
      name,
      email,
      password,
      gender,
      age,
      race,
      uf,
      city
    }
    const data = await signup(user)
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
        <Image style={{ width: '100%', height: '100%', position: 'absolute' }} source={require('../../assets/login-banner.png')}/>
        <Header1 color="white">Cadastro</Header1>
      </BannerStyle>
      <Flexbox flexDirection="column">
        <InputLabel onChange={(ev) => setEmail(ev)} style={{ marginBottom: 16, marginTop: 64 }} title="Login" placeholder="exemplo@email.com" check/>
        <InputLabel onChange={(ev) => setPassword(ev)} style={{ marginBottom: 16 }} title="Senha" placeholder="Insira sua senha" check password/>
        <InputLabel onChange={(ev) => {}} style={{ marginBottom: 16 }} title="Confirme sua Senha" placeholder="Digite novamente a mesma senha" check password/>
        <InputLabel onChange={(ev) => setName(ev)} style={{ marginBottom: 16 }} title="Nome Completo" placeholder="Digite seu nome e sobrenome" check/>
        <InputLabel onChange={(ev) => setGender(ev)} style={{ marginBottom: 16 }} title="Gênero" placeholder="Defina seu gênero" check/>
        <InputLabel onChange={(ev) => setAge(Number(ev))} style={{ marginBottom: 16 }} title="Idade" placeholder="Defina a sua idade" check/>
        <InputLabel onChange={(ev) => setRace(ev)} style={{ marginBottom: 16 }} title="Raça" placeholder="Defina a sua raça" check/>
        <InputLabel onChange={(ev) => setUf(ev)} style={{ marginBottom: 16 }} title="UF" placeholder="Escolha seu UF" check/>
        <InputLabel onChange={(ev) => setCity(ev)} style={{ marginBottom: 16 }} title="Município" placeholder="Digite se municipio" check/>
        <PrimaryButton onPress={performSignup} style={{ marginTop: 16 }} text="Finalizar Cadastro" width={120}/>
      </Flexbox>
    </ScrollView >
    <Text style={{ display: 'none' }}>
      {email}
      {password}
      {gender}
      {age}
      {race}
      {uf}
      {city}
    </Text>
  </SafeAreaView>
  )
}

export default Signup
