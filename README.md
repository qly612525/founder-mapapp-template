# founder-mapapp-template

Maps APP Project Template for Research Center Team in Founder Co,Ltd


# 使用教程

## 如何开始项目coding
1. 使用**git**命令`git clone 项目仓库URL`克隆地图APP的项目模板
2. 基于项目需求**更改目录名**
3. 通过**CD**命令`cd 目录名`，进入项目
4. 运行**node**命令`npm install`，安装项目使用的外部依赖
5. 开始研发工作

## 地图项目模板环境命令
1. 开发模式：运行`npm start`
2. 生产模式：运行`npm run build`
3. 运行测试：运行`npm test`
4. 运行可测试服务（提供最新生产版本供调用）：运行`npm run test:server`

# 项目代码规范

## 源码目录结构说明
1. `templates`: 应用的布局工作，一个template对应一种APP界面
2. `views`: 包装无状态组件和数据流，可以理解为容器组件
3. `components`: UI组件，该组件不能涉及到任何状态
4. `stores`: 应用的数据流模型层，负责业务的代码

## css规范
项目模板遵循**BEM**--Block,Element,Modifier--模式来构建整个项目的样式系统。

规范声明：
"BE"之间的连接符号：`__`
"*M"之间的连接符号：`--`(表示块或者元素的状态)

例如：
登录窗口，其复杂度可以把它看做是一个块（block），所以，其样式系统关系如下：
```
.login-in
.login-in--warning
.login-in__title
.login-in-user
.login-in-user__label
.login-in-user__input
.login-in-password__label
.login-in-password__input
.login-in-submit--focus
.login-in-cancel--focus
```


