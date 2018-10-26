import React from 'react';
import { Input } from 'semantic-ui-react';


class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="nav-container">
                <div id="logo">
                    <img src="http://logodatabases.com/wp-content/uploads/2017/06/airbnb_logo_small.png"></img>
                </div>
                <Input id='search-bar' icon='search' iconPosition='left' placeholder='Search...' />
                <div id="list1" className="rectangle">Start hosting</div>
                <div id="list2" className="rectangle">Saved</div>
                <div id="list3" className="rectangle">Trips</div>
                <div id="list4" className="rectangle">Messages</div>
                <div id="list5" className="rectangle">Help</div>
                <div className="rectangle" id="list6">
                    <div className="circle"></div>
                </div>
            </div>
        )
    }
};

export default Nav;