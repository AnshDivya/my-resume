import React from 'react';
import '../myStyles/header.css';

import NavigatorButton from './navigator-button';
function Header(props) {
    return (
        <div className = 'header'>
            <div className = 'header-name-container'>
                <h1>Divyansh Thakur</h1>
            </div>
            <div className = 'header-navigation-button-container'>
                <NavigatorButton itemName = 'EXPERIENCE' {...props}/>
                <NavigatorButton itemName = 'EDUCATION' {...props}/>
                <NavigatorButton itemName = 'SKILLS' {...props}/>
                <NavigatorButton itemName = 'CONTACT' {...props}/>
            </div>
        </div>
    );
}

export default Header;