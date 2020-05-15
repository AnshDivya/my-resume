import React from 'react';
import '../myStyles/background.css';
import Intro from './intro';
function Background(props) {
    //const height = document.getElementById('intro').style.height;
    return (
        <div className = 'background'>
            {props.children}
        </div>
    );
}

export default Background;