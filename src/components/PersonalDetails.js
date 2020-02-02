import React from 'react';
import '../myStyles/personalDetails.css';
import Info from './info';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
function PersonalDetails() {
    return (
        <ReactCSSTransitionGroup
            transitionName="personalDetails_rightToLeft"
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnter={false}
            transitionLeave={false}
        >
            <div className = "personal-details">
                <h1>Divyansh Thakur</h1>
                <h2>SOFTWARE ENGINEER</h2>
                <Info infoType = "Email" infoValue = "divyansh15.dt@gmail.com"/>
                <Info infoType = "Phone" infoValue = "123-456-789" />
                <Info infoType = "Experience" infoValue = "2 yrs" />
            </div>            
        </ReactCSSTransitionGroup>
        
    ); 
}

export default PersonalDetails;