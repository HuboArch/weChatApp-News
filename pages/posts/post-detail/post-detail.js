var postData = require("../../../data/posts-data");

Page({
    onLoad: function (option) {
        var postId = option.id;
        var postsData = postData.postList[postId];

        this.data.post = postsData;
        this.data.currentPostId = postId;

        var postsCollected = wx.getStorageSync('posts-collected');

        if (postsCollected) {
            postsCollected = postsCollected[postId];

            this.setData({
                collected: postsCollected
            });
        } else {
            postsCollected = {};
            postsCollected[postId] = false;

            wx.setStorage('posts-collected', postsCollected)
        }
    },

    onReady: function () {
        this.setData(this.data);
    },

    onCollectionTap: function (event) {
        var postsCollected = wx.getStorageSync('posts-collected');
        var postCollected = postsCollected[this.data.currentPostId];

        postCollected = !postCollected;

        //小程序是单向数据绑定
        postsCollected[this.data.currentPostId] = postCollected;
        wx.setStorageSync('posts-collected', postsCollected);
        this.setData({
            collected: postCollected
        });
    }
});