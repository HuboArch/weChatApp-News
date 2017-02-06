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
        postsCollected[this.data.currentPostId] = postCollected;

        this.showToast(postsCollected, postCollected);
    },

    showToast: function (postsCollected, postCollected) {
        // 更新文章是否收藏的缓存值
        wx.setStorageSync('posts-collected', postsCollected);

        // 更新收藏状态图标
        this.setData({
            collected: postCollected
        });

        wx.showToast({
            title: postCollected ? "收藏成功" : "收藏失败"
        });
    }
});