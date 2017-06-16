### 插件安装 ###

+ __npm__

    ```bash
    curl -L https://npmjs.com/install.sh | sh
    ```

+ __express__

    ```bash
    npm install -g express-generator
    ```

*****
   
### 常用操作 ###

+ shut

    + __process__
    
        ```bash
        lsof -i: $port
        kill $id
        ```

    + __redis__
    
        ```bash
        redis-cli
        shutdown
        exit
        ```   