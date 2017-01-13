Page({
  data:{
    
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载

  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
      var post_contents = [
          {
              date: "Sep 5 2016",
              title: "第一篇文章！",
              imgSrc: "/images/post/1.png",
              avatar: "/images/avatar/1.png",
              content: "微信小程序正式上线 -  微信小程序今天凌晨正式上线。可通过扫二维码、搜索等方式体验小程序，只要将微信更新至最新版本，便可在发现页面看到小程序入口。此前有媒体分析称，小程序的入口更多在线下，即用户通过扫描二维码启动。",
              reading: "99+",
              collection: "38"
          },
          {
              date: "Fab 11 2016",
              title: "第二篇文章！",
              imgSrc: "/images/post/2.jpeg",
              avatar: "/images/avatar/2.png",
              content: "微信小程序正式上线 -  微信小程序今天凌晨正式上线。可通过扫二维码、搜索等方式体验小程序，只要将微信更新至最新版本，便可在发现页面看到小程序入口。此前有媒体分析称，小程序的入口更多在线下，即用户通过扫描二维码启动。",
              reading: "99+",
              collection: "66"
          },
          {
              date: "Jan 15 2017",
              title: "第三篇文章！",
              imgSrc: "/images/post/3.jpg",
              avatar: "/images/avatar/3.png",
              content: "微信小程序正式上线 -  微信小程序今天凌晨正式上线。可通过扫二维码、搜索等方式体验小程序，只要将微信更新至最新版本，便可在发现页面看到小程序入口。此前有媒体分析称，小程序的入口更多在线下，即用户通过扫描二维码启动。",
              reading: "99+",
              collection: "38"
          },
          {
              date: "Sep 5 2016",
              title: "第四篇文章！",
              imgSrc: "/images/post/4.jpg",
              avatar: "/images/avatar/4.png",
              content: "微信小程序正式上线 -  微信小程序今天凌晨正式上线。可通过扫二维码、搜索等方式体验小程序，只要将微信更新至最新版本，便可在发现页面看到小程序入口。此前有媒体分析称，小程序的入口更多在线下，即用户通过扫描二维码启动。",
              reading: "99+",
              collection: "38"
          },
          {
              date: "Sep 5 2016",
              title: "第五篇文章！",
              imgSrc: "/images/post/5.jpg",
              avatar: "/images/avatar/5.png",
              content: "微信小程序正式上线 -  微信小程序今天凌晨正式上线。可通过扫二维码、搜索等方式体验小程序，只要将微信更新至最新版本，便可在发现页面看到小程序入口。此前有媒体分析称，小程序的入口更多在线下，即用户通过扫描二维码启动。",
              reading: "99+",
              collection: "38"
          }
      ];

      this.setData({
          post_key: post_contents
      });
  },
  onShow:function(){
    // 生命周期函数--监听页面显示

  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏

  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数

  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
});