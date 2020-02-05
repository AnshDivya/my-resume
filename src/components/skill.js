import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Waypoint } from 'react-waypoint';
class Skill extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showAnimation: false,
            showText: false
        }
    }

    displayAnimation = () => {
        console.log("hey function called!");
        this.setState({
            showAnimation: true
        })

        setTimeout(() => {this.setState({showText: true})}, 2000);
    }

    render() {
        return <div className = "skill-container">
            {this.state.showAnimation?(
                <>
                <ReactCSSTransitionGroup
                transitionName="skill_leftToRight"
                transitionAppear={true}
                transitionAppearTimeout={2000}
                transitionEnter={false}
                transitionLeave={false}>
                    <div className = "skill">
                        <h1>{this.state.showText?this.props.name:''}</h1>    
                    </div>            
                </ReactCSSTransitionGroup>
                
                </>
        ):(
            
            <Waypoint
            onEnter = {({ previousPosition, currentPosition, event }) => {
                console.log(previousPosition, currentPosition,event);

                if(previousPosition === "below" && currentPosition === "inside") {
                    this.displayAnimation();
                }
              }}
              />
        )}
        </div>
        
    }
}

export default Skill;