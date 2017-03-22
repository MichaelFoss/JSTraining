import React from 'react';

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
