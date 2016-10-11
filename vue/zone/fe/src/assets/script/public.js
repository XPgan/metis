export default {
    toggleDialog (obj) {
        var status = obj.show
        obj.message = ''
        obj.show = status ? 0 : 1
    },
    fileAnalysis (_this, event, opts) {
        var fileReader = new window.FileReader()
        var file = event.target.files[0]

        _this[opts.action].formData.append(opts.key, file)

        fileReader.onload = function (e) {
            var fileData = e.target.result
            _this.$els.upload.src = fileData
        }
        fileReader.readAsDataURL(file)
    },
    getRequest (_this, callback) {
        var hash = window.location.hash.slice(1)
        _this.$http.get(_this.serverHostUrl + hash)
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
