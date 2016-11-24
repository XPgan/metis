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
