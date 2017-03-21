import HelloWorld from '../HelloWorld/HelloWorld.jsx';
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <HelloWorld message="Hello World" />
        );
    }
}

export default App;
