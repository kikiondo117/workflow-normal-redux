import React from 'react'
// ! Routes
import { Route, Switch } from 'react-router-dom'
// Components
import App from '../../container/root/App'
import Home from '../../components/Home/Home.component'
import Error404 from '../components/Error404/'
const AppRouter = () => {

  return (
    <App>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route component={Error404} />
      </Switch>
    </App>
  )
}

export default AppRouter