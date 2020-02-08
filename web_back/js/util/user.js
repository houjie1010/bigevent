    //用户模块优化
    var user = {
        login: function(name, password) {
            //2. 请求ajax接口， 根据接口的反馈做后续的动作
            //$.post(url,数据).then(回调)
            //接口地址优化
            //('http://192.168.1.110:8000/admin/login) 
            $.post(APILIST.user_login, {
                    user_name: name,
                    password: password
                },
                function(res) {
                    if (res.code === 200) {
                        // alert('登录成功') //测试
                        // 跳到主页
                        window.location.href = "./index.html"
                    } else {
                        //失败，提示错别信息
                        alert(res.msg)
                    }
                }
            )
        },
        //用户退出语义话
        logout: function() {
            //请求退出接口
            //接口地址优化
            //('http://192.168.1.110:8000/admin/logout') 
            $.post(APILIST.user_logout).then(function(res) {
                console.log(res);
                //判断是否退出成功
                if (res.code === 200) {
                    alert('成功退出')
                    window.location.href = "./login.html"
                } else {
                    alert(res.msg)
                }
            })
        },
        // //获取用户信息语义话
        // getInfo: function() {
        //     //接口地址优化
        //     //('http://192.168.1.110:8000/admin/getuser') 
        //     $.get(APILIST.user_getInfo).then(function(res) {
        //         console.log(res);
        //         //判断
        //         if (res.code === 200) {
        //             //获取用户名信息
        //             $('#userName').text(res.data.nickname)
        //                 //获取用户头像
        //             $('.userImg').attr('src', res.data.user_pic)
        //         }
        //     })
        // }
        // //获取用户信息语义话
        getInfo: function() {
            return $.get(APILIST.user_getInfo)
        }
    }