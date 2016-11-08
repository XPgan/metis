var storage = {
    update (result) {
        window.localStorage.setItem('todos', JSON.stringify(result));
    },
    get () {
        let todos = window.localStorage.getItem('todos');
        return JSON.parse(todos);
    }
}
storage.get() || storage.update([]);

export default storage;
