export default {
    react: [
        {
            name: 'webpage',
            displayName: '个人主页',
            image: require("../img/webpage.png"),
            code: 'https://github.com/sumucheng/antd-webpage',
            detail: '使用 React + Ant Design + umi 实现的个人主页'
        },
        {
            name: 'calculator',
            displayName: '计算器',
            image: require("../img/calculator.png"),
            url: "http://chenyiran.top/react-calculator/build/index.html",
            code: 'https://github.com/sumucheng/react-calculator',
            detail: '使用 React（Hook） 实现的简单计算器'
        },
        {
            name: 'pomodoro',
            displayName: '番茄钟',
            image: require("../img/pomodoro.jpg"),
            url: "http://chenyiran.top/react-pomodoro/build/index.html",
            code: "https://github.com/sumucheng/react-pomodoro",
            detail: '使用 React（Hook） 实现的番茄钟，可以实现计时、暂停、增减时间、统计今日番茄时间等功能'
        },
        {
            name: 'tictactoe',
            displayName: '井字棋',
            image: require("../img/tictactoe.png"),
            url: "http://chenyiran.top/tic-tac-toe/build/index.html",
            code: "https://github.com/sumucheng/tic-tac-toe",
            detail: "使用 React 实现的井字棋游戏"
        },
        {
            name: 'react',
            displayName: 'React文档知识点示例',
            image: require("../img/react.png"),
            url: "http://chenyiran.top/React-Docs-examples/build/index.html",
            detail: "实现 React 官方文档中的十个示例，知识点包括状态提升、受控组件、生命周期、Context、Hook等"
        },
    ],
    vue: [
        {
            name: 'account',
            star: true,
            displayName: '记账本',
            image: require("../img/account.jpg"),
            url: "http://chenyiran.top/account-book/#/statistics",
            code: 'https://github.com/sumucheng/vue-bill',
            detail: '使用 Vue2 + TypeScript3 + SCSS + Vuex3 + Vue Router3 实现的记账软件，使用 LocalStorage 作为本地数据库，统计图表使用阿里的 AntV G2 可视化引擎完成，功能包括记账、查看流水、查看统计、标签管理、年账单、预算管理等'
        },
        {
            name: 'vue',
            displayName: 'Vue文档知识点示例',
            image: require("../img/vue.png"),
            url: "http://chenyiran.top/Vue-Docs-Examples/dist/index.html",
            detail: "实现 Vue 官方文档中的六个示例，知识点包括计算属性、v-model、自定义事件等"
        },
        {
            name: 'tictactoe',
            displayName: '井字棋',
            image: require("../img/tictactoe.png"),
            url: "http://chenyiran.top/vue-tic-tac-toe/dist/index.html",
            code: "https://github.com/sumucheng/vue-tic-tac-toe",
            detail: "使用 vue 实现的井字棋游戏"
        },
    ],
    js: [
        {
            name: 'sketch',
            displayName: 'canvas小画板',
            image: require("../img/sketch.png"),
            url: "http://chenyiran.top/sketchpad-demo/",
            code: "https://github.com/sumucheng/sketchpad-demo",
            detail: '使用canvas实现的小画板，可以实现绘图、擦除、清空画板、更改画笔粗细和颜色等功能'
        },
    ]
}