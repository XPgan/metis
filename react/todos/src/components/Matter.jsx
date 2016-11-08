import React from 'react'
import storage from '../storage'

var Matter = React.createClass({
    render () {
        return (
            <li className={this.state.status} onClick={this.switchStatus}><span></span>{this.state.content}<em className="c-hidden">删除</em></li>
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
    }
});

export default Matter;
