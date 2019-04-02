import React from 'react'
// Components
import App from '../../container/root/App'
// ! Routes
import PublicRoutes from './public/PublicRoutes'
import PrivateRoutes from './private/PrivateRoutes'

const AppRouter = () => {
  const login = false
  return (
    <App>
      {login
        ? <PrivateRoutes />
        : <PublicRoutes />
      }
    </App>
  )
}

export default AppRouter