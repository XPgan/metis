import React from 'react'
import storage from '../storage'

var Matter = React.createClass({
    render () {
        return (
            <li className={this.state.status}><span onClick={this.switchStatus}></span>{this.state.content}<em className="c-hidden" onClick={this.deleteTodo}>删除</em></li>
        );
    },
    getInitialState () {
        return this.props.info
    },
    switchStatus () {
        let index = this.state.index;
        let status = (this.state.status == 'done') ? 'todo' : 'done';
        let todos = storage.get();
        todos[index].status = status;
        storage.update(todos);
        this.setState({
            status: status
        });
    },
    deleteTodo (obj) {
        let target = obj.nativeEvent.target;
        let index = this.state.index;
        let todos = storage.get();
        todos.splice(index, 1);
        storage.update(todos);
        target.parentElement.remove();
    }
});

export default Matter;
