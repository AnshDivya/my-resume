import React from 'react';
import '../myStyles/header.css';
import MenuIcon from '@material-ui/icons/Menu';

import NavigatorButton from './navigator-button';
function Header(props) {
    return (
        <div className = 'header'>
            <div className = 'header-name-container'>
                <h1>Divyansh Thakur</h1>
                <MenuIcon style = {
                    {
                        color: '#182153',
                        height: '70px',
                        fontSize: '40px',
                        float: 'right',
                        marginRight: '10px'
                    }
                } />
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