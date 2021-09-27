import React from 'react';
import 'antd/dist/antd.css';
import './../../index.css';
import { Layout } from 'antd';
import SideBar from './SideBar'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="sider">
          <div className="logo" />
         <SideBar collapsed={this.state.collapsed} ></SideBar>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
         <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default  Dashboard