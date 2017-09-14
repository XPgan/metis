var method = require('./method');
var material = require('./material');

module.exports = {
    id: function () {
        return (new Date()).valueOf();
    },
    number: function (opt) {
        return method.random(opt && opt.min, opt && opt.max);
    },
    bool: function () {
        return [true, false][method.random(0, 1)];
    },
    string: function (opt) {
        var result = '';
        if ((opt instanceof Array) && opt.length) {
            result = opt[method.random(0, opt.length - 1)];
        } else {
            for (var i = 0;i < method.random(opt && opt.minL, opt && opt.maxL);i++) {
                result += String.fromCharCode(20000 + parseInt(Math.random() * 1000));
            }
        }
        return result;
    },
    image: function (opt) {
        var result = '';
        if ((opt instanceof Array) && opt.length) {
            result = opt[method.random(0, opt.length - 1)];
        } else {
            result = material.image[method.random(0, material.image.length - 1)] + (opt && opt.type || '-half');
        }
        return result;
    },
    list: function (opt) {
        var result = [];
        var index_name = opt.index && opt.index.name;
        for (var i = 0;i < opt.length;i++) {
            var item = opt.value();
            var index = (i + 1).toString();
            if (index_name) {
                switch (opt.index.format) {
                    case '\d':
                        switch (opt.index.type) {
                            case 'int':
                                item[index_name] = i + 1;
                                break;
                            case 'string':
                                item[index_name] = index;
                                break;
                            default:
                                item[index_name] = i + 1;
                                break;
                        }
                        break;
                    case '0\d':
                        item[index_name] = (index < 10) ? '0' + index : index;
                        break;
                    case '00\d':
                        if (index < 10) {
                            item[index_name] = '00' + index;
                        } else if (index < 100) {
                            item[index_name] = '0' + index;
                        } else {
                            item[index_name] = index;
                        }
                        break;
                    default:
                        item[index_name] = index;
                        break;
                }
            }
            result.push(item);
        }
        return result;
    },
    richtext: function () {
        return material.richtext[method.random(0, material.richtext.length - 1)];
    },
    richtext_mixed: function () {
        return material.richtext_mixed[method.random(0, material.richtext_mixed.length - 1)];
    }
}