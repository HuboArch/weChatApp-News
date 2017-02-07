var postData = require("../../../data/posts-data");

Page({
    data: {
        isPlayingMusic: false
    },
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
    },

    onShareTap: function (event) {
        var itemList = ["分享到微信好友", "分享到QQ空间", "分享到 Twitter", "分享到新浪微博"];

        wx.showActionSheet({
            itemList: itemList,
            itemColor: '#405f80',
            success: function (res) {
                // res.tapIndex 点击索引
                // red.cancel 点击取消
                // 此处可以调用 wx.showModal 出现模态框，但由于小程序无法分享，所以这里就不写了 ^-^
                // 算了，还是写上吧
                wx.showModal({
                    title: '把文章' + itemList[res.tapIndex],
                    content: 'share, or cancel, this a question！'
                });
            }
        });
    },

    onMusicTap: function (event) {
        var finder = this.data.isPlayingMusic;

        if (finder) {
            wx.pauseBackgroundAudio();

            // this.data.isPlayingMusic = false;
            // setData()可以更新到 UI 视图层
            this.setData({
                isPlayingMusic: false
            });
        } else {
            wx.playBackgroundAudio({
                dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
                title: '此时此刻-许巍',
                coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
            });

            // this.data.isPlayingMusic = true;
            // setData()可以更新到 UI 视图层
            this.setData({
                isPlayingMusic: true
            });
        }
    }
});