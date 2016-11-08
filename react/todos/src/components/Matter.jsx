import React from 'react'

var Matter = React.createClass({
    render () {
        let info = this.props.info;
        return (
            <li className={info.status}><span></span>{info.content}</li>
        );
    }
});

export default Matter;
