//配置文件
//定义一个变量 把项目 所有用到的接口地址放在这里
//所有接口的基地址,以便更改
var BASEURL = 'http://192.168.1.110:8000'
    //保存接口信息
var APILIST = {
    //用户登陆
    user_login: BASEURL + '/admin/login',
    //用户退出
    user_logout: BASEURL + '/admin/logout',
    //获取用户信息（头像用户名）
    user_getInfo: BASEURL + '/admin/getuser',
    //获取文章分类
    category_get: BASEURL + '/admin/category_search'
}