import React from 'react'
import Matter from './components/Matter.jsx'

class App extends React.Component {
    render () {
        return (
            <div className="todos-container">
                <h1>TODOS</h1>
                <section className="todos-mn">
                    <div className="todos-input"><input type="text" placeholder="请输入... 敲击回车添加待办事项" /></div>
                    <ul className="todos-lst">
                        <Matter />
                    </ul>
                    <div className="todos-footer c-fix">
                        <span>1 / 10</span>
                        <button>clear all</button>
                        <button>clear done</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
