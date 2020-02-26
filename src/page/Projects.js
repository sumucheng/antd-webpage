import { Card } from 'antd';
export default () => {
    const projects = [
        { name: 'calculator', displayName: '计算器', image: require("../img/calculator.png"), url: "http://chenyiran.top/react-calculator/build/index.html" },
        { name: 'pomodoro', displayName: '番茄钟', image: require("../img/pomodoro.png"), url: "http://chenyiran.top/react-pomodoro/build/index.html" },
        { name: 'tictactoe', displayName: '井字棋', image: require("../img/tictactoe.png"), url: "http://chenyiran.top/tic-tac-toe/build/index.html" },
        { name: 'react', displayName: 'React文档知识点示例', image: require("../img/react.png"), url: "http://chenyiran.top/React-Docs-examples/build/index.html" },
        { name: 'vue', displayName: 'Vue文档知识点示例', image: require("../img/vue.png"), url: "http://chenyiran.top/Vue-Docs-Examples/dist/index.html" },
        { name: 'sketch', displayName: 'canvas小画板', image: require("../img/sketch.png"), url: "http://chenyiran.top/sketchpad-demo/" },
    ]
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "45px",
        // backgroundColor: '#ECECEC',
        padding: '45px'
    }
    return (
        <div style={gridStyle}>
            {projects.map(project =>
                <Card title={project.displayName}
                    extra={<a href={project.url}>More</a>}
                    key={project.name}
                    cover={<img alt={project.name} src={project.image} style={{ margin: "5px auto", height: "200px", width: "200px" }} />}
                >
                    <p>{project.name}</p>
                </Card>
            )}
        </div>

    )
}