### git ###
+ __merge__

    ```
    git merge --no-ff $branch_name
    ```
+ __reset__

    ```
    git reset --hard origin/$branch_name
    ```

*****    
  
### 插件安装 ###
+ __npm__

    ```
    curl -L https://npmjs.com/install.sh | sh
    ```
+ __express__

    ```
    npm install -g express-generator
    ```

*****
   
### 常用操作 ###    
+ shut
    + __process__
    
        ```
        lsof -i: $port
        kill $id
        ```
    + __redis__
    
        ```
        redis-cli
        shutdown
        exit
        ```   
+ search

    ```
    find . -name $pattern
    ```   