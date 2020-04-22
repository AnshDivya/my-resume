import React from 'react';

import '../myStyles/timeline.css';
import { Waypoint } from 'react-waypoint';
import TimelineChild from './TimelineChild';
class TimeLine extends React.Component {
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
        return this.state.showAnimation?
            <TimelineChild {...this.props}/>:(
            
            <>
            <Waypoint
            onEnter = {({ previousPosition, currentPosition, event }) => {

                if(previousPosition === "below" && currentPosition === "inside") {
                    this.displayAnimation();
                }
              }}
              />
               <TimelineChild {...this.props}/>
              </>
        )
    }
}

export default TimeLine;