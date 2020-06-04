import React from 'react';
import linkedInLogo from '../linkedIn.webp';
import facebookLogo from '../facebook.webp';
import instagramLogo from '../instagram.webp';
import twitterLogo from '../twitter.webp';
import Image from './Image';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Waypoint } from 'react-waypoint';

import '../myStyles/links.css'
import LinkContainer from './LinkContainer';
class Links extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAnimation: false
        }
    }

    displayAnimation = () => {
        
        this.setState({
            showAnimation: true
        })
    }
    
    render() {
        const {showAnimation: animationAllowed } = this.props;
        return !animationAllowed?
        <LinkContainer class = 'links-container'>
            <a href = "https://www.linkedin.com/in/divyansh-thakur-929765167/">
                <Image src = {linkedInLogo} styleClass = "link-image"/>
            </a>
            <a href = "https://www.facebook.com/divyansh.thakur.5070/">
                <Image src = {facebookLogo} styleClass = "link-image"/>
            </a>
            <a href = "https://twitter.com/Divyans28185258">
                <Image src = {twitterLogo} styleClass = "link-image"/>
            </a>
        </LinkContainer> 
        
        :this.state.showAnimation?(
            <ReactCSSTransitionGroup
                transitionName="slideDown"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}
            >
                <LinkContainer class = 'links-container'>
                    <a href = "https://www.linkedin.com/in/divyansh-thakur-929765167/">
                        <Image src = {linkedInLogo} styleClass = "link-image"/>
                    </a>
                    <a href = "https://www.facebook.com/divyansh.thakur.5070/">
                        <Image src = {facebookLogo} styleClass = "link-image"/>
                    </a>
                    <a href = "https://twitter.com/Divyans28185258">
                        <Image src = {twitterLogo} styleClass = "link-image"/>
                    </a>
                    
                </LinkContainer>
            </ReactCSSTransitionGroup>
        ): (
            
            <Waypoint
                onEnter = {({ previousPosition, currentPosition, event }) => {
                
                if(previousPosition === "below" && currentPosition === "inside") {
                    this.displayAnimation();
                }
              }}
              />
        )
    }
    
}

export default Links;