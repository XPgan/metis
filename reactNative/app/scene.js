/**
 * Created by sunmy on 16/11/25.
 */

import React, {Component} from 'react';
import View1 from './views/View1';
import View2 from './views/View2';
import View3 from './views/View3';

export default class Scene extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        switch (this.props.view) {
            case 'view1':
                return (
                    <View1 />
                );
            break;

            case 'view2':
                return (
                    <View2 />
                );
            break;

            case 'view3':
                return (
                    <View3 />
                );
            break;
        }
    }
}
