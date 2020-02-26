import { Descriptions } from 'antd';
export default () => {
    const contact = [
        { name: 'github', displayName: "GitHub", url: "https://github.com/sumucheng" },
        { name: 'email', displayName: "Email", content: '772765729@qq.com' },
        { name: 'phone', displayName: "Call", content: '173-1782-4743' },
    ]
    return (
        <Descriptions layout="vertical" style={{ backgroundColor: 'white', padding: '20px' }} >
            {contact.map(item =>
                <Descriptions.Item key={item.name} label={item.name} >
                    {item.content ? <div>{item.content}</div> : <a href={item.url} target="_blank" >{item.displayName}</a>}
                </Descriptions.Item>
            )}
        </Descriptions>
    )
}