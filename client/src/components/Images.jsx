import React from 'react';

class Images extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="images-container">
                <div  className="bigpic"></div>
                <div  className="smallpic1"></div>
                <div  className="smallpic2"></div>
                <div  className="smallpic3"></div>
                <div  className="smallpic4"></div>
            </div>
        )
    }
};

export default Images;