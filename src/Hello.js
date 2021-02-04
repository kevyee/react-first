import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <h2>
                Hello, {this.props.first} {this.props.last}!
            </h2>
        );
    }
}

export default Hello;