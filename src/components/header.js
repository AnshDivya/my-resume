import React from 'react';
import '../myStyles/header.css';

import NavigatorButton from './navigator-button';
function Header() {
    return (
        <div className = 'header'>
            <div className = 'header-name-container'>
                <h1>Divyansh Thakur</h1>
            </div>
            <div className = 'header-navigation-button-container'>
                <NavigatorButton itemName = 'EXPERIENCE'/>
                <NavigatorButton itemName = 'EDUCATION'/>
                <NavigatorButton itemName = 'SKILLS'/>
                <NavigatorButton itemName = 'PROJECTS'/>
                <NavigatorButton itemName = 'CONTACT'/>
            </div>
        </div>
    );
}

export default Header;