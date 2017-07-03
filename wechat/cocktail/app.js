App({
  onLaunch: function (opts) {
    var _this = this;
    wx.getUserInfo({
      success: function (res) {
        _this.globalData.userName = res.userInfo.nickName;
      }
    });
  },
  onShow: function (opts) {

  },
  onHide: function () {

  },
  onError: function (msg) {
    
  },
  globalData: {
    userName: ''
  }
});