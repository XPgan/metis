# 数据可视化 #

### #启动方法 ###

```bash
# 安装 npm
curl -L https://npmjs.com/install.sh | sh

# 全局安装 webpack
npm install webpack -g

# 安装依赖包
cd visualization
npm install

# 启动本地服务器 (端口号: 8000)
npm run dev

# 打包项目
npm run build
```

*****

### #目录结构 ###

```
│
└──── build (打包文件)
│
└──── src (源文件)
│        │
│        └──── control.js (定义鼠标及键盘操作行为)
│        │
│        └──── sketch.js (三维场景绘制)
│        │
│        └──── index.html
│
└──── entry.js (入口文件)
│
└──── webpack.config.js (webpack 配置文件)
│
└──── package.json (npm 配置文件)
│
└──── .babelrc
│
└──── .editorconfig
│
└──── .gitignore
```
