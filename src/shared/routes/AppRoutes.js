import React from 'react'
// Components
import App from '../../container/root/App'
// ! Routes
import PublicRoutes from './public/PublicRoutes'
import PrivateRoutes from './private/PrivateRoutes'
// Redux
import { Provider } from 'react-redux'
import configureStore from '../redux/configureStorage'

const store = configureStore({})

const AppRouter = () => {
  const login = true
  return (
    <Provider store={store}>
      <App>
        {login
          ? <PrivateRoutes />
          : <PublicRoutes />
        }
      </App>
    </Provider>
  )
}

export default AppRouter