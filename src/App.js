
import CalendarDay from "./components/calendar";
import React from 'react';
import { Flex, Layout } from 'antd';
import GuideList from "./components/GuideList";
import TemHumidity from "./components/TemHumidity";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 80,
    paddingInline: 48,
    lineHeight: '80px',
    backgroundColor: '#4096ff',
};

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
    paddingTop: "20px",
    paddingLeft: '20px', // 左侧留出 20px 的空白
    paddingRight: '20px', // 右侧留出 20px 的空白

};

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
    display: 'flex',
    justifyContent: 'center', // 水平方向居中
    alignItems: 'center', // 垂直方向居中
    height: '100vh',// 可选，确保侧边栏占满整个视口高度
    paddingTop: '20px', // 从顶部增加距离
};

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    //width: 'calc(50% - 8px)',
    //maxWidth: 'calc(50% - 8px)',
};

const App = () => (
    <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>

            <Header style={headerStyle}>
                VISTALAB
            </Header>

            <Layout>

                <Sider width="25%" style={siderStyle}>
                        <CalendarDay/>
                </Sider>

                <Content style={contentStyle}>
                    <GuideList/>
                </Content>

            </Layout>
            <Footer style={footerStyle}>
                <TemHumidity/>

            </Footer>
        </Layout>
    </Flex>
);

export default App;