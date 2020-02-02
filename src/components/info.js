import React from 'react';
import '../myStyles/info.css';
function Info(props) {
    return (
        <div className = "info">
            <h3>{props.infoType}</h3>
            <h4>{props.infoValue}</h4>
        </div>
    )
}

export default Info;