import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Waypoint } from 'react-waypoint';
import PersonalDetails from './personal-details';

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
        <PersonalDetails />
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
                    <PersonalDetails />
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
                </div>
            </>
            
        )
    }
}

export default PersonalDetailsAnimatorOnScroll;