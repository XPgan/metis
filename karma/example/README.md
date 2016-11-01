1. 全局安装 karma、karma-cli
    
    ```bash
    npm install karma -g
    
    npm install karma-cli -g
    ```
    
2. 创建项目
    
    ```bash
    mkdir example
    ```

3. 创建 package.json
    
    ```bash
    npm init
    ```
    
    ```json
    {
        "name": "karma-example",
        "version": "1.0.0",
        "description": "学习如何使用 karma",
        "scripts": {
            "test": "karma start ./karma/karma.conf.js",
            "coverage": "cd ./coverage/*/. && open -a '/Applications/Google Chrome.app' 'index.html'"
        },
        "author": "sunmy",
        "license": "ISC",
        "dependencies": {
            "karma": "~1.3.0",
            "karma-cli": "~1.0.1",
            "karma-jasmine": "~1.0.2",
            "karma-coverage": "~1.1.1",
            "karma-chrome-launcher": "~2.0.0",
            "jasmine-core": "~2.5.2"
        }
    }
    ```

4. 创建 src (源文件)、test (测试文件)

5. 创建 karma.conf.js

    ```bash
    mkdir karma
    
    cd karma
    
    karma init
    ```
    
    ```javascript
    var karmaJasmine = require('karma-jasmine');
    var karmaCoverage = require('karma-coverage');
    var karmaChromeLauncher = require('karma-chrome-launcher');
    var jasmineCore = require('jasmine-core');
    
    module.exports = function (config) {
        config.set({    
            basePath: '',               
            frameworks: ['jasmine'],
            files: [
                '../src/*.js',
                '../test/*.js'
            ],
            exclude: [],
            preprocessors: {'../src/*.js': 'coverage'},
            reporters: ['progress', 'coverage'],
            port: 9876,
            colors: true,
            logLevel: config.LOG_INFO,
            autoWatch: true,
            browsers: ['Chrome'],
            singleRun: false,
            concurrency: Infinity,
            coverageReporter: {
                type: 'html',
                dir: '../coverage/'
            },
            plugins: [
                karmaJasmine,
                karmaCoverage,
                karmaChromeLauncher,
                jasmineCore
            ]
        })
    }
    ```

*****

```bash
# 安装依赖
npm install

# 启动自动化测试
npm run test

# 查看覆盖率报告
npm run coverage
```
