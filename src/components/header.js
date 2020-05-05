import React, { useState } from 'react';
import '../myStyles/header.css';
import MenuIcon from '@material-ui/icons/Menu';

import NavigatorButton from './navigator-button';
function Header(props) {

    const width = window.innerWidth;
    const [isMenuVisible, setMenu] = useState(width <= 868? true: false);
    
    window.addEventListener('resize', () => {
        if(window.innerWidth > 868) {
            if(isMenuVisible)
                setMenu(false);
        }
        else {
            if(!isMenuVisible)
                setMenu(true);
        }
    });

    return (
        <div className = 'header'>
            <div className = 'header-name-container'>
                <h1>Divyansh Thakur</h1>
                {isMenuVisible && <button onClick = {props.handleMenu}>
                <MenuIcon style = {
                    {
                        color: '#182153',
                        height: '70px',
                        fontSize: '40px',
                        float: 'right',
                        marginRight: '10px'
                    }
                }
                
                />
                </button>}
                
                
            </div>
            {!isMenuVisible && <div className = 'header-navigation-button-container'>
                <NavigatorButton itemName = 'EXPERIENCE' {...props}/>
                <NavigatorButton itemName = 'EDUCATION' {...props}/>
                <NavigatorButton itemName = 'SKILLS' {...props}/>
                <NavigatorButton itemName = 'CONTACT' {...props}/>
            </div>}
            
        </div>
    );
}

export default Header;