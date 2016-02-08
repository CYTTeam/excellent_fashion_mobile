import React, { PropTypes, Component } from 'react';

class MapDetailPage extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <img src={require('../public/images/navbar/headerlogo.png')}/>
                    <span className="navbar-toggle">
                        <img src={require('../public/images/navbar/menu.png')}/>
                    </span>
                </div>
            </div>
        );
    }
}

export default MapDetailPage;
