var storage = {
    update (result) {
        window.localStorage.setItem('todos', JSON.stringify(result));
    },
    get () {
        let todos = window.localStorage.getItem('todos');
        return JSON.parse(todos);
    },
    set (value, status) {
        let todos = this.get();
        let item = {
            content: value,
            status: status
        };
        todos.push(item);
        this.update(todos);
    }
}
storage.get() || storage.update([]);

export default storage;
