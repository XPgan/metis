import React from 'react'
import Matter from './components/Matter.jsx'
import storage from './storage'

var App = React.createClass({
    render () {
        return (
            <div className="todos-container">
                <h1>TODOS</h1>
                <section className="todos-mn">
                    <div className="todos-input"><input type="text" placeholder="请输入... 敲击回车添加待办事项" onKeyDown={this.addTodo} /></div>
                    <ul className="todos-lst">
                        {
                            this.state.todos.map(function (obj, index) {
                                obj.index = index;
                                return <Matter info={obj} />
                            })
                        }
                    </ul>
                    <div className="todos-footer c-fix">
                        <span>1 / 10</span>
                        <a href="javascript:;" onClick={this.clearAll}>clear all</a>
                        <a href="javascript:;" onClick={this.clearDone}>clear done</a>
                    </div>
                </section>
            </div>
        );
    },
    getInitialState () {
        return {
            todos: storage.get()
        }
    },
    addTodo (obj) {
        let event = obj.nativeEvent;
        let target = event.target;
        let value = target.value;
        if (event.keyCode == 13 && value) {
            let todos = storage.get();
            todos.push({
                content: value,
                status: 'todo'
            });
            storage.update(todos);
            this.setState({
                todos: storage.get()
            });
            target.value = '';
        }
    },
    clearAll () {
        storage.update([]);
        this.setState({
            todos: storage.get()
        });
    },
    clearDone () {
        let result = [];
        let todos = storage.get();
        for (let i = 0;i < todos.length;i++) {
            (todos[i].status == 'todo') && result.push(todos[i]);
        }
        storage.update(result);
        this.setState({
            todos: storage.get()
        });
    }
});

export default App;
