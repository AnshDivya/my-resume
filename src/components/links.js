import React from 'react';
import linkedInLogo from '../linkedIn.webp';
import facebookLogo from '../facebook.webp';
import instagramLogo from '../instagram.webp';
import twitterLogo from '../twitter.webp';
import Image from './Image';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Waypoint } from 'react-waypoint';

import '../myStyles/links.css'
class Links extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAnimation: false
        }
    }

    displayAnimation = () => {
        console.log("hey function called!");
        this.setState({
            showAnimation: true
        })
    }

    render() {
        return this.state.showAnimation?(
            <ReactCSSTransitionGroup
                transitionName="slideDown"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}
            >
                <div className = "links-container">
                    <Image src = {linkedInLogo} styleClass = "link-image"/>
                    <Image src = {facebookLogo} styleClass = "link-image"/>
                    <Image src = {instagramLogo} styleClass = "link-image"/>
                    <Image src = {twitterLogo} styleClass = "link-image"/>
                </div>
            </ReactCSSTransitionGroup>
        ): (
            
            <Waypoint
                onEnter = {({ previousPosition, currentPosition, event }) => {
                console.log(previousPosition, currentPosition,event);

                if(previousPosition === "below" && currentPosition === "inside") {
                    this.displayAnimation();
                }
              }}
              />
        )
    }
    
}

export default Links;