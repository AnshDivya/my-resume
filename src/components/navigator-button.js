import React from 'react';

function NavigatorButton(props) {
    return (
        <div className = 'navigator-button'>
            <a href = "#hello">{props.name}</a>
        </div>
    );
}

export default NavigatorButton;