export default {
    current: window.localStorage.getItem('user'),

    login (id) {
        window.localStorage.setItem('user', id)
    },
    exit () {
        window.localStorage.setItem('user', '')
    }
}
