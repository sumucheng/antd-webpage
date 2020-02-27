export default {
    base: 'http://http://chenyiran.top/antd-webpage',
    singular: true,
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: './Welcome'
            },
            {
                path: '/welcome',
                component: 'Welcome'
            },
            {
                path: '/contact',
                component: 'Contact'
            },
            {
                path: '/projects',
                component: 'Projects'
            },
        ]
    }],

    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
    ],
}