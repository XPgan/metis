Page({
  data: {
    loadingPercent: 0
  },
  onReady: function () {
    this.updateLoadingPercent();
  }, 
  createRandom: function (mix, max) {
    var random = Math.ceil(Math.random() * (max - mix)) + mix;
    return random;
  },
  updateLoadingPercent: function () {
    var _this = this;
    var interval = setInterval(function () {
      var random = _this.createRandom(5, 15);
      var percent = (_this.data.loadingPercent + random >= 100) ? 100 : (_this.data.loadingPercent + random);
      (percent == 100) && clearInterval(interval);
      _this.setData({
        loadingPercent: percent
      });
    }, 500);
  }
});