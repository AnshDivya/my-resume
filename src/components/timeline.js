import React from 'react';

import '../myStyles/timeline.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Waypoint } from 'react-waypoint';
class TimeLine extends React.Component {
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
            <div className = "timeline-container">
                        <ReactCSSTransitionGroup
                            transitionName="leftToRight"
                            transitionAppear={true}
                            transitionAppearTimeout={1500}
                            transitionEnter={false}
                            transitionLeave={false}>
                            <div className = "year-and-role">
                                <div className = "movable-container">
                                    <h2>{this.props.years}</h2>
                                    <h3>{this.props.role}</h3>
                                </div>
                            </div>
                        </ReactCSSTransitionGroup>
                        
                        <div className = "org-and-desc">
                            
                            <ReactCSSTransitionGroup
                            transitionName="bottomToTop"
                            transitionAppear={true}
                            transitionAppearTimeout={1500}
                            transitionEnter={false}
                            transitionLeave={false}>
                                <div className = "dot"></div>
                            </ReactCSSTransitionGroup>
                            <ReactCSSTransitionGroup
                            transitionName="rightToLeft"
                            transitionAppear={true}
                            transitionAppearTimeout={2000}
                            transitionEnter={false}
                            transitionLeave={false}>
                                <div className = "movable-container">
                                    <h3>{this.props.org}</h3>
                                    <p>{this.props.description}</p>
                                </div>
                            </ReactCSSTransitionGroup>
                            
                        </div>
                    </div>
        ):(
            
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

export default TimeLine;