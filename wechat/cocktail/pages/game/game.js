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
      trigger: false,
      placeholder: {
        cur: [30, 135],
        glass1: [30, 135],
        glass2: [40, 170],
        glass3: [28, 65]
      },
      gradient: '',
      colors: [],
      color1: 'red',
      color2: 'blue',
      color3: 'pink',
      color4: 'yellow',
      color5: 'green',
      color6: 'orange'
    },
    layer: {
      layer1: [0, 1],
      layer2: [0, 0.33, 1],
      layer3: [0, 0.25, 0.5, 1],
      layer4: [0, 0.5, 1],
      layer5: [0, 0.75, 1],
      layer6: [0, 0.33, 0.66, 1]
    },
    fruit: {
      position: [],
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
        var colorPlaceholder = this.data.color.placeholder[option];
        this.setData({
          'curOption.glass': option
        });
        this.setData({
          'fruit.position': fruitPosition
        }); 
        this.setData({
          'color.placeholder.cur': colorPlaceholder
        }); 
        break;
      case 'fruit':
        var fruitPosition = this.data.fruit[this.data.curOption.glass][option];
        this.setData({
          'curOption.fruit': option
        }); 
        this.setData({
          'fruit.position': fruitPosition
        }); 
        break;
      case 'layer':
        this.data.color.trigger || this.setData({
          'curOption.layer': option
        }); 
        break;
      case 'color':
        var layerParams = this.data.layer[this.data.curOption.layer];
        var colors = this.data.color.colors;
        var colorLength = layerParams.length - 1;
        var color = this.data.color[option];
        var gradient = '';
        if (colors.length < colorLength) {
          colors.push(color);
          this.setData({
            'color.colors': colors
          }); 
        }
        for (var i = 0;i < colors.length;i++) {
          gradient += 'color-stop(' + layerParams[i] + ',' + colors[i] + '),color-stop(' + layerParams[i + 1] + ',' + colors[i] + '),';
        }
        if (colors.length < colorLength) {
          gradient += 'color-stop(' + layerParams[colors.length] + ',#fff),color-stop(1,#fff),';
        }
        this.setData({
          'color.gradient': gradient.slice(0, -1)
        }); 
        this.setData({
          'color.trigger': true
        }); 
        break;
    }
  },
  handleReset: function () {
    this.setData({
      'curOption.color': '',
      'curOption.fruit': '',
      'color.trigger': false,
      'color.gradient': '',
      'color.colors': []
    }); 
  }
});