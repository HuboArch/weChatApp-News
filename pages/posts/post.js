var postsData = require('../../data/posts-data');

Page({
    data: {},
    fun: function () {
        console.log('hello');
    },
    onReady: function () {
        // 生命周期函数--监听页面初次渲染完成
        this.setData({
            post_key: postsData.postList
        });
    }
});