import React from 'react';

class HelloWorld extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.message}
            </div>
        );
    }
}

HelloWorld.propTypes = {
    message: React.PropTypes.string
};

export default HelloWorld;
