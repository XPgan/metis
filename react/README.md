# React #

### #组件 ###

组件可复合

原生 html 标签首字母小写，自定义 react 组件首字母大写

```javascript
import React from 'react';

class Welcome extends React.Component {
    render () {
        return (
            <h1>学习如何使用 react</h1>
        );
    }
}

export default Welcome;
```

*****

### #状态 ###

+ __State__

    ```javascript
    import React from 'react';

    var Welcome = React.createClass({
        getInitialState () {
            return {
                status: true
            }
        },
        handleClick () {
            this.setState({
                status: !this.state.status
            });
        },
        render () {
            var text = this.state.status ? '是' : '否';
            return (
                <button onClick={this.handleClick}>{text}</button>
            );
        }
    });
    
    export default Welcome;
    ```

+ __Props__

*****

#### *JSX ####

本质为 javascript

