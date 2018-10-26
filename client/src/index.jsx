import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import Images from './components/Images.jsx';

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <Nav />
//         )
//     }
// }

ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Images />, document.getElementById('images'));