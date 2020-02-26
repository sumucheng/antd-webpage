import { Card } from 'antd';
import projects from '../data/index'
export default () => {
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "45px",
        // backgroundColor: '#ECECEC',
        padding: '35px'
    }
    return (
        <div style={gridStyle}>
            {projects.map(project =>
                <Card
                    title={project.displayName}
                    extra={<a target="_black" href={project.url}>More</a>}
                    key={project.name}
                    cover={<img alt={project.name} src={project.image} style={{ margin: "5px auto", height: "200px", width: "200px" }} />}
                >
                    <p>{project.detail}</p>
                </Card>
            )}
        </div>

    )
}