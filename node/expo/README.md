<h1>简易微博系统</h1>
<h5>express + mongodb + fs (node.js 实例)</h5>
<h6>呆恋小喵&nbsp;&nbsp;&nbsp;&nbsp;qq: 493108053&nbsp;&nbsp;&nbsp;&nbsp;欢迎参观: www.miaomie.tech</h6>

<h2>用户注册本站后即可发布个人日记，并可粉丝他人、收藏他人日记帖</h2>
<h5>后续功能: 评论 关注 推荐</h5>

<h6>数据库: expo</h6>
<h6>数据表: users diaries</h6>

<h3>结构</h3>
<ul>
    <li>
        <h4>首页&nbsp;&nbsp;<strong>'/'</strong></h4>
        <ul>
            <li>达人列表</li>
            <li>精选日记列表</li>
            <li>作者信息</li>
            <li>登录&nbsp;&nbsp;<em>[user_name] [password]</em></li>
        </ul>
    </li>
    <li>
        <h4>注册页&nbsp;&nbsp;<strong>'/register'</strong></h4>
        <ul>
            <li>注册&nbsp;&nbsp;<em>[user_name] [password] [sex] [tel] [qq] [intro]</em></li>
        </ul>
    </li>
    <li>
        <h4>用户主页&nbsp;&nbsp;<strong>'/profile/:id'</strong></h4>
        <ul>
            <li>用户信息</li>
            <li>用户日记列表</li>
        </ul>
    </li>
    <li>
        <h4>发布日记页&nbsp;&nbsp;<strong>'/diary/publish'</strong></h4>
        <ul>
            <li>发布日记&nbsp;&nbsp;<em>[title] [content]</em></li>
        </ul>
    </li>
    <li>
        <h4>日记详情页&nbsp;&nbsp;<strong>'/diary/:id'</strong></h4>
        <ul>
            <li>作者信息</li>
            <li>日记详情</li>
        </ul>
    </li>
</ul>

<h3>模块</h3>
<ul>
    <li>
        <h4>log&nbsp;&nbsp;<strong>'modules/log.js'</strong></h4>
        <ul>
            <li>登录&nbsp;&nbsp;<strong>log.login()</strong></li>
            <li>注册&nbsp;&nbsp;<strong>log.register()</strong></li>
            <li>注销&nbsp;&nbsp;<strong>log.logout()</strong></li>
            <li>退出登录&nbsp;&nbsp;<strong>log.exit()</strong></li>
        </ul>
    </li>
    <li>
        <h4>find&nbsp;&nbsp;<strong>'modules/find.js'</strong></h4>
        <ul>
            <li>查询当前记录&nbsp;&nbsp;<strong>find.info()</strong></li>
            <li>查询所有记录&nbsp;&nbsp;<strong>find.all()</strong></li>
        </ul>
    </li>
    <li>
        <h4>diary&nbsp;&nbsp;<strong>'modules/diary.js'</strong></h4>
        <ul>
            <li>发布日记&nbsp;&nbsp;<strong>diary.publish()</strong></li>
            <li>编辑日记&nbsp;&nbsp;<strong>diary.edit()</strong></li>
            <li>移除日记&nbsp;&nbsp;<strong>diary.remove()</strong></li>
            <li>点赞日记&nbsp;&nbsp;<strong>diary.favour()</strong></li>
        </ul>
    </li>
    <li>
        <h4>user&nbsp;&nbsp;<strong>'modules/user.js'</strong></h4>
        <ul>
            <li>编辑用户信息&nbsp;&nbsp;<strong>user.edit()</strong></li>
            <li>关注用户&nbsp;&nbsp;<strong>user.attention()</strong></li>
        </ul>
    </li>
</ul>

<h3>目录</h3>
<ul>
    <li><h4>bin</h4></li>
    <li><h4>node_modules</h4></li>
    <li><h4>package.json</h4></li>
    <li><h4>app.js</h4></li>
    <li><h4>routes.js (路由)</h4></li>
    <li><h4>models.js (数据模型)</h4></li>
    <li>
        <h4>modules</h4>
        <ul>
            <li><h5>diary.js</h5></li>
            <li><h5>user.js</h5></li>
            <li><h5>log.js</h5></li>
            <li><h5>find.js (查询记录)</h5></li>
        </ul>
    </li>
    <li>
        <h4>views</h4>
        <ul>
            <li>
                <h5>templates</h5>
                <ul>
                    <li>index.ejs (首页)</li>
                    <li>register.ejs (注册页)</li>
                    <li>profile.ejs (用户主页)</li>
                    <li>diary.ejs (日记详情页)</li>
                    <li>publish.ejs (发布日记页)</li>                 
                </ul>
            </li>
            <li><h5>header.ejs</h5></li>
            <li><h5>footer.ejs</h5></li>
            <li><h5>message.ejs (信息页)</h5></li>
        </ul>
    </li>
    <li>
        <h4>public</h4>
        <ul>
            <li>
                <h5>css</h5>
                <ul>
                    <li>public.css (公用样式)</li>
                    <li>style.css</li>
                </ul>
            </li>
            <li>
                <h5>js</h5>
                <ul>
                    <li>main.js (公用脚本)</li>
                    <li>index.js</li>
                    <li>register.js</li>
                    <li>profile.js</li>
                    <li>diary.js</li>
                    <li>publish.js</li>
                </ul>
            </li>
            <li>
                <h5>images</h5>
                <ul>
                    <li>svg (矢量贴图)</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h4>upload (上传文件)</h4>
        <ul>
            <li><h5>portrait</h5></li>
        </ul>
    </li>
</ul>