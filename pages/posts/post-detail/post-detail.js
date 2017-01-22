var postData = require("../../../data/posts-data");

Page({
    onLoad: function (option) {
        var postId = option.id;
        var postsData = postData.postList[postId];

        this.data.post = postsData;
    },
    onReady: function () {
        this.setData(this.data);
    }
});