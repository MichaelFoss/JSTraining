import HelloWorld from '../HelloWorld/HelloWorld.jsx';
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <p>React Quickstart</p>
                <HelloWorld message="Hello World" />
            </div>
        );
    }
}

export default App;
