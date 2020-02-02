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
                <NavigatorButton name = 'EXPERIENCE'/>
                <NavigatorButton name = 'EDUCATION'/>
                <NavigatorButton name = 'SKILLS'/>
                <NavigatorButton name = 'PROJECTS'/>
                <NavigatorButton name = 'CONTACT'/>
            </div>
        </div>
    );
}

export default Header;