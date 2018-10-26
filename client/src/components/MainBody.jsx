import React from 'react';
import Desc from './Desc.jsx';
import Booking from './Booking.jsx';

class MainBody extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main-body-container">
                <Desc />
                <Booking />
            </div>
        )
    }
}

export default MainBody;