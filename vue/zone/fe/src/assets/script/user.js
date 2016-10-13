export default {
    login (id) {
        window.localStorage.setItem('user', id)
    },
    exit () {
        window.localStorage.setItem('user', '')
    },
    current () {
        var current = window.localStorage.getItem('user')
        return current
    }
}
