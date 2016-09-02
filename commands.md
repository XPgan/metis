### Git ###

+ __merge__

    ```linux
    git merge --no-ff $branch_name
    ```

+ __reset__

    ```linux
    git reset --hard origin/$branch_name
    ```

*****    
  
### 插件安装 ###

+ __npm__

    ```linux
    curl -L https://npmjs.com/install.sh | sh
    ```

+ __express__

    ```linux
    npm install -g express-generator
    ```

*****
   
### 常用操作 ###

+ shut

    + __process__
    
        ```linux
        lsof -i: $port
        kill $id
        ```

    + __redis__
    
        ```linux
        redis-cli
        shutdown
        exit
        ```   

+ search

    ```linux
    find . -name $pattern
    ```   