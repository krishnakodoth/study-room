import { Provider } from "react-redux";
import { Layout, theme } from "antd";

import "./App.css";
import { AppHeader } from "./component/AppHeader";

const { Content, Footer  } = Layout;

import { Outlet } from 'react-router';
import { store } from "./store/store";


function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Provider store={store}>
    <Layout>
      {/* <Layout hasSider> */}
      {/* <SideMenu /> */}
      <Layout>
        <AppHeader />
        <Content style={{ padding: "0 48px" }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb> */}
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©{new Date().getFullYear()} Created by Krishnakodoth
        </Footer>
      </Layout>
    </Layout>
    </Provider>
  );
}

export default App;
