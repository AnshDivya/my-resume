import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Waypoint } from 'react-waypoint';
import PersonalDetails from './personal-details';
import LinkContainer from './LinkContainer';
import Image from './Image';
import linkedInLogo from '../linkedInBlack.webp';
import facebookLogo from '../facebookBlack.webp';
import instagramLogo from '../instagramBlack.webp';
import twitterLogo from '../twitterBlack.webp';
class PersonalDetailsAnimatorOnScroll extends React.Component {
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
        const { showAnimation: animationAllowed } = this.props;
        return !animationAllowed?
        <div className = 'personal-details-container'>
            <PersonalDetails>
                <LinkContainer class = 'links-container2'>
                    <Image src = {linkedInLogo} styleClass = "link-image"/>
                    <Image src = {facebookLogo} styleClass = "link-image"/>
                    <Image src = {twitterLogo} styleClass = "link-image"/>
                    <Image src = {instagramLogo} styleClass = "link-image"/>
                </LinkContainer>
            </PersonalDetails>
        </div>

        :this.state.showAnimation?
            (<ReactCSSTransitionGroup
                transitionName="rightToLeft"
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnter={false}
                transitionLeave={false}
            >
                
                <div className = 'personal-details-container'>
                    <PersonalDetails>
                        <LinkContainer class = 'links-container2'>
                            <Image src = {linkedInLogo} styleClass = "link-image"/>
                            <Image src = {facebookLogo} styleClass = "link-image"/>
                            <Image src = {twitterLogo} styleClass = "link-image"/>
                            <Image src = {instagramLogo} styleClass = "link-image"/>
                        </LinkContainer>
                    </PersonalDetails>
                    
                </div>
            </ReactCSSTransitionGroup>
        ): (
            <>
                <Waypoint
                onEnter = {({ previousPosition, currentPosition, event }) => {
                console.log(previousPosition, currentPosition,event);

                if(previousPosition === "below" && currentPosition === "inside") {
                    this.displayAnimation();
                }
                }}
                />
                <div className = 'personal-details-container'>
                    <PersonalDetails />
                    <LinkContainer>
                        <Image src = {linkedInLogo} styleClass = "link-image"/>
                        <Image src = {facebookLogo} styleClass = "link-image"/>
                        <Image src = {twitterLogo} styleClass = "link-image"/>
                        <Image src = {instagramLogo} styleClass = "link-image"/>
                    </LinkContainer>
                </div>
            </>
            
        )
    }
}

export default PersonalDetailsAnimatorOnScroll;