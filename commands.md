+ __shut__
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
+ __search__    

    ```
    find . -name $pattern
    ```

*****

+ __git__

    ```
    git merge --no-ff $branch_name
    ```
    ```
    git reset --hard origin / $branch_name
    ```

*****    
    
+ _插件安装_
    + __npm__
    
        ```
        curl -L https://npmjs.com/install.sh | sh
        ```
    + __express__
    
        ```
        npm install -g express-generator
        ```