Page({
  data: {
    curTab: 'glass',
    curOption: {
      glass: 'glass1',
      layer: 'layer1',
      color: '',
      fruit: ''
    },
    color: [],
    layer: {
      layer1: [0, 1],
      layer2: [0, 0.67, 1],
      layer3: [0, 0.5, 0.75, 1],
      layer4: [0, 0.5, 1],
      layer5: [0, 0.25, 1],
      layer6: [0, 0.33, 0.66, 1]
    }
  },
  onReady: function () {
  
  },
  handleTab: function (e) {
    var curTab = e.target.dataset.tab;
    this.setData({
      curTab: curTab
    });
  },
  handleOption: function (e) {
    var option = e.target.dataset.option;
    switch (this.data.curTab) {
      case 'glass':
        this.setData({
          'curOption.glass': option
        });
        break;
      case 'fruit':
        this.setData({
          'curOption.fruit': option
        }); 
        break; 
    }
  }
});