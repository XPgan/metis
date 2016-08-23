+ __shut__
    + process
    
        ```
        lsof -i: $port
        kill $id
        ```
    + redis
    
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
    + npm：`curl -L https://npmjs.com/install.sh | sh`
    + express：`npm install -g express-generator`