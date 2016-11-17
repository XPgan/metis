import React from 'react'
import Matters from './components/Matters.jsx'
import storage from './storage'

var App = React.createClass({
    render () {
        return (
            <template>
                <h1>TODOS</h1>
                <section className="todos-mn">
                    <div className="todos-input">
                        <input type="text" placeholder="请输入... 敲击回车添加待办事项" onKeyDown={this.addTodo} />
                    </div>
                    <Matters todos={this.state.todos} />
                </section>
                <section className="todos-ctrls">
                    <a href="javascript:;" onClick={this.clearDone}>clearDone</a>
                    <a href="javascript:;" onClick={this.clearAll}>clearAll</a>
                </section>
            </template>
        );
    },
    getInitialState () {
        return {
            todos: storage.get()
        }
    },
    addTodo (obj) {
        var event = obj.nativeEvent;
        var target = event.target;
        var value = target.value;
        if (event.keyCode == 13 && value) {
            var todos = this.state.todos;
            todos.push({
                content:value,
                status: 'todo'
            });
            this.setState({
                todos: todos
            });
            storage.update(todos);
            target.value = '';
        }
    },
    clearAll () {
        // storage.update([]);
        // this.setState({
        //     todos: storage.get()
        // });
    },
    clearDone () {
        // let result = [];
        // let todos = storage.get();
        // for (let i = 0;i < todos.length;i++) {
        //     (todos[i].status == 'todo') && result.push(todos[i]);
        // }
        // storage.update(result);
        // this.setState({
        //     todos: storage.get()
        // });
    }
});

export default App;
