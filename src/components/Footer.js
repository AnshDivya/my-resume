import React from 'react';

function Footer() {
    
    const year = new Date().getFullYear();
    return (
        <footer style = {{textAlign: 'center', padding: '10px 0px'}}>
            <p>© {year} By Divyansh Thakur.</p>
        </footer>
    )
}

export default Footer;