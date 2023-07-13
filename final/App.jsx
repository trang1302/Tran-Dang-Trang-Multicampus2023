import {
  MenuFoldOutlined,
  ClockCircleOutlined,
  SwapOutlined,
  TableOutlined,
  PercentageOutlined,
  PlusCircleOutlined 
} from "@ant-design/icons";
import Calculator from "./mini-app/Calculator";
import Pomodoro from "./mini-app/Pomodoro";
import ChangeMoney from "./mini-app/Exchange";
import Chessboard from "./mini-app/Chessboard";
import Helloworld from "./mini-app/Helloworld";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button, Layout, Menu, theme, Space, Typography, } from "antd";
import { useState } from "react";
import logo from "./assets/board-svgrepo-com.svg";

const { Header, Sider, Content, Footer } = Layout;
const { Text } = Typography;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleHomeClick = () => {
    window.location.href = "/";
  };
  return (
    <BrowserRouter>
      <Layout>
        <Sider collapsed={collapsed}>
          <Header
            style={{
              padding: 0,
            }}
          >
            <Space>
              <Link onClick={handleHomeClick}>
                <div
                  style={{
                    padding: 15,
                    display: "inline-flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <img src={logo} alt="Your SVG" />
                  {collapsed ? (
                    <></>
                  ) : (
                    <Text style={{ color: "white", marginLeft: 10 }}>
                      Tran Dang Trang
                    </Text>
                  )}
                </div>
              </Link>
            </Space>
          </Header>
          <Menu
            theme="dark"
            mode="inline"
            items={[
              {
                icon: <SwapOutlined />,
                key: "/unit-converter",
                label: <Link to="/exchange">Change Money</Link>,
              },
              {
                icon: <TableOutlined />,
                key: "/Chessboard",
                label: <Link to="/Chessboard">Chessboard</Link>,
              },
              {
                icon: <ClockCircleOutlined />,
                key: "/pomodoro",
                label: <Link to="/pomodoro">Pomodoro</Link>,
              },
              {
                icon: <PercentageOutlined />,
                key: "caculator",
                label: <Link to="/caculator">Caculator</Link>,
              },
              {
                icon: <PlusCircleOutlined />,
                key: "Helloworld",
                label: <Link to="/Helloworld">Helloworld</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Button
            type="text"
            icon={<MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Content
            style={{
              padding: 16,
              minHeight: 800,
              background: colorBgContainer,
              backgroundColor: "pink",

            }}
          >
            <Routes>
              <Route path="/exchange" element={<ChangeMoney />} />
            </Routes>
            <Routes>
              <Route path="/Chessboard" element={<Chessboard />} />
            </Routes>
            <Routes>
              <Route path="/pomodoro" element={<Pomodoro />} />
            </Routes>
            <Routes>
              <Route path="/caculator" element={<Calculator />} />
            </Routes>
            <Routes>
              <Route path="/Helloworld" element={<Helloworld />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Created by Tran Dang Trang
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
