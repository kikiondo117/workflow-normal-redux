import React from 'react'
// Components
import Home from '../../../components/Home/Home.component'
import Error404 from '../../components/Error404'
import SideMenu from '../../components/SideMenu'
// ! Routes
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';

const {
  Sider, Content,
} = Layout;
export default function RoutesPrivate() {
  return (
    <Layout style={{ height: '100%' }}>
      <Sider style={{ overflowY: 'scroll' }}>
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route component={Error404} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}
