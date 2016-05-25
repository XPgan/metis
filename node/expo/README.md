<h1>用户信息系统(简易社交网络雏形)</h1>
<h5>express + mongodb + fs</h5>
<h6>呆恋小喵&nbsp;&nbsp;&nbsp;&nbsp;qq: 493108053&nbsp;&nbsp;&nbsp;&nbsp;欢迎参观: www.miaomie.tech</h6>

<h2>用户可在该系统注册并填写基本信息，且于个人页修改个人简介及用户头像。访问者可通过用户列表参观该站任一用户个人主页。</h2>
<h5>后续功能: 日记 评论 关注 点赞 推荐</h5>

<h3>结构</h3>
<ul>
    <li>
        <h4>首页&nbsp;&nbsp;<strong>'/'</strong></h4>
        <ul>
            <li><b>用户列表</b></li>
            <li><b>作者信息</b></li>
            <li><b>登录</b>&nbsp;&nbsp;<em>[user_name] [password]</em></li>
        </ul>
        <h6>注册入口&nbsp;&nbsp;<strong>'/register'</strong></h6>
        <h6>个人页入口(已登录)&nbsp;&nbsp;<strong>'/profile/:id'</strong></h6>
        <h6>切换账号(已登录)</h6>
    </li>
    <li>
        <h4>注册页&nbsp;&nbsp;<strong>'/register'</strong></h4>
        <ul>
            <li><b>注册</b>&nbsp;&nbsp;<em>[user_name] [password] [sex] [tel] [qq] [intro]</em></li>
        </ul>
    </li>
    <li>
        <h4>用户主页&nbsp;&nbsp;<strong>'/profile/:id'</strong></h4>
        <ul>
            <li><b>个人信息</b></li>
        </ul>
        <h6>注销(个人视角)</h6>
        <h6>退出登录(个人视角)</h6>
        <h6>信息修改(个人视角)</h6>
    </li>
</ul>

<h3>核心功能</h3>
<ul>
    <li>
        <h4>log&nbsp;&nbsp;<strong>'modules/log.js'</strong></h4>
        <ul>
            <li>登录&nbsp;&nbsp;<strong>log.login()</strong></li>
            <li>注册&nbsp;&nbsp;<strong>log.register()</strong></li>
            <li>注销&nbsp;&nbsp;<strong>log.logout()</strong></li>
            <li>退出&nbsp;&nbsp;<strong>log.exit()</strong></li>
        </ul>
    </li>
    <li>
        <h4>edit&nbsp;&nbsp;<strong>'modules/edit-info.js'</strong></h4>
        <ul>
            <li>基本信息&nbsp;&nbsp;<strong>edit.do()</strong></li>
            <li>用户头像&nbsp;&nbsp;<strong>edit.portrait()</strong></li>
        </ul>
    </li>
</ul>