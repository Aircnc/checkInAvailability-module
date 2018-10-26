import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Nav />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('nav'));