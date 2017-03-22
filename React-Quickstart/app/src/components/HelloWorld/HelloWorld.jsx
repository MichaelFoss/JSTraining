import React from 'react';

import './HelloWorld.scss';

class HelloWorld extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <p>
                {this.props.message}
            </p>
        );
    }
}

HelloWorld.propTypes = {
    message: React.PropTypes.string
};

export default HelloWorld;
