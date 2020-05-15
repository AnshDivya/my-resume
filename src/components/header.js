import React, { useState } from 'react';
import '../myStyles/header.css';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import NavigatorButton from './navigator-button';

function Header(props) {

    const width = window.innerWidth;
    const [mobileMenu, setMenu] = useState(width <= 868 ? true: false);
    const { isMenuVisible } = props;
    window.addEventListener('resize', () => {
        if(window.innerWidth > 868) {
            if(mobileMenu)
                setMenu(false);
        }
        else {
            if(!mobileMenu)
                setMenu(true);
        }
    });

    return (
        <div className = 'header'>
            <div className = 'header-name-container'>
                <h1>Divyansh Thakur</h1>
                {mobileMenu && <button style = {{ outline: 'none' }} onClick = {props.handleMenu}>
                {isMenuVisible ? 
                <ClearIcon 
                    style = {
                        {
                            color: '#182153',
                            height: '70px',
                            fontSize: '40px',
                            float: 'right',
                            marginRight: '10px',
                            
                        }
                    }
                /> :
                <MenuIcon 
                    style = {
                        {
                            color: '#182153',
                            height: '70px',
                            fontSize: '40px',
                            float: 'right',
                            marginRight: '10px',
                        }
                }
                
                />
            }
                </button>}
                
                
            </div>
            {!mobileMenu && <div className = 'header-navigation-button-container'>
                <NavigatorButton itemName = 'EXPERIENCE' {...props}/>
                <NavigatorButton itemName = 'EDUCATION' {...props}/>
                <NavigatorButton itemName = 'SKILLS' {...props}/>
                <NavigatorButton itemName = 'CONTACT' {...props}/>
            </div>}
            
        </div>
    );
}

export default Header;