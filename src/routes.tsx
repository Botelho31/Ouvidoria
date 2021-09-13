import React, { FC } from 'react'
import { NativeRouter, Route } from 'react-router-native'
import Complaint from './views/complaint/complaint'
import Homepage from './views/homepage/homepage'
import Login from './views/login/login'
import NewsScreen from './views/news/news'
import Operation from './views/operation/operation'
import Profile from './views/profile/profile'
import Signup from './views/signup/signup'

const Routes: FC = () => {
  return (
    <NativeRouter>
      <Route path="/complaint" component={Complaint} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile" component={Profile} />
      <Route path="/operation" component={Operation} />
      <Route path="/news" component={NewsScreen} />
      <Route exact path="/" component={Homepage} />
    </NativeRouter>
  )
}

export default Routes
