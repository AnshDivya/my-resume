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
                </div>
            </>
            
        )
    }
}

export default PersonalDetailsAnimatorOnScroll;