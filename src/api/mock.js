import Mock from 'mockjs';

//配置请求延迟
Mock.setup({
    timeout: 1000
})

// 直接使用字符串匹配路径，还可以使用正则匹配
// Mock.mock('/api/user', {
//     username: '老陈',
//     age: '18',
//     gender: '男',
//     type: '帅'
// })

// Mock.mock(/\/api\/user/igs, {
//     username: '老陈',
//     age: '18',
//     gender: '男',
//     type: '帅'
// })

Mock.mock(/\/api\/user/igs, {
    username: '老陈',
    "mtime": '@datetime',
    "score|1-800": 800,
    "rabj|1-100": 100,
    "nickname": "@cname",
    "address": "@url",
    "imgUrl": "@image",
    "email": "@email"

})
