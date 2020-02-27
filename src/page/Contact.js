import { Descriptions, List } from 'antd';
export default () => {
    const contact = [
        { name: 'email', displayName: "Email", content: '772765729@qq.com' },
        { name: 'phone', displayName: 'Phone', content: '173-1782-4743' },
        { name: 'github', displayName: "GitHub", url: "https://github.com/sumucheng" },
        { name: 'wechat', displayName: 'Wechat', image: require("../img/wechat.jpg"), }
    ]
    return (
        <Descriptions bordered title="Info" style={{ backgroundColor: 'white', padding: '20px' }} >
            {contact.map(item =>
                <Descriptions.Item span={3} key={item.name} label={item.displayName} >
                    {item.content && <div>{item.content}</div>}
                    {item.url && <a href={item.url} target="_blank" >{item.displayName}</a>}
                    {item.image && <img alt={item.name} src={item.image} height="150px" />}
                </Descriptions.Item>
            )}
        </Descriptions>
    )
}