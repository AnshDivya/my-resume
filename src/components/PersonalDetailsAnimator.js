import React from 'react';
import '../myStyles/personalDetails.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PersonalDetails from './personal-details';
function PersonalDetailsAnimator() {
    return (
        <ReactCSSTransitionGroup
            transitionName="personalDetails_rightToLeft"
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnter={false}
            transitionLeave={false}
        >
            <PersonalDetails />     
        </ReactCSSTransitionGroup>
        
    ); 
}

export default PersonalDetailsAnimator;