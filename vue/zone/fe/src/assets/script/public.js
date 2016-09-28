export default {
    toggleDialog (obj) {
        var status = obj.show
        obj.message = ''
        obj.show = status ? 0 : 1
    }
}
