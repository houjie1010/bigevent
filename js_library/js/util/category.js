//所有与文章分类相关的操作写在这里
//从后端调接口取出数据，显示在表格中
var category = {
    get: function() {
        return $.get(APILIST.category_get)
    },
    //添加文章分类
    add: function(name, slug) {
        return $.post(APILIST.category_add, { 'name': name, 'slug': slug })
    }
}