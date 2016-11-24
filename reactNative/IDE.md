## 搭建开发环境 ##

__目标平台：Android__

__开发平台：MacOS__

*****

+ 安装 Node [下载地址](https://nodejs.org/en/)

+ 安装 Npm

    ```bash
    curl -L https://npmjs.com/install.sh | sh
    ```

+ 安装 React Native 命令行工具

    ```bash
    npm install react-native-cli -g
    ```

+ 安装 JDK [下载地址](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

+ 安装 Android Studio [下载地址](http://www.android-studio.org/)

    1. 选择 Custom
    
    2. 勾选 Performance、Android Virtual Device
    
    3. 选择 Configure | SDK Manager
    
        1. 选择 SDK Platforms -> 勾选 Show Package Details -> 勾选 Android 6.0 (Marshmallow) 中 Google APIs、Android SDK Platform 23、Intel x86 Atom System Image、Intel x86 Atom_64 System Image、Google APIs Intel x86 Atom_64 System Image
        
        2. 选择 SDK Tools -> 勾选 Show Package Details -> 勾选 Android SDK Build Tools 中 Android SDK Build-Tools 23.0.1
        
+ 设置环境变量

    ```bash
    # 创建 .bash_profile 文件并编辑
    sudo vi ~/.bash_profile   
    
    # .bash_profile 文件添加如下两行
    export ANDROID_HOME=~/Library/Android/sdk
    export PATH=~/Library/Android/sdk/platform-tools/:$PATH
    
    # 生效 .bash_profile 文件
    source ~/.bash_profile
    ```

+ 安装 VirtualBox [下载地址](https://www.virtualbox.org/wiki/Downloads)

+ 安装 Genymotion [下载地址](./genymotion.dmg.zip)

    1. 注册账号 [注册地址](https://www.genymotion.com/account/create/)
    
    2. 添加 Virtual Device
    
    3. 设置 ADB
    
        1. 选择 Use custom Android SDK tools -> 填写 /Users/用户名/Library/Android/sdk/
