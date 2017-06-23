Page({
  data: {
    curTab: 'glass',
    curOption: {
      glass: 'glass1',
      layer: 'layer1',
      color: '',
      fruit: ''
    },
    color: {
      colorStyle: [20, 150],
      glass1: [20, 150],
      glass2: [30, 190],
      glass3: [27, 70]
    },
    layer: {
      layer1: [0, 1],
      layer2: [0, 0.67, 1],
      layer3: [0, 0.5, 0.75, 1],
      layer4: [0, 0.5, 1],
      layer5: [0, 0.25, 1],
      layer6: [0, 0.33, 0.66, 1]
    },
    fruit: {
      fruitPosition: [],
      glass1: {
        fruit1: [67, 78],
        fruit2: [65, 78],
        fruit3: [65, 85],
        fruit4: [58, 80],
        fruit5: [63, 87],
        fruit6: [60, 75]
      },
      glass2: {
        fruit1: [35, 70],
        fruit2: [30, 70],
        fruit3: [30, 75],
        fruit4: [23, 70],
        fruit5: [30, 80],
        fruit6: [25, 70]
      },
      glass3: {
        fruit1: [142, 78],
        fruit2: [140, 78],
        fruit3: [140, 84],
        fruit4: [133, 78],
        fruit5: [138, 86],
        fruit6: [135, 72]
      }
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
        var fruitPosition = this.data.fruit[option][this.data.curOption.fruit];
        var colorStyle = this.data.color[option];
        this.setData({
          'curOption.glass': option
        });
        this.setData({
          'fruit.fruitPosition': fruitPosition
        }); 
        this.setData({
          'color.colorStyle': colorStyle
        }); 
        break;
      case 'fruit':
        var fruitPosition = this.data.fruit[this.data.curOption.glass][option];
        this.setData({
          'curOption.fruit': option
        }); 
        this.setData({
          'fruit.fruitPosition': fruitPosition
        }); 
        break; 
      case 'color':

        break;  
    }
  }
});