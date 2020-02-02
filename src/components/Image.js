import React from 'react';
import '../myStyles/Image.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
function Image(props) {
    return (
        <ReactCSSTransitionGroup
            transitionName="image_leftToRight"
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnter={false}
            transitionLeave={false}
        >
            <img alt = 'coding' className = {props.styleClass}  src = {props.src} />             
        </ReactCSSTransitionGroup>
        
    );
}

export default Image;