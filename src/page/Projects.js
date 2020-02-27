import { Card, Tabs, Icon } from 'antd';
import projects from '../data/index'
const { TabPane } = Tabs;

const CardGird = (props) => {
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "45px",
        // backgroundColor: '#ECECEC',
        padding: '35px'
    }
    return (
        <div style={gridStyle}>
            {props.dataSource.map(project =>
                <Card
                    title={project.star ? <span>{project.displayName}  <Icon type="star" theme="twoTone" /></span> : project.displayName}
                    key={project.name}
                    bordered={false}
                    actions={[
                        <a target="_black" href={project.url}>效果</a>,
                        <a target="_black" href={project.code}>源码</a>
                    ]}
                    cover={<img alt={project.name} src={project.image} style={{ margin: "5px auto", height: "200px", width: "200px" }} />}
                >
                    <p style={{ height: "90px" }}>{project.detail}</p>
                </Card>
            )}
        </div>
    )
}
export default () => {
    return (
        <Tabs defaultActiveKey="1" style={{ margin: "20px" }}>
            <TabPane
                tab={<span>Vue</span>}
                key="1"
            >
                <CardGird dataSource={projects.vue} />
            </TabPane>
            <TabPane
                tab={<span>React</span>}
                key="2"
            >
                <CardGird dataSource={projects.react} />
            </TabPane>
            <TabPane
                tab={<span>Vanilla JS</span>}
                key="3"
            >
                <CardGird dataSource={projects.js} />
            </TabPane>
        </Tabs >
    )
}