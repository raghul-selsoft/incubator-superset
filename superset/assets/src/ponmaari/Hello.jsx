import React from 'react';

export default class Hello extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.user}</h1>
            </div>
        )
    }
}