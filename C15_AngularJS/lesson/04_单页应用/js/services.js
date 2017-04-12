angular.module('myApp')
    .factory('UserService', [function () {
        var userList = [
            { 'userId' : 1001, userName : '李达康', userAge : 18 },
            { 'userId' : 1002, userName : '高玉良', userAge : 20 },
            { 'userId' : 1003, userName : '祁同伟', userAge : 16 },
            { 'userId' : 1004, userName : '侯亮平', userAge : 22 },
            { 'userId' : 1005, userName : '白百何', userAge : 33 }
        ]
        return {
            // 获取用户列表的接口
            getUserList : function () {
                return userList;
            },
            // 查看个人详情信息接口（根据用户 ID 去查）
            getUserInfoDetail : function (userId) {
                for (var tempUser of userList) {
                    if (tempUser.userId == userId) {
                        return tempUser;
                    }
                }
                // 若查询不到，直接返回空
                return null;
            }
        }
    }])
