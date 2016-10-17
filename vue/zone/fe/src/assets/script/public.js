export default {
    clearObj (obj, lst, key) {
        for (var i in lst) {
            key ? obj[lst[i]][key] = '' : obj[lst[i]] = ''
        }
    },
    toggleDialog (_this, opts) {
        var obj = _this[opts.action]
        var status = obj.show
        obj.message = ''
        obj.show = status ? 0 : 1

        this.clearObj(_this.$els, opts.clear, 'value')
    },
    fileAnalysis (_this, event, opts) {
        var fileReader = new window.FileReader()
        var file = event.target.files[0]

        _this[opts.action].formData.append(opts.key, file)

        fileReader.onload = function (e) {
            var fileData = e.target.result
            _this[opts.action][opts.key] = fileData
        }
        fileReader.readAsDataURL(file)
    },
    getRequest (_this, url, callback) {
        _this.$http.get(url)
            .then((res) => {
                var data = JSON.parse(res.data)
                data.status && callback(data)
            })
    },
    postRequest (_this, opts, callback) {
        _this.$http.post(opts.url, opts.body)
            .then((res) => {
                var data = JSON.parse(res.data)
                if (data.status) {
                    callback(data)
                } else {
                    _this[opts.action].message = data.message
                }
            }, () => {
                _this[opts.action].message = '网络错误'
            })
    }
}
