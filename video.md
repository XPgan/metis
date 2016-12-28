### 问题一：在点击【系统默认浏览器】的【默认视频播放器】的播放按钮时，部分设备自动调起全屏播放（暂不考虑微信、QQ、微博内情况）。

#### *具体现象 ####

+ Android 设备：部分自动调起全屏播放，部分使用内联播放。

+ IOS 设备：全部自动调起全屏播放。

#### *目标 ####

使所有设备的系统默认浏览器的默认视频播放器在被点击其播放按钮时，均不自动调起全屏播放即使用内联播放。

#### *方法调研 ####

+ 在 video 标签上添加 __webkit-playsinline 属性__

    结论：只适用于 IOS Safari（maybe IOS 6.0 以上）。

    <https://github.com/bfred-it/iphone-inline-video>

    ___在 video 标签上添加 playsinline 属性，去除 webkit 前缀___

    结论：只适用于 IOS 10 Safari

    <https://webkit.org/blog/6784/new-video-policies-for-ios/>

+ 
    
    