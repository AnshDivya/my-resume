import React from 'react';
import Info from './info';
function PersonalDetails(props) {

    return (
        <div className = "personal-details">
                <h1>Divyansh Thakur</h1>
                <h2>Incoming Analyst @GOLDMAN SACHS</h2>
                <Info infoType = "Email" infoValue = "divyansh15.dt@gmail.com"/>
                <Info infoType = "Experience" infoValue = "2 months" />
                
                {props.children}
            </div>    
    )   
}

export default PersonalDetails;