import Mock from 'mockjs';
var Random=Mock.Random;
var data=Mock.mock("http://www.baidu.com/test/",{
    'list|10':[
        {
            'id|+1':1,
            'name':'@cname',
            'date':'@date("yyyy-MM-dd")',
            'image':'@image("200x200")'
        }
    ]
})
export default data;