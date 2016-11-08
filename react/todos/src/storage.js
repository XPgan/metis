var storage = {
    init () {
        window.localStorage.setItem('todos', []);
    },
    get () {
        let todos = window.localStorage.getItem('todos');
        return [
            {
                content: '事项一',
                status: 'todo'
            },
            {
                content: '事项二',
                status: 'done'
            }
        ];
    }
}
storage.init();

export default storage;
