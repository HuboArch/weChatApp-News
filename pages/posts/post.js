var postsData = require('../../data/posts-data');

Page({
    postDetail: function (event) {
        var postId = event.currentTarget.dataset.postId;

        wx.navigateTo({
            url: './post-detail/post-detail?id=' + postId
        });
    },
    onReady: function () {
        // 生命周期函数--监听页面初次渲染完成
        this.setData({
            post_key: postsData.postList
        });
    }
});