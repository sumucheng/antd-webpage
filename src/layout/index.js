import { Layout, Menu } from 'antd';
import Link from 'umi/link';

const { Header, Footer, Content, Sider } = Layout;

export default function BasicLayout(props) {
    const menuItemStyle = {
        fontSize: '20px',
        height: "60px",
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#232323',
    }
    const siderStyle = {
        width: '256px',
        minHeight: '100vh',
        color: 'white',
        fontFamily: "Courier New,Courier,monospace",
        backgroundColor: '#232323',
        padding: '0 35px'
    }
    return (
        <Layout>
            <Sider style={siderStyle}>
                <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']}
                    style={{ backgroundColor: '#232323', height: "100vh", flexDirection: "column", display: 'flex', justifyContent: 'center' }}>
                    <Menu.Item key="1" style={menuItemStyle}><Link to="/welcome">welcome</Link></Menu.Item>
                    <Menu.Item key="2" style={menuItemStyle}><Link to="/projects">projects</Link></Menu.Item>
                    <Menu.Item key="3" style={menuItemStyle}><Link to="/contact">contact</Link></Menu.Item>
                </Menu>
            </Sider>
            <Layout
            // style={{ background: '#001529' }}
            >
                {/* <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header> */}
                <Content
                // style={{ margin: '24px 16px 0' }}
                >

                    {props.children}

                </Content>
            </Layout>
        </Layout>
    )
}