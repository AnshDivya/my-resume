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
        this.setState({
            showAnimation: true
        })

        setTimeout(() => {this.setState({showText: true})}, 2000);
    }

    render() {
        const { showAnimation: animationAllowed } =  this.props;
        return <>
            {!animationAllowed?
            <div className = "skill-container" id = "SKILLS">
                <h1 className = 'skill'>{this.props.name}</h1>
            </div>:
            this.state.showAnimation?(
                <>
                <ReactCSSTransitionGroup
                transitionName="skill_leftToRight"
                transitionAppear={true}
                transitionAppearTimeout={2000}
                transitionEnter={false}
                transitionLeave={false}>
                    <div className = "skill-container" id = "SKILLS">
                        <h1 className = 'skill'>{this.state.showText?this.props.name:''}</h1>
                    </div>
                    
                </ReactCSSTransitionGroup>
                
                </>
        ):(
            <>
                
                <Waypoint
                    onEnter = {({ previousPosition, currentPosition, event }) => {
                    
                        if(previousPosition === "below" && currentPosition === "inside") {
                            this.displayAnimation();
                        }
                    }}
              />
            </>
            
        )}
        </>
        
    }
}

export default Skill;