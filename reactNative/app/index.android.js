/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('app', () => app);
