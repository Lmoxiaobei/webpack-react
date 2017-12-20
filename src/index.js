// es6模块导入
import React from 'react'
// 这里的ReactDom是可以更换的，但是不建议更换
import ReactDom from 'react-dom'
// 模块导入App,然后导出到'./App.js'这个路径下面
import App from './App.js'
ReactDom.render(<App/>,document.getElementById('root'))
