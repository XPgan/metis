/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';

export default class app extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <View></View>
        );
    }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('app', () => app);
