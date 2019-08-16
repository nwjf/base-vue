项目介绍
---------------------------


## 框架说明

使用vue-cli 3.10.0搭建

## 命令说明

```shel
# 下载依赖包
npm i
# or
npm install

# 运行项目
npm run serve
```

## 项目目录

> 大致目录，自己再写
```shel
|-- public
|-- src
|   |-- assets                      # 静态资源
|       |-- images
|       |-- css
|           |-- common.css          # 样式重置，可能不足，自行添加
|   |-- config
|       |-- apiConfig.js            # base url地址目录
|       |-- request.js              # 请求模块
|   |-- conponents                  # 组件目录
|   |-- router                      # vue-router 文件
|   |-- store                       # store状态库文件
|   |-- views                       # 视图目录
|   |-- app.vue
|   |-- main.js
|-- postcss.config.js
|-- babel.config.js
|-- package.json
```


## 屏幕适配

使用vw适配做适配
使用postcss-px-to-viewprot插件
插件配置目录 /postcss.config.js
默认配置750设计稿，

使用方法
直接按照750设计图尺寸写css就可以

如input设计图为300px
input {
    width: 300px;
}


## css 预编译

css预编译默认设置为less，
less具体使用自己学习

## request 网络请求


request 使用axios进行封装，

目前没有封装 响应拦截，自己添加

**目前没有添加到vue实例上需要单独引入，请自行添加**

使用方法

```js
request({
    method: 'get',
    url: '',
    data: {}
})
.then(res => {})
.catch(err => {})
```