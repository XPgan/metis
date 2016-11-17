import React from 'react'
import storage from '../storage'

var Matters = React.createClass({
    render () {
        var _this = this;
        return (
            <ul className="todos-lst">
                {
                    _this.props.todos.map(function (info, index) {
                        return (
                            <li className={info.status} data-index={index}>
                                <span onClick={_this.switchStatus}></span>
                                {info.content}
                                <span className="c-hidden" onClick={_this.deleteTodo}>删除</span>
                            </li>
                        );
                    })
                }
            </ul>
        );
    },
    switchStatus (obj) {
        var event = obj.nativeEvent;
        var index = event.target.parentElement.getAttribute('data-index');
        var todos = this.props.todos;
        var target = todos[index];
        var status = (target.status == 'done') ? 'todo' : 'done';
        todos[index].status = status;
        this.setProps({
            todos: todos
        });
        storage.update(todos);
    },
    deleteTodo (obj) {
        // let target = obj.nativeEvent.target;
        // let index = this.state.index;
        // let todos = storage.get();
        // todos.splice(index, 1);
        // storage.update(todos);
        // target.parentElement.remove();
    }
});

export default Matters;