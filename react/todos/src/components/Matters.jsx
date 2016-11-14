import React from 'react'
import storage from '../storage'

var Matters = React.createClass({
    render () {
        var _this = this;
        return (
            <ul className="todos-lst">
                {
                    _this.props.todos.map(function (info) {
                        <li className={info.status}>
                            <span onClick={_this.switchStatus}></span>
                            {info.content}
                            <span className="c-hidden"
                                  onClick={_this.deleteTodo}>删除</span>
                        </li>
                    })
                }
            </ul>
        );
    },
    switchStatus () {
        // let index = this.state.index;
        // let status = (this.state.status == 'done') ? 'todo' : 'done';
        // let todos = this.props.todos;
        // todos[index].status = status;
        // storage.update(todos);
        // this.setState({
        //     status: status
        // });
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
