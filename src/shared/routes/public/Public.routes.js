import React from 'react'
// Components
import Login from '../../../container/public/Login/Login.component'
import Error404 from '../../components/Error404'
// Styles
import { Layout } from 'antd';
// ! Routes
import { Route, Switch } from 'react-router-dom'

const {
  Content,
} = Layout;
export default function RoutesPublic() {
  return (
    <>
      <Layout style={{ height: '100%' }}>
        <Layout>
          <Content>
            <Switch>
              <Route path='/' component={Login} exact />
              <Route component={Error404} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
