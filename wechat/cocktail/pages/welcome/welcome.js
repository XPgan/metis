Page({
  data: {
    triggerStart: false
  },
  handleStart: function () {
    this.setData({
      triggerStart: true
    });
    var timeout = setTimeout(function () {
      wx.navigateTo({
        url: '../game/game'
      });
    }, 1300);
  }
});