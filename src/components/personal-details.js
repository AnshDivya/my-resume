import React from 'react';
import Info from './info';
function PersonalDetails(props) {

    return (
        <div className = "personal-details">
                <h1>Divyansh Thakur</h1>
                <h2>SOFTWARE ENGINEER</h2>
                <Info infoType = "Email" infoValue = "divyansh15.dt@gmail.com"/>
                <Info infoType = "Phone" infoValue = "123-456-789" />
                <Info infoType = "Experience" infoValue = "2 yrs" />
                {props.children}
            </div>    
    )   
}

export default PersonalDetails;