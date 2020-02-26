import { Layout, Menu } from 'antd';
import Link from 'umi/link';

const { Header, Footer, Content, Sider } = Layout;

export default function BasicLayout(props) {
    return (
        <Layout className="layout">
            <Sider style={{ width: '256px', minHeight: '100vh', color: 'white', fontFamily: "Courier New,Courier,monospace" }}>
                <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']}
                    style={{ height: "100vh", flexDirection: "column", display: 'flex', justifyContent: 'center' }}>
                    <Menu.Item key="1" style={{ fontSize: '18px', height: "60px", display: 'flex', alignItems: 'center' }} ><Link to="/welcome">welcome</Link></Menu.Item>
                    <Menu.Item key="2" style={{ fontSize: '18px', height: "60px", display: 'flex', alignItems: 'center' }}><Link to="/projects">projects</Link></Menu.Item>
                    <Menu.Item key="3" style={{ fontSize: '18px', height: "60px", display: 'flex', alignItems: 'center' }}><Link to="/contact">contact</Link></Menu.Item>
                </Menu>
            </Sider>
            <Layout
            // style={{ background: '#001529' }}
            >
                {/* <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header> */}
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360 }}>
                        {props.children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}