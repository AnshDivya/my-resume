import React from 'react';
import '../myStyles/Image.css'
function Image(props) {
    return (
        <img alt = 'coding' className = {props.styleClass}  src = {props.src} />
    );
}

export default Image;