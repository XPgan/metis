import React from 'react'
import Matter from './components/Matter.jsx'
import storage from './storage'

var App = React.createClass({
    render () {
        return (
            <div className="todos-container">
                <h1>TODOS</h1>
                <section className="todos-mn">
                    <div className="todos-input"><input type="text" placeholder="请输入... 敲击回车添加待办事项" /></div>
                    <ul className="todos-lst">
                        {
                            this.state.todos.map(function (loop) {
                                return <Matter info={loop} />
                            })
                        }
                    </ul>
                    <div className="todos-footer c-fix">
                        <span>1 / 10</span>
                        <a href="javascript:;">clear all</a>
                        <a href="javascript:;">clear done</a>
                    </div>
                </section>
            </div>
        );
    },
    getInitialState () {
        return {
            todos: storage.get()
        }
    }
});

export default App;
