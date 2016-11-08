var storage = {
    init () {
        window.localStorage.setItem('todos', JSON.stringify([]));
    },
    get () {
        let todos = window.localStorage.getItem('todos');
        return JSON.parse(todos);
    },
    set (value) {
        let todos = this.get();
        let item = {
            content: value,
            status: 'todo'
        };
        todos.push(item);
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }
}
storage.get() || storage.init();

export default storage;
