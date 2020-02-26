import { Descriptions } from 'antd';
export default () => {
    const contact = [
        { name: 'name', displayName: "姓名", content: '陈一然' },
        { name: 'education', displayName: "学历", content: '硕士' },
        { name: 'school', displayName: "毕业院校", content: '华东师范大学' },
        { name: 'major', displayName: "专业", content: '计算机技术' },
        { name: 'email', displayName: "邮箱", content: '772765729@qq.com' },
        { name: 'phone', displayName: "电话", content: '173-1782-4743' },
        { name: 'github', displayName: "GitHub", url: "https://github.com/sumucheng" },
    ]
    return (
        <Descriptions bordered title="Info" style={{ backgroundColor: 'white', padding: '20px' }} >
            {contact.map(item =>
                <Descriptions.Item key={item.name} label={item.name} >
                    {item.content ? <div>{item.content}</div> : <a href={item.url} target="_blank" >{item.displayName}</a>}
                </Descriptions.Item>
            )}
        </Descriptions>
    )
}