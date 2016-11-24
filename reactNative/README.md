# React Native #

### #布局 ###

+ __flexDirection__ (主轴方向)

    + column
    
    + row
    
+ __justifyContent__ (子元素沿主轴排列方式)
    
    + flex-start
    
    + flex-end
    
    + center
    
    + space-around
    
    + space-between
    
+ __alignItems__ (子元素沿次轴排列方式)
    
    + flex-start
    
    + flex-end
    
    + center
    
    + stretch

```javascript
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';

export default class app extends Component {
    render() {
        return (
            <View style={styles.view}>
                <View style={styles.first}></View>
                <View style={styles.second}></View>
                <View style={styles.third}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    first: {
        backgroundColor: 'yellow',
        width: 90,
        height: 90
    },
    second: {
        backgroundColor: 'green',
        width: 100,
        height: 100
    },
    third: {
        backgroundColor: 'blue',
        width: 50,
        height: 50
    }
});

AppRegistry.registerComponent('app', () => app);
```

*****

### #组件 ###

+ __TextInput__

    ```javascript
    import React, {Component} from 'react';
    import {
        AppRegistry,
        StyleSheet,
        View,
        Text,
        TextInput
    } from 'react-native';
    
    export default class app extends Component {
        constructor (props) {
            super(props);
            this.state = {
                text: ''
            }
        }
        render() {
            return (
                <View>
                    <TextInput placeholder="请输入..." onChangeText={(text) => this.changeTextHandle(text)} />
                    <Text>{this.state.text}</Text>
                </View>
            );
        }
        changeTextHandle (text) {
            this.setState({
                text: text
            });
        }
    }
    
    AppRegistry.registerComponent('app', () => app);
    ```