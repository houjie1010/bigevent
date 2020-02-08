//配置文件
//定义一个变量 把项目 所有用到的接口地址放在这里
//所有接口的基地址,以便更改
var BASEURL = 'http://192.168.1.110:8000'
    //保存接口信息
var APILIST = {
    user_login: BASEURL + '/admin/login',
    user_logout: BASEURL + '/admin/logout',
    user_getInfo: BASEURL + '/admin/getuser'
}