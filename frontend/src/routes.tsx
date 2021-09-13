import React, { FC } from 'react'
import { NativeRouter, Route } from 'react-router-native'
import Complaint from './views/complaint/complaint'
import Homepage from './views/homepage/homepage'
import Login from './views/login/login'
import NewsScreen from './views/news/news'
import Profile from './views/profile/profile'
import Signup from './views/signup/signup'
import Thread from './views/thread/thread'
import Explore from './views/explore/explore'

// Onde contém todas as rotas do aplicativo
const Routes: FC = () => {
  return (
    <NativeRouter>
      <Route path="/complaint/:type/community/:id" component={Complaint} />
      <Route path="/login" component={Login} />
      <Route path="/explore" component={Explore} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/news/:id" component={NewsScreen} />
      <Route path="/thread/:id" component={Thread} />
      <Route exact path="/" component={Homepage} />
    </NativeRouter>
  )
}

export default Routes
