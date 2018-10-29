import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Images from './components/Images';
import MainBody from './components/MainBody';

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
ReactDOM.render(<MainBody />, document.getElementById('main-body'));
